import { User } from "./user";

export class Parent{
    id: number;
    user: User;

    constructor(
        id: number, 
        user: User) {
        this.user = user;
        this.id = id;
    }

    static fromJson(json: any): Parent {
        return new Parent(
            json.id,
            User.fromJson(json.user),
        );
    }

    toJsonString() : string {
        return JSON.stringify(this);
    }
}