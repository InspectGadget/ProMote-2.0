import React from "react";
import { Tab } from "semantic-ui-react";
import ProfileCompany from "./ProfileCompany";
import ProfileDescription from "./ProfileDescription";
import ProfileJobsList from "./ProfileJobsList";
import ProfileResourcesList from "./ProfileResourcesList";
import ProfileTelegramSubscription from "./ProfileTelegramSubscription";

export default function ProfileContent() {

    const panes = [
        {menuItem: 'About', render: () => <ProfileDescription />},
        {menuItem: 'My jobs', render: () => <ProfileJobsList />},
        {menuItem: 'Company', render: () => <ProfileCompany />},
        {menuItem: 'Resources', render: () => <ProfileResourcesList />},
        {menuItem: 'Telegram subscription', render: () => <ProfileTelegramSubscription />},
    ]
    return(
        <Tab
        menu={{fluid: true, vertical: true}}
        menuPosition='right'
        panes={panes}
        />
    )
}