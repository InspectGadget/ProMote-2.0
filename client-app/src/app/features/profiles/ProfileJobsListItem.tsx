import React from "react";
import { Link } from "react-router-dom";
import { Button, List, Image, Icon, Label, ListContent } from "semantic-ui-react";
import { Job } from "../../models/job";

interface Props {
    job: Job
}

export default function ProfileJobsListItem({ job }: Props) {
    return (
        <List.Item >
            <List.Content  >
            <Icon name="caret square right outline" ></Icon>
            {job.title}
                <Button color='red' floated='right'>Delete</Button>
                <Button as={Link} to={`/manage/${job.id}`} color='orange' floated='right'>Manage Job</Button>
            </List.Content>
        </List.Item>
    )
}