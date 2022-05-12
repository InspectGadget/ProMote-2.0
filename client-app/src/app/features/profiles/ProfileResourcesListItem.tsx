import React from "react";
import { Link } from "react-router-dom";
import { Button, List, Image, Icon, Label, ListContent } from "semantic-ui-react";
import { Resource } from "../../models/resource";

interface Props {
    resource: Resource
}

export default function ProfileResourcesListItem({ resource }: Props) {
    return (
        <List.Item >
            <List.Content  >
            <Icon name="caret square right outline" ></Icon>
            {resource.name}
                <Button color='red' floated='right'>Delete</Button>
                <Button color='orange' floated='right'>Manage resource</Button>
            </List.Content>
        </List.Item>
    )
}