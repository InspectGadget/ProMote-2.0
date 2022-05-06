import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Job } from '../models/job'
import { Container, Header, List } from 'semantic-ui-react';
import NavBar from './NavBar';
import JobDashboard from '../features/jobs/dashboard/JobDashboard';

function App() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | undefined>(undefined);

  useEffect(() => {
    axios.get<Job[]>('http://localhost:5000/api/jobs').then(response => {
      setJobs(response.data);
    })
  }, [])

  function handleSelectJob(id: string) {
    setSelectedJob(jobs.find(x => x.id === id));
  }

  function handleCancelJob() {
    setSelectedJob(undefined);
  }

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <JobDashboard 
        jobs={jobs} 
        selectedJob={selectedJob}
        selectJob={handleSelectJob}
        cancelSelectJob={handleCancelJob}
        />
      </Container>
    </Fragment>
  );
}

export default App;
