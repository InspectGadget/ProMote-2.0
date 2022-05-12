import React from "react";
import { Grid, Header, Tab } from "semantic-ui-react";
import TelegramFilterEditForm from "./TelegramFilterEditForm";

export default function ProfileTelegramSubscription () {
    return(
        <Tab.Pane>
            <Grid>
                <Grid.Column width={16}>
                    <Header
                        floated="left"
                        icon='telegram plane'
                        content={`Telegram bot`}
                    />
                </Grid.Column>
                <Grid.Column width={16}>
                        <TelegramFilterEditForm />
                </Grid.Column>
            </Grid>
        </Tab.Pane>
    )
}