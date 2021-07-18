export class Semester {
    id: number;
    semesterNo: number;
    durationInWeek: number;
    targetedGPA: number;
    achievedGPA: number;
    semesterStatus: string;
    fkEducationId: number;

    constructor(
        id: number,
        semesterNo: number,
        durationInWeek: number,
        targetedGPA: number,
        achievedGPA: number,
        semesterStatus: string,
        fkEducationId: number
    ) {
        this.id = id;
        this.semesterNo = semesterNo;
        this.durationInWeek = durationInWeek;
        this.targetedGPA = targetedGPA;
        this.achievedGPA = achievedGPA;
        this.semesterStatus = semesterStatus;
        this.fkEducationId = fkEducationId;
    }

    static fromJson(json: any): Semester {
        return new Semester(
            json.id,
            json.semesterNo,
            json.durationInWeek,
            json.targetedGPA,
            json.achievedGPA,
            json.semesterStatus,
            json.fkEducationId
        );
    }

    toJsonString() : string {
        return JSON.stringify(this);
    }
}