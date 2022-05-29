import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Item, Label, Segment } from "semantic-ui-react";
import { Job } from "../../../models/job";

interface Props {
    job: Job
}

export default function JobListItem({ job }: Props) {

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size="tiny" circular src={`/assets/userImages/${job.image}.jpg`} />
                        <Item.Content>
                            <Item.Header as={Link} to={`/jobs/${job.id}`}>{job.title}</Item.Header>
                            <Item.Description><Label basic content={job.category} /></Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name="history" />Experience: {job.minExperience}
                    <Icon name="money bill alternate outline" />Salary: {job.salary}
                    <Icon name="save" />Created at: {job.createdAt}
                </span>
            </Segment>
            <Segment secondary>
                Apply go here
            </Segment>
            <Segment clearing>
                <span>{job.description}</span>
                <Button
                    as={Link}
                    to={`/jobs/${job.id}`}
                    color='teal'
                    floated="right"
                    content='View'
                />
            </Segment>
        </Segment.Group>
    )
}