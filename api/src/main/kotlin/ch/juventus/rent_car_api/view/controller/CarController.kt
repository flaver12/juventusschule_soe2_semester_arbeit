package ch.juventus.rent_car_api.view.controller

import ch.juventus.rent_car_api.business.model.CarModel
import ch.juventus.rent_car_api.business.service.CarService
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/car")
class CarController(private val carService: CarService) {

    @GetMapping
    fun index(): List<CarModel> {
        return carService.findAll()
    }

    @GetMapping("/{id}")
    fun find(@PathVariable("id") id: Long): CarModel? {
        return carService.find(id)
    }

    @PostMapping
    fun create(@RequestBody car: CarModel): CarModel {
        return carService.createOrUpdate(car)
    }

    @PutMapping
    fun update(@RequestBody car: CarModel): CarModel {
        return carService.createOrUpdate(car)
    }

    @DeleteMapping("/{id}")
    fun delete(@PathVariable("id") id: Long) {
        carService.delete(id)
    }
}