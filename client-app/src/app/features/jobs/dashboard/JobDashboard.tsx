import React from "react";
import { Grid, List } from "semantic-ui-react";
import { CodeFixAction } from "typescript";
import { Job } from "../../../models/job";
import JobDetails from "../details/JobDetails";
import JobList from "./JobList";

interface Props {
    jobs: Job[];
    selectedJob: Job | undefined;
    selectJob:(id:string) => void;
    cancelSelectJob: () => void;
}

export default function JobDashboard({ jobs, selectedJob,selectJob, cancelSelectJob }: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <JobList jobs={jobs} selectJob= {selectJob} />
            </Grid.Column>
            <Grid.Column width='6'>
                { selectedJob &&
                <JobDetails job={selectedJob} cancelSelectJob={cancelSelectJob}/>}
            </Grid.Column>
        </Grid>
    )
}