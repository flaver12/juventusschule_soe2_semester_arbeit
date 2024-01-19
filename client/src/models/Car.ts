import { GearShift } from "../enums/GearShift";
import { RentCar } from "./RentCar";

export interface Car {
  id: number;
  name: string;
  type: string;
  image: string;
  gearShift: GearShift;
  pricePerDay: number;
  seats: number;
  rentCar: RentCar[];
}