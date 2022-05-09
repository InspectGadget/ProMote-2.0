import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../layout/LoadingComponent";
import { useStore } from "../../../stores/store";
import { v4 as uuid } from 'uuid';
import { Link } from "react-router-dom";
export default observer(function JobForm() {

    const navigate = useNavigate();
    const { jobStore } = useStore();
    const { createJob, updateJob,
        loading, statuses, categories, resources, loadJob, loadRelatedObj, loadingInitial } = jobStore;
    const { id } = useParams<{ id: string }>();

    const [job, setJob] = useState({
        id: '',
        title: '',
        description: '',
        minExperience: '',
        salary: '',
        status: '',
        statusId: '',
        category: '',
        categoryId: '',
        customer: '',
        customerId: '',
        resource: '',
        resourceId: '',
        createdAt: '',
        image: ''
    });
    loadRelatedObj();
    useEffect(() => {
        if(id) {
            loadJob(id).then(job => setJob(job!));
        }  
    }, [id, loadJob])

    function handleSubmit() {
        if(job.id.length === 0) {
            let newJob = {
                ...job,
                id: uuid(),
                customerId: uuid(),
                createdAt: "2019-01-06T17:16:40"
            };
            createJob(newJob).then(() => navigate(`/jobs/${newJob.id}`))
        } else {
            updateJob(job).then(() => navigate(`/jobs/${job.id}`))
        }
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setJob({ ...job, [name]: value })
    }

    function handleDropdownChange(event: React.SyntheticEvent<HTMLElement>, data: any) {
        const value = data.value;
        const name = data.name;
        const id = [name] + 'Id';
        var idValue: string;
        if (id == 'statusId') {
            idValue = statuses.find(({ title }) => title === value)?.id.toString()!;
        }
        if (id == 'categoryId') {
            idValue = categories.find(({ title }) => title === value)?.id.toString()!;
        }
        if (id == 'resourceId') {
            idValue = resources.find(({ name }) => name === value)?.id.toString()!;
        }
        setJob({ ...job, [name]: value, [id]: idValue! })
    }

    const statusOptions = statuses.map(function (row) {
        return { text: row.title, value: row.title }
    })
    const categoryOptions = categories.map(function (row) {
        return { text: row.title, value: row.title }
    })
    const resourceOptions = resources.map(function (row) {
        return { text: row.name, value: row.name }
    })

    if(loadingInitial) return <LoadingComponent content="Loading job..." />

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input placeholder="Title" value={job.title} name='title' onChange={handleInputChange} />
                <Form.TextArea placeholder="Description" value={job.description} name='description' onChange={handleInputChange} />
                <Form.Input placeholder="MinExperience" value={job.minExperience} name='minExperience' onChange={handleInputChange} />
                <Form.Input placeholder="Salary" value={job.salary} name='salary' onChange={handleInputChange} />
                <Form.Dropdown placeholder="Status" value={job.status} options={statusOptions} name='status' onChange={handleDropdownChange} />
                <Form.Dropdown placeholder="Category" value={job.category} options={categoryOptions} name='category' onChange={handleDropdownChange} />
                <Form.Dropdown placeholder="Select resource" value={job.resource} options={resourceOptions} name='resource' onChange={handleDropdownChange} />
                <Button loading={loading} floated="right" positive type="submit" content="Submit" />
                <Button as={Link} to='/jobs' floated="right" type="button" content="Cancel" />
            </Form>
        </Segment>
    )
})