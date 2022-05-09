import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Job } from '../models/job'
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import JobDashboard from '../features/jobs/dashboard/JobDashboard';
import { Status } from '../models/status';
import { Category } from '../models/category';
import { Resource } from '../models/resource';
import { v4 as uuid } from 'uuid';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';

function App() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [statuses, setStatuses] = useState<Status[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [resources, setResources] = useState<Resource[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    agent.Jobs.list().then(response => {
      let jobs: Job[] = [];
      // response.forEach(job => {
      //   job.createdAt = job.createdAt.split('T')[0];
      //   jobs.push(job);
      // })
      setJobs(response);
      setLoading(false);
    })
  }, [])
  useEffect(() => {
    agent.Statuses.list().then(response => {
      setStatuses(response);
    })
  }, [])
  useEffect(() => {
    agent.Categories.list().then(response => {
      setCategories(response);
    })
  }, [])
  useEffect(() => {
    agent.Resources.list().then(response => {
      setResources(response);
    })
  }, [])

  function handleSelectJob(id: string) {
    setSelectedJob(jobs.find(x => x.id === id));
  }

  function handleCancelJob() {
    setSelectedJob(undefined);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectJob(id) : handleCancelJob();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEditJob(job: Job) {
    setSubmitting(true);
    if (job.id) {
      agent.Jobs.update(job).then(() => {
        setJobs([...jobs.filter(x => x.id !== job.id), job])
        setSelectedJob(job);
        setEditMode(false);
        setSubmitting(false);
      })
    } else {
      job.id = uuid();
      job.customerId = uuid();
      job.createdAt = "2019-01-06T17:16:40";
      agent.Jobs.create(job).then(() => {
        setJobs([...jobs, job]);
        setSelectedJob(job);
        setEditMode(false);
        setSubmitting(false);
      })
    }
  }

  function handleDeleteJob(id: string) {
    setSubmitting(true);
    agent.Jobs.delete(id).then(() => {
      setJobs([...jobs.filter(x => x.id !== id)])
      setSubmitting(false);
    })
  }

  if (loading) return <LoadingComponent content='Loading app' />

  return (
    <Fragment>
      <NavBar openForm={handleFormOpen} />
      <Container style={{ marginTop: '7em' }}>
        <JobDashboard
          jobs={jobs}
          statuses={statuses}
          categories={categories}
          resources={resources}
          selectedJob={selectedJob}
          editMode={editMode}
          selectJob={handleSelectJob}
          cancelSelectJob={handleCancelJob}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditJob}
          deleteJob={handleDeleteJob}
          submitting={submitting}
        />
      </Container>
    </Fragment>
  );
}

export default App;
