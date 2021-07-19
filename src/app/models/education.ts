export class Education {
    id: any;
    universityName: string;
    field: string;
    degreeLevel: string;
    startDate: string;
    targetedCGPA: number;
    achievedCGPA: number;
    fkStudentId: number;

    constructor(
        id: any,
        universityName: string,
        field: string,
        degreeLevel: string,
        startDate: string,
        targetedCGPA: number,
        achievedCGPA: number,
        fkStudentId: number
    ) {
        this.id = id;
        this.universityName = universityName;
        this.field = field;
        this.degreeLevel = degreeLevel;
        this.startDate = startDate.substring(0, 10);
        this.targetedCGPA = targetedCGPA;
        this.achievedCGPA = achievedCGPA;
        this.fkStudentId = fkStudentId;
    }

    static fromJson(json: any): Education {
        return new Education(
            json.id,
            json.universityName,
            json.field,
            json.degreeLevel,
            json.startDate,
            json.targetedCGPA,
            json.achievedCGPA,
            json.fkStudentId
        );
    }

    toJsonString() : string {
        return JSON.stringify(this);
    }
}