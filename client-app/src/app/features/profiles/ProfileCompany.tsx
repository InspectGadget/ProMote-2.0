import React, { useState } from "react";
import { Button, Grid, Header, Item, Segment, Tab } from "semantic-ui-react";
import CompanyEditForm from "./CompanyEditForm";

export default function ProfileCompany() {
    return (
        <Tab.Pane>
            <Grid>
                <Grid.Column width={16}>
                    <Header
                        floated="left"
                        icon='users'
                        content={`Your company`}
                    />
                </Grid.Column>
                <Grid.Column width={16}>
                        <CompanyEditForm />
                </Grid.Column>
            </Grid>
        </Tab.Pane>
    )
}