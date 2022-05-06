import { Customer } from "./customer";

export interface Resource {
    id: string;
    name: string;
    password: string;
    customer: Customer;
    link: string;
}