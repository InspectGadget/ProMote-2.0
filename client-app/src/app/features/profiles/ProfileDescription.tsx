import React, { useState } from "react";
import { Button, Grid, Header, Item, Segment, Tab } from "semantic-ui-react";
import ProfileEditForm from "./ProfileEditForm";

export default function ProfileDescription() {
    const [editMode, setEditMode] = useState(false);
    return (
        <Tab.Pane>
            <Grid>
                <Grid.Column width={16}>
                    <Header
                        floated="left"
                        icon='user'
                        content={`About Bob`}
                    />
                    <Button
                        floated="right"
                        basic
                        content={editMode ? 'Cancel' : 'Edit Profile'}
                        onClick={() => setEditMode(!editMode)}
                    />
                </Grid.Column>
                <Grid.Column width={16}>
                    {editMode ? (
                        <ProfileEditForm />
                    ) : (
                        <>
                        <Header as='h4' content='Bio' color='teal' textAlign='left' />
                        <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident</span>
                        <Header as='h4' content='Email' color='teal' textAlign='left' />
                        <span>bob@gmail.com</span>
                        </>
                    )}
                </Grid.Column>
            </Grid>
        </Tab.Pane>
    )
}