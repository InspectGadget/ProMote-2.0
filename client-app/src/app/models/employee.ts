import { Account } from "./account";
import { Company } from "./company";

export interface Employee {
    id: string;
    username: string;
    account: Account;
    createdAt: Date;
    verifiedDate: Date;
    company: Company;
}