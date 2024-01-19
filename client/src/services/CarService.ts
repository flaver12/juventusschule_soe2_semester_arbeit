import { HttpMethod } from "../enums/HttpMethod";
import { Car } from "../models/Car";
import { RentCar } from "../models/RentCar";

export class CarService {
    public async getCars(): Promise<Car[]> {
        const result = await this.sendRequest(HttpMethod.Get,'');
        const formattedCars: Car[] = [];
        for (const car of result) {
            formattedCars.push(this.formatCar(car));
        }
        return formattedCars;
    }

    public async getCar(id: number): Promise<Car> {
        const car = await this.sendRequest(HttpMethod.Get, `/${id}`) as unknown as Car;
        return this.formatCar(car);
    }

    public async addCar(car: Car): Promise<Car> {
        const result = await this.sendRequest(HttpMethod.Post, '', car) as unknown as Car;
        return this.formatCar(result);
    }

    public async updateCar(car: Car): Promise<Car> {
        const result = await this.sendRequest(HttpMethod.Put, '', car) as unknown as Car;
        return this.formatCar(result);
    }

    public async deleteCar(id: number): Promise<void> {
        await this.sendRequest(HttpMethod.Delete, `/${id}`);
    }

    public async rentCar(id: number, rent: RentCar): Promise<Car> {
        const result = (await this.sendRequest(
          HttpMethod.Post,
          `/${id}/rent`,
          rent
        )) as unknown as Car;
        return this.formatCar(result);
    }

    private async sendRequest(method: HttpMethod, path: string, rawBody: Car|RentCar|undefined = undefined): Promise<Car[]> {
        let body: string | null = null;
        if (rawBody) {
            body = JSON.stringify(rawBody);
        }
        const result = await fetch(`http://localhost:8080/car${path}`, { method: method, body , headers: { 'Content-Type': 'application/json' }});
        return await result.json();
    }

    private formatCar(car: Car): Car {
        return {
            ...car,
            image: 'https://source.unsplash.com/random?car'
        }
    }
}