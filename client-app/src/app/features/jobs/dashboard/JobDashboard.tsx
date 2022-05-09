import { observer } from "mobx-react-lite";
import React from "react";
import { Grid } from "semantic-ui-react";
import { useStore } from "../../../stores/store";
import JobDetails from "../details/JobDetails";
import JobForm from "../form/JobForm";
import JobList from "./JobList";

export default observer(function JobDashboard() {

    const { jobStore } = useStore();
    const { selectedJob, editMode } = jobStore

    return (
        <Grid>
            <Grid.Column width='10'>
                <JobList />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedJob && !editMode && <JobDetails />}
                {editMode &&
                    <JobForm />}
            </Grid.Column>
        </Grid>
    )
})