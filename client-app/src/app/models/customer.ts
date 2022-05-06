import { Account } from "./account";

export interface Customer {
    id: string;
    username: string;
    account: Account;
    createdAt: Date;
    verifiedDate: Date;
    isSubscribed: boolean;
}