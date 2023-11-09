package ch.juventus.rent_car_api.view

import ch.juventus.rent_car_api.business.filter.CarFilter
import ch.juventus.rent_car_api.business.model.CarModel
import ch.juventus.rent_car_api.business.service.CarService
import org.springframework.util.MultiValueMap
import org.springframework.web.bind.annotation.*
import java.security.InvalidParameterException

@RestController
@RequestMapping("/car")
class CarController(private val carService: CarService) {

    @GetMapping
    fun index(@RequestParam filters: MultiValueMap<String, String>?): List<CarModel> {

        if (filters != null) {
            return carService.loadByFilter(CarFilter(filters))
        }

        return carService.loadAll()
    }

    @GetMapping("/{id}")
    fun find(@PathVariable("id") id: Long): CarModel? {
        return carService.load(id)
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