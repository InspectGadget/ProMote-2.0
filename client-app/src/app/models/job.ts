import { Category } from "./category";
import { Customer } from "./customer";
import { Employee } from "./employee";
import { Resource } from "./resource";
import { Status } from "./status";

export interface Job {
    id: string;
    title: string;
    description: string;
    minExperience: string;
    salary: number;
    createdAt: Date;
    updatedAt: Date;
    status: string;
    category: Category;
    customer: string;
    employee: string;
    resource: string;
    image: string;
}