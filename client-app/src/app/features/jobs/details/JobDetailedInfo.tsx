import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import { Job } from "../../../models/job";

interface Props {
    job: Job
}

export default observer( function JobDetailedInfo({job}: Props) {
    
    return (
        <Card fluid>
            <Card.Content>
                <Image
                    floated='right'
                    size='small'
                    src={`/assets/userImages/${job.image}.jpg`}
                />
                <Card.Header>{job.title}</Card.Header>
                <Card.Meta>{job.category}</Card.Meta>
                <Card.Description>
                    <div>{job.description}</div>
                    <div>Resource: {job.resource}</div>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div><Icon name="history"/> Experience: {job.minExperience}</div>
                <div><Icon name="money bill alternate outline" className="icon" /> Salary: {job.salary}</div>
                <div><Icon name="user outline" className="icon" /> Created by: {job.salary}</div>
                <div><Icon name="save" className="icon"/> Created at: {job.createdAt}</div>
            </Card.Content>
            <Card.Content extra>
                <Button color="teal">Apply for a job</Button>
                <Button>Cancel application</Button>
                <Button as={Link} to={`/manage/${job.id}`} floated='right' color='orange'>Manage Job</Button>
            </Card.Content>
        </Card>
    )
})