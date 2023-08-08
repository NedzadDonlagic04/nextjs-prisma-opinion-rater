export class ResponseData {
    private readonly message: string;
    private readonly status: number;

    constructor(message: string, status: number) {
        this.message = message;
        this.status = status;
    }

    getMessage() {
        return this.message;   
    }

    getStatus() {
        return this.status;
    }
}
