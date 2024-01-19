import { Car } from "../models/Car";
import { CarFilter } from "../models/CarFilter";

export const carFilter = (car: Car, carFilter: CarFilter): boolean => {
  // Name matches partially
  if (
    carFilter?.name &&
    !car.name.toLowerCase().includes(carFilter.name.toLowerCase())
  ) {
    return false;
  }

  // Price per day is within the price range
  if (
    carFilter?.minPrice &&
    carFilter?.maxPrice &&
    (car.pricePerDay < parseFloat(carFilter!.minPrice) ||
      car.pricePerDay > parseFloat(carFilter.maxPrice))
  ) {
    return false;
  }

  if (carFilter?.type && car.type !== carFilter?.type) {
    return false;
  }

  if (carFilter?.gearShift && car.gearShift !== carFilter?.gearShift) {
    return false;
  }

  if (carFilter?.minSeats && car.seats < parseInt(carFilter?.minSeats)) {
    return false;
  }

  // If the car has no rental car entries, it's good
  // If it has entries, the start date and end date cannot be in the selected date range
  if (car.rentCar.length > 0) {
    for (const rental of car.rentCar) {
      const start = new Date(rental.startDate);
      const end = new Date(rental.endDate);

      // Check if the selected date range overlaps with the rental date range
      if (
        (new Date(carFilter.startDate) <= end &&
          new Date(carFilter.startDate) >= start) ||
        (new Date(carFilter.endDate) <= end &&
          new Date(carFilter.endDate) >= start)
      ) {
        return false;
      }
    }
  }

  return true;
};
