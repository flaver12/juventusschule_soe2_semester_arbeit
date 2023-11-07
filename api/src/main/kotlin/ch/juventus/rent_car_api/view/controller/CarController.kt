package ch.juventus.rent_car_api.view.controller

import ch.juventus.rent_car_api.business.CarFilter
import ch.juventus.rent_car_api.business.model.CarModel
import ch.juventus.rent_car_api.business.service.CarService
import org.springframework.util.MultiValueMap
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import java.security.InvalidParameterException

@RestController
@RequestMapping("/car")
class CarController(private val carService: CarService) {

    @GetMapping
    fun index(@RequestParam filters: MultiValueMap<String, String>?): List<CarModel> {
        if (filters != null) {
            println("Filters:")
            filters["filter"]?.forEach { println(it) }

            val startDate = filters.getFirst("startDate")
            val endDate = filters.getFirst("endDate")
            if (startDate == null) {
                throw InvalidParameterException()
            }
            if (endDate == null) {
                throw InvalidParameterException()
            }

            return carService.findByFilter(
                name = filters.getFirst("name"),
                type = filters.getFirst("type"),
                gearShift = filters.getFirst("gearShift"),
                pricePerDay = filters.getFirst("pricePerDay")?.toDouble(),
                seats = filters.getFirst("seats")?.toInt(),
                startDate = startDate, // assuming these are parsed to appropriate date objects
                endDate = endDate
            )
        }

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