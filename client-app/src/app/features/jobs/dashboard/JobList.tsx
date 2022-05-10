import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "../../../stores/store";
import JobListItem from "./JobListItem";

export default observer(function JobList() {

    const { jobStore } = useStore();
    const { jobsByDate } = jobStore;

    return (
        <>
            {jobsByDate.map(job => (
                <JobListItem key={job.id} job={job} />
            ))}
        </>

    )
})