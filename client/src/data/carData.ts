import { RouteDataFuncArgs } from "@solidjs/router";
import { createResource } from "solid-js";
import { CarService } from "../service/CarService";

export const carData = async ({params, location, navigate, data}: RouteDataFuncArgs) => {
    const carService = new CarService();
    if (params.id) {
        // TODO fetch by id
    }

    const [cars] = createResource(async () => await carService.loadAll());
    return cars;
}