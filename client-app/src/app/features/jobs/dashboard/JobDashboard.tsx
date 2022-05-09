import React from "react";
import { Grid } from "semantic-ui-react";
import { Category } from "../../../models/category";
import { Job } from "../../../models/job";
import { Resource } from "../../../models/resource";
import { Status } from "../../../models/status";
import JobDetails from "../details/JobDetails";
import JobForm from "../form/JobForm";
import JobList from "./JobList";

interface Props {
    jobs: Job[];
    statuses: Status[];
    categories: Category[];
    resources: Resource[];
    selectedJob: Job | undefined;
    editMode: boolean;
    selectJob:(id:string) => void;
    cancelSelectJob: () => void;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (job: Job)=> void;
    deleteJob: (id: string) => void;
    submitting: boolean;
}

export default function JobDashboard({ jobs, selectedJob,selectJob, cancelSelectJob, editMode, 
    openForm, closeForm, statuses, categories, resources, createOrEdit, deleteJob, submitting }: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <JobList jobs={jobs} 
                    selectJob= {selectJob} 
                    deleteJob={deleteJob}
                    submitting={submitting}
                />
            </Grid.Column>
            <Grid.Column width='6'>
                { selectedJob && !editMode &&
                <JobDetails 
                job={selectedJob} 
                cancelSelectJob={cancelSelectJob}
                openForm={openForm}
                />}
                {editMode &&
                <JobForm 
                closeForm={closeForm}
                job={selectedJob}
                statuses={statuses}
                categories={categories}
                resources={resources}
                createOrEdit={createOrEdit}
                submitting={submitting}
                />}
            </Grid.Column>
        </Grid>
    )
}