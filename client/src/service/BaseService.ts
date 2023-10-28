export class BaseService<T> {
    // TODO move to env file
    public static readonly BASE_URL = "http://localhost:8080";

    public constructor(private endpoint: string) {}

    public async loadAll(): Promise<T[]> {
        const response = await fetch(`${BaseService.BASE_URL}/${this.endpoint}`);
        // TODO check response status
        // Get the body of the response
        const body = await response.json();

        return body;
    }
}