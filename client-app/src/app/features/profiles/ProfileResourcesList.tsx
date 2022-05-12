import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button, Grid, Header, List, Tab } from "semantic-ui-react";
import { useStore } from "../../stores/store";
import ProfileResourcesListItem from "./ProfileResourcesListItem";

export default function ProfileResourcesList() {

    const { jobStore } = useStore();
    const { resources, loadRelatedObj } = jobStore;

    useEffect(() => {
        loadRelatedObj();
    }, [loadRelatedObj])

    return (
        <Tab.Pane>
            <Grid>
                <Grid.Column width={16}>
                    <Header
                        floated="left"
                        icon='user'
                        content={`Jobs list`}
                    />
                    <Button as={NavLink} to='/createJob' floated="right" basic  content='Create Resource' />
                </Grid.Column>
                <Grid.Column width={16}>
                    <List divided verticalAlign='middle'>
                        {resources.map(resource => (
                            <ProfileResourcesListItem key={resource.id} resource={resource} />
                        ))}
                    </List>
                </Grid.Column>
            </Grid>
        </Tab.Pane>
    )
}