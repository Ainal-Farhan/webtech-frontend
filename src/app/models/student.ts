import { User } from "./user";

export class Student{
    id: number;
    matricNumber: string;
    user: User;

    constructor(
        id: number,
        matricNumber: string,
        user: User,
        ) {
            this.id = id;
            this.matricNumber = matricNumber;
            this.user = user;
    }

    static fromJson(json: any): Student {
        return new Student(
            json.id,
            json.matricNumber,
            User.fromJson(json.user),
        );
    }

    toJsonString() : string {
        return JSON.stringify(this);
    }
}