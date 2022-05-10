import React from "react";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../layout/LoadingComponent";
import { useStore } from "../../../stores/store";
import JobDetailedInfo from "./JobDetailedInfo";
import JobDetailedSidebar from "./JobDetailedSidebar";

export default observer( function JobDetails() {

    const { jobStore } = useStore();
    const { selectedJob: job, loadJob, loadingInitial } = jobStore;
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        if(id) loadJob(id);
    }, [id, loadJob]);

    if (loadingInitial || !job) return <LoadingComponent />;
    return (
        <Grid>
            <Grid.Column width={10}>
                <JobDetailedInfo job={job} />
            </Grid.Column>
            <Grid.Column width={6}>
                <JobDetailedSidebar />
            </Grid.Column>
        </Grid>
    )
})