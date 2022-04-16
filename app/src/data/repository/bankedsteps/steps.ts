export interface IBankedSteps {
    id: number;
    steps: number;
    userId: string;
    timestamp: string;
}

export class BankedSteps {
    public id: number;
    public steps: number;
    public userId: string;
    public timestamp: string;
    constructor(id: number, steps: number, userId: string, timestamp: string) {
        this.id = id;
        this.steps = steps;
        this.userId = userId;
        this.timestamp = timestamp;
    }
}
