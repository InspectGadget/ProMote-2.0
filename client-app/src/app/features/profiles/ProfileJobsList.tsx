import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button, Grid, Header, List, Tab } from "semantic-ui-react";
import LoadingComponent from "../../layout/LoadingComponent";
import { useStore } from "../../stores/store";
import ProfileJobsListItem from "./ProfileJobsListItem";

export default function ProfileJobsList() {

    const { jobStore } = useStore();
    const { jobsByDate, loadJobs, jobRegistry } = jobStore;

    useEffect(() => {
        if (jobRegistry.size <= 1) loadJobs();
    }, [jobRegistry.size, loadJobs])

    return (
        <Tab.Pane>
            <Grid>
                <Grid.Column width={16}>
                    <Header
                        floated="left"
                        icon='user'
                        content={`Jobs list`}
                    />
                    <Button as={NavLink} to='/createJob' floated="right" basic content='Create Job' />
                </Grid.Column>
                <Grid.Column width={16}>
                    <List divided verticalAlign='middle'>
                        {jobsByDate.map(job => (
                            <ProfileJobsListItem key={job.id} job={job} />
                        ))}
                    </List>
                </Grid.Column>
            </Grid>
        </Tab.Pane>
    )
}