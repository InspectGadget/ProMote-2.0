import { Role } from "./role";

export interface Account {
    id: string;
    name: string;
    surname: string;
    email: string;
    phone: string;
    password: string;
    dateOfBirth: Date;
    image: string;
    role: Role;
}