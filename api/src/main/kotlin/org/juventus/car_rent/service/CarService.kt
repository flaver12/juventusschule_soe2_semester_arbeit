package org.juventus.car_rent.service

import org.juventus.car_rent.entity.Car
import org.juventus.car_rent.entity.Rent
import org.juventus.car_rent.exception.ResourceNotFoundException
import org.juventus.car_rent.repository.CarRepository
import org.springframework.stereotype.Service
import java.util.Optional

@Service
class CarService(private val carRepository: CarRepository) : RestService<Car> {
    override fun findAll(): List<Car> = carRepository.findAll()

    override fun find(id: Long): Optional<Car> = carRepository.findById(id)

    override fun delete(id: Long) = carRepository.deleteById(id)

    override fun createOrUpdate(entity: Car): Car = carRepository.save(entity)

    fun rent(id: Long, rent: Rent): Car {
        val carOptional = find(id)
        if (carOptional.isEmpty)
            throw ResourceNotFoundException("Car not found with id $id")

        val entity = carOptional.get()
        val rentCars: MutableList<Rent> = entity.rentCar as MutableList<Rent>
        rentCars.add(rent)
        entity.rentCar = rentCars

        return createOrUpdate(entity)
    }
}