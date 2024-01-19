import { GearShift } from "../enums/GearShift";
import { Car } from "../models/Car";
import { CarFilter as CarFilterModel } from "../models/CarFilter";
import { carFilter } from "./carFilter";
import { expect } from "@jest/globals";

describe("carFilter", () => {
  let car: Car;
  let carFilterModel: CarFilterModel;

  beforeEach(() => {
    car = {
      id: 1,
      name: "Toyota Corolla",
      type: "sedan",
      image: "",
      gearShift: GearShift.Automatic,
      pricePerDay: 50,
      seats: 5,
      rentCar: [],
    };

    carFilterModel = {
      startDate: "2024-01-01",
      endDate: "2024-01-31",
      minPrice: "30",
      maxPrice: "70",
      minSeats: "4",
      name: "Corolla",
      type: "sedan",
      gearShift: "automatic",
    };
  });

  it("returns true when the car matches the filter", () => {
    expect(carFilter(car, carFilterModel)).toBe(true);
  });

  it("returns false when the car does not match the filter", () => {
    carFilterModel = {
      startDate: "2024-01-01",
      endDate: "2024-01-31",
      minPrice: "30",
      maxPrice: "70",
      minSeats: "4",
      name: "Volkswagen",
      type: "suv",
      gearShift: "manual",
    };
    expect(carFilter(car, carFilterModel)).toBe(false);
  });
});
