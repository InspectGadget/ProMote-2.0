import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Card, Button, Image, Icon } from "semantic-ui-react";
import LoadingComponent from "../../../layout/LoadingComponent";
import { useStore } from "../../../stores/store";

export default observer( function JobDetails() {

    const { jobStore } = useStore();
    const { selectedJob: job, loadJob, loadingInitial } = jobStore;
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        if(id) loadJob(id);
    }, [id, loadJob]);

    if (loadingInitial || !job) return <LoadingComponent />;

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
                    <Button as={Link} to={`/manage/${job.id}`} basic color='blue' content='Edit' />
                    <Button as={Link} to='/jobs' basic color='grey' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
})