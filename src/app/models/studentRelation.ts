export class StudentRelation {
    id: number;
    relation: string;
    fkStudentId: number;
    fkParentId: number;

    constructor(
        id: number,
        relation: string,
        fkStudentId: number,
        fkParentId: number,
    ) {
        this.id = id;
        this.relation = relation;
        this.fkStudentId = fkStudentId;
        this.fkParentId =fkParentId;
    }

    static fromJson(json: any): StudentRelation {
        return new StudentRelation(
            json.id,
            json.relation,
            json.fkStudentId,
            json.fkParentId
        );
    }

    toJsonString() : string {
        return JSON.stringify(this);
    }
}