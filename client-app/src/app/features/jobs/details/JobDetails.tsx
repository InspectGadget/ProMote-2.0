import { Card, Button, Image, Icon } from "semantic-ui-react";
import LoadingComponent from "../../../layout/LoadingComponent";
import { useStore } from "../../../stores/store";

export default function JobDetails() {

    const { jobStore } = useStore();
    const { selectedJob: job, openForm, cancelSelectedJob } = jobStore;

    if (!job) return <LoadingComponent />;

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
                <div><Icon name="history" />Experience: {job.minExperience}</div>
                <div><Icon name="money bill alternate outline" />Salary: {job.salary}</div>
                <div><Icon name="user outline" />Created by: {job.salary}</div>
                <div><Icon name="save" />Created at: {job.createdAt}</div>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button onClick={() => openForm(job.id)} basic color='blue' content='Edit' />
                    <Button onClick={cancelSelectedJob} basic color='grey' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}