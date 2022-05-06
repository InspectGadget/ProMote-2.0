import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Job } from "../../../models/job";

interface Props {
    jobs: Job[];
    selectJob:(id:string) => void;
}

export default function JobList({ jobs, selectJob }: Props) {
    return (
        <Segment>
            <Item.Group>
                {jobs.map(job=>(
                    <Item key={job.id}>
                        <Item.Content>
                            <Item.Header as='a'>{job.title}</Item.Header>
                            <Item.Meta>{job.createdAt}</Item.Meta>
                            <Item.Description>
                                <div>Salary: {job.salary}</div>
                                <div>Experience: {job.minExperience}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectJob(job.id)} floated="right" content="View" color="blue" />
                                <Label basic content={job.category.title} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}