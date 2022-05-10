import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../layout/LoadingComponent";
import { useStore } from "../../../stores/store";
import JobFilters from "./JobFilters";
import JobList from "./JobList";

export default observer(function JobDashboard() {

    const { jobStore } = useStore();
    const { loadJobs, jobRegistry } = jobStore

    useEffect(() => {
        if (jobRegistry.size <= 1) loadJobs();
    }, [jobRegistry.size, loadJobs])

    if (jobStore.loadingInitial) return <LoadingComponent content='Loading app' />

    return (
        <Grid>
            <Grid.Column width='10'>
                <JobList />
            </Grid.Column>
            <Grid.Column width='6'>
                <JobFilters />
            </Grid.Column>
        </Grid>
    )
})