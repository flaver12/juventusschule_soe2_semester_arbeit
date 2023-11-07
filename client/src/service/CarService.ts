import { Car } from "../model/Car";
import { BaseService } from "./BaseService";

export class CarService extends BaseService<Car> {

    public constructor() {
        super("car");
    }

}