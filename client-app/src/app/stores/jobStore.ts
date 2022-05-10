import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Job } from "../models/job";
import { Status } from "../models/status";
import { Category } from "../models/category";
import { Resource } from "../models/resource";


export default class JobStore {
    jobRegistry = new Map<string, Job>();
    statuses: Status[] = [];
    categories: Category[] = [];
    resources: Resource[] = [];
    selectedJob: Job | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get jobsByDate() {
        return Array.from(this.jobRegistry.values()).sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
    }


    loadJobs = async () => {
        this.loadingInitial = true;
        try {
            const statuses = await agent.Statuses.list();
            this.statuses = statuses;
            const categories = await agent.Categories.list();
            this.categories = categories;
            const resources = await agent.Resources.list();
            this.resources = resources;
            const jobs = await agent.Jobs.list();
            jobs.forEach(job => {
                this.setJob(job);
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    loadJob = async (id: string) => {
        let job = this.getJob(id);
        if (job) {
            this.selectedJob = job;
            return job;
        } else {
            this.loadingInitial = true;
            try {
                job = await agent.Jobs.details(id);
                this.setJob(job);
                runInAction(() => {
                    this.selectedJob = job;
                })
                this.setLoadingInitial(false);
                return job;
            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    loadRelatedObj = async () => {
        try {
            const statuses = await agent.Statuses.list();
            const categories = await agent.Categories.list();
            const resources = await agent.Resources.list();
            runInAction(() => {
                this.statuses = statuses;
                this.categories = categories;
                this.resources = resources;
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    private setJob = (job: Job) => {
        job.createdAt = job.createdAt.split('T')[0];
        this.jobRegistry.set(job.id, job);
    }

    private getJob = (id: string) => {
        return this.jobRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    createJob = async (job: Job) => {
        this.loading = true;
        try {
            await agent.Jobs.create(job);
            runInAction(() => {
                this.jobRegistry.set(job.id, job);
                this.selectedJob = job;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.editMode = false;
                this.loading = false;
            })
        }
    }

    updateJob = async (job: Job) => {
        this.loading = true;
        try {
            await agent.Jobs.update(job);
            runInAction(() => {
                this.jobRegistry.set(job.id, job);
                this.selectedJob = job;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    deleteJob = async (id: string) => {
        this.loading = true;
        try {
            await agent.Jobs.delete(id);
            runInAction(() => {
                this.jobRegistry.delete(id);
                this.loading = false;
            })
        } catch (error) {
            console.log(error)
            runInAction(() => {
                this.loading = false;
            })
        }
    }
}