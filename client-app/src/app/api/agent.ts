import axios, { AxiosResponse } from "axios";
import { Category } from "../models/category";
import { Job } from "../models/job";
import { Resource } from "../models/resource";
import { Status } from "../models/status";

const sleep = (delay:number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = 'http://localhost:5000/api'

axios.interceptors.response.use(async response => {
    try {
        await sleep(300);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})

const responsBody = <T> (response : AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url:string) => axios.get<T>(url).then(responsBody),
    post: <T> (url:string, body: {}) => axios.post<T>(url, body).then(responsBody),
    put: <T> (url:string, body: {}) => axios.put<T>(url, body).then(responsBody),
    del: <T> (url:string) => axios.delete<T>(url).then(responsBody)
}

const Jobs = {
    list: () => requests.get<Job[]>('/jobs'),
    details: (id:string) => requests.get<Job>(`/jobs/${id}`),
    create: (job: Job) => requests.post<void>('/jobs', job),
    update: (job: Job) => requests.put<void>(`/jobs/${job.id}`, job),
    delete: (id: string) => requests.del<void>(`/jobs/${id}`)
}

const Statuses = {
    list: () => requests.get<Status[]>('/statuses')
}

const Categories = {
    list: () => requests.get<Category[]>('/categories')
}

const Resources = {
    list: () => requests.get<Resource[]>('/resources')
}

const agent = {
    Jobs,
    Statuses,
    Categories,
    Resources
}

export default agent;