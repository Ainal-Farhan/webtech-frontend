export class LoginCredential {
    id: number;
    username: string;
    password: string;
    fkUserId: number;

    constructor(
        id: number,
        username: string,
        password: string,
        fkUserId: number
    ) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.fkUserId = fkUserId;
    }

    static fromJson(json: any): LoginCredential {
        return new LoginCredential(
            json.id,
            json.username,
            json.password,
            json.fkUserId
        );
    }

    toJsonString() : string {
        return JSON.stringify(this);
    }
}