package ch.juventus.rent_car_api.data.repository

import ch.juventus.rent_car_api.data.entity.Car
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CarRepository : JpaRepository<Car, Long>