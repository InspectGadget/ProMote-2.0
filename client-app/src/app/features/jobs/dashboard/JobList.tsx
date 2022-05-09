import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { useStore } from "../../../stores/store";

export default observer(function JobList() {

    const { jobStore } = useStore();
    const { deleteJob, jobsByDate, loading } = jobStore;

    const [target, setTarget] = useState('');

    function handleJobDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteJob(id);
    }

    return (
        <Segment>
            <Item.Group>
                {jobsByDate.map(job => (
                    <Item key={job.id}>
                        <Item.Content>
                            <Item.Header as='a'>{job.title}</Item.Header>
                            <Item.Meta>{job.createdAt}</Item.Meta>
                            <Item.Description>
                                <div>Salary: {job.salary}</div>
                                <div>Experience: {job.minExperience}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button as={Link} to={`/jobs/${job.id}`} floated="right" content="View" color="blue" />
                                <Button
                                    name={job.id}
                                    loading={loading && target === job.id}
                                    onClick={(e) => handleJobDelete(e, job.id)}
                                    floated="right"
                                    content="Delete"
                                    color="red" />
                                <Label basic content={job.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
})