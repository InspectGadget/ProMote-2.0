import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { Category } from "../models/category";
import { Job } from "../models/job";
import { Resource } from "../models/resource";
import { Status } from "../models/status";
import { User, UserFormValues } from "../models/user";
import { store } from "../stores/store";

const sleep = (delay:number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = 'http://localhost:5000/api'

axios.interceptors.request.use(config => {
    const token = store.commonStore.token;
    if (config.headers === undefined) {
        config.headers = {};
    }
    if(token) config.headers.Authorization = `Bearer ${token}`
    return config;
})

axios.interceptors.response.use(async response => {
    await sleep(200);
    return response;
}, (error: AxiosError) => {
    const {data, status} = error.response!;
    switch(status){
        case 400:
            if(data.errors){
                const modalStateErrors = [];
                for(const key in data.errors){
                    if(data.errors[key]){
                        modalStateErrors.push(data.errors[key])
                    }
                }
                throw modalStateErrors.flat();
            }
            break;
        case 401:
            toast.error('unauthorised');
            break;
        case 404:
            toast.error('not found');
            break;
        case 500:
            toast.error('server error');
            break;

    }
    return Promise.reject(error);
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

const Account = {
    current: () => requests.get<User>('/account'),
    login: (user: UserFormValues) => requests.post<User>('/account/login', user),
    register: (user: UserFormValues) => requests.post<User>('/account/register', user)
}

const agent = {
    Jobs,
    Statuses,
    Categories,
    Resources,
    Account
}

export default agent;