import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Header, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../layout/LoadingComponent";
import { useStore } from "../../../stores/store";
import { v4 as uuid } from 'uuid';
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import MySelectInput from "../../../common/form/MySelectInput";
import * as Yup from 'yup';
import MyTextInput from "../../../common/form/MyTextInput";
import MyTextArea from "../../../common/form/MyTextArea";
import { Job } from "../../../models/job";
export default observer(function JobForm() {

    const navigate = useNavigate();
    const { jobStore } = useStore();
    const { createJob, updateJob,
        loading, statuses, categories, resources, loadJob, loadRelatedObj, loadingInitial } = jobStore;
    const { id } = useParams<{ id: string }>();
    const relobj = false;

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

    const validationSchema = Yup.object({
        title: Yup.string().required('The job title is required'),
        description: Yup.string().required('The description is required'),
        minExperience: Yup.string().required(),
        salary: Yup.string().required(),
        status: Yup.string().required(),
        category: Yup.string().required(),
        resource: Yup.string().required()
    })

    useEffect(() => {
        if (id) {
            loadJob(id).then(job => setJob(job!));
        }
    }, [id, loadJob])

    useEffect(() => {
        loadRelatedObj();
    }, [relobj, loadRelatedObj])

    function handleFormSubmit(job: Job) {
        if (job.id.length === 0) {
            let newJob = {
                ...job,
                id: uuid(),
                customerId: uuid(),
                createdAt: "2019-01-06T17:16:40",
                statusId: setStatus(job.status),
                categoryId: setCategory(job.category),
                resourceId: setResource(job.resource),
            };
            createJob(newJob).then(() => navigate(`/jobs/${newJob.id}`))
        } else {
            updateJob(job).then(() => navigate(`/jobs/${job.id}`))
        }
    }

    function setStatus(value:string) {
        return statuses.find(({ title }) => title === value)?.id.toString()!;
    }

    function setCategory(value:string) {
        return categories.find(({ title }) => title === value)?.id.toString()!;
    }

    function setResource(value:string) {
        return resources.find(({ name }) => name === value)?.id.toString()!;
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

    if (loadingInitial) return <LoadingComponent content="Loading job..." />

    return (
        <Segment clearing>
            <Header content='Job Details' sub color="teal"/>
            <Formik 
            validationSchema={validationSchema}
            enableReinitialize 
            initialValues={job} 
            onSubmit={values => handleFormSubmit(values)}>
                {({ handleSubmit, isSubmitting, dirty, isValid}) => (
                    <Form className="ui form" onSubmit={handleSubmit}>
                        <MyTextInput placeholder="Title" name='title' />
                        <MyTextArea rows={3} placeholder="Description" name='description' />
                        <MyTextInput placeholder="MinExperience" name='minExperience' />
                        <MyTextInput placeholder="Salary" name='salary' />
                        <MySelectInput placeholder="Status" name='status' options={statusOptions}/>
                        <MySelectInput placeholder="Category" name='category' options={categoryOptions}/>
                        <MySelectInput placeholder="Select resource" name='resource' options={resourceOptions}/>
                        <Button 
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={loading} floated="right" positive type="submit" content="Submit" />
                        <Button onClick={() => navigate(-1)} floated="right" type="button" content="Cancel" />
                    </Form>
                )}
            </Formik>
        </Segment>
    )
})