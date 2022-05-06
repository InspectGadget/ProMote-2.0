import React from "react";
import { Card, Button, Image, Icon } from "semantic-ui-react";
import { Job } from "../../../models/job";

interface Props {
    job: Job
    cancelSelectJob: () => void;

}

export default function JobDetails({job, cancelSelectJob}: Props) {
    return (
        <Card fluid>
            <Card.Content>
                <Image
                    floated='right'
                    size='mini'
                    src={`/assets/userImages/${job.image}.jpg`}
                />
                <Card.Header>{job.title}</Card.Header>
                <Card.Meta>{job.category}</Card.Meta>
                <Card.Description>
                    {job.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div><Icon name="history" />Experience: {job.minExperience}</div>
                <div><Icon name="money bill alternate outline" />Salary: {job.salary}</div>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button basic color='blue' content='Apply' />
                    <Button onClick={cancelSelectJob} basic color='grey' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}