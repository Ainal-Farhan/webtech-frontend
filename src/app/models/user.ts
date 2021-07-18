export class User {
    id: number;
    name: string;
    profilePicURL: string;
    phoneNo: string;
    gender: string;
    birthDate: Date;
    email: string;
    userType: string;
    fkStudentId: number;
    fkParentId: number;

    constructor(
        id: number,
        name: string,
        profilePicURL: string,
        phoneNo: string,
        gender: string,
        birthDate: Date,
        email: string,
        userType: string,
        fkStudentId: number,
        fkParentId: number,
    ) {
        this.id = id;
        this.name = name;
        this.profilePicURL = profilePicURL;
        this.phoneNo = phoneNo;
        this.gender = gender;
        this.birthDate = birthDate;
        this.email = email;
        this.userType = userType;
        this.fkStudentId = fkStudentId;
        this.fkParentId = fkParentId;
    }

    static fromJson(json: any): User {
        return new User(
            json.id,
            json.name,
            json.profilePicURL,
            json.phoneNo,
            json.gender,
            json.birthDate,
            json.email,
            json.userType,
            json.fkStudentId,
            json.fkParentId
        );
    }

    toJsonString() : string {
        return JSON.stringify(this);
    }
}