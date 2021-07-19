export class Course {
    id: any;
    courseCode: string;
    courseName: string;
    section: number;
    credit: number;
    targetedGrade: string;
    achievedGrade: string;
    fkSemesterId: number;

    constructor(
        id: any, 
        courseCode: string, 
        courseName: string, 
        section: number, 
        credit: number, 
        targetedGrade: string, 
        achievedGrade: string, 
        fkSemesterId: number
    ) {
        this.id = id;
        this.courseCode = courseCode;
        this.courseName = courseName;
        this.section = section;
        this.credit = credit;
        this.targetedGrade = targetedGrade;
        this.achievedGrade = achievedGrade;
        this.fkSemesterId = fkSemesterId;
    }

    static fromJson(json: any): Course {
        return new Course(
            json.id,
            json.courseCode,
            json.courseName,
            json.section,
            json.credit,
            json.targetedGrade,
            json.achievedGrade,
            json.fkSemesterId
        );
    }

    toJsonString() : string {
        return JSON.stringify(this);
    }
}