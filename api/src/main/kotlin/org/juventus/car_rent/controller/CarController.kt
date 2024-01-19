package org.juventus.car_rent.controller

import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.Parameter
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.responses.ApiResponses
import io.swagger.v3.oas.annotations.tags.Tag
import org.juventus.car_rent.entity.Car
import org.juventus.car_rent.entity.Rent
import org.juventus.car_rent.model.CarDeletionResult
import org.juventus.car_rent.service.CarService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.Optional

@RestController
@RequestMapping("/car")
@Tag(name = "Car Management")
class CarController(private val carService: CarService) {

    @Operation(summary = "Get all cars")
    @ApiResponses(value = [
        ApiResponse(responseCode = "200", description = "Successful operation"),
        ApiResponse(responseCode = "404", description = "Cars not found")
    ])
    @GetMapping
    fun index(): List<Car> = carService.findAll()

    @Operation(summary = "Find a car by id")
    @ApiResponses(value = [
        ApiResponse(responseCode = "200", description = "Successful operation"),
        ApiResponse(responseCode = "404", description = "Car not found")
    ])
    @GetMapping("/{id}")
    fun find(@PathVariable("id") id: Long): Optional<Car> = carService.find(id)

    @Operation(summary = "Rent a car")
    @ApiResponses(value = [
        ApiResponse(responseCode = "200", description = "Successful operation"),
        ApiResponse(responseCode = "404", description = "Car not found"),
        ApiResponse(responseCode = "400", description = "Invalid rent data")
    ])
    @PostMapping("/{id}/rent")
    fun rent(@PathVariable("id") id: Long, @RequestBody rent: Rent): Car = carService.rent(id, rent)

    @Operation(summary = "Create a new car")
    @ApiResponses(value = [
        ApiResponse(responseCode = "201", description = "Car created"),
        ApiResponse(responseCode = "400", description = "Invalid car data")
    ])
    @PostMapping
    fun create(@RequestBody @Parameter(description = "Car to be created") car: Car): Car = carService.createOrUpdate(car)

    @Operation(summary = "Update an existing car")
    @ApiResponses(value = [
        ApiResponse(responseCode = "200", description = "Car updated"),
        ApiResponse(responseCode = "400", description = "Invalid car data"),
        ApiResponse(responseCode = "404", description = "Car not found")
    ])
    @PutMapping
    fun update(@RequestBody @Parameter(description = "Updated car data") car: Car): Car = carService.createOrUpdate(car)

    @Operation(summary = "Delete a car")
    @ApiResponses(value = [
        ApiResponse(responseCode = "204", description = "Car deleted"),
        ApiResponse(responseCode = "404", description = "Car not found")
    ])
    @DeleteMapping("/{id}")
    fun delete(@PathVariable("id") @Parameter(description = "ID of the car to be deleted") id: Long): ResponseEntity<CarDeletionResult> {
        carService.delete(id)
        val result = CarDeletionResult("Car with ID $id was successfully deleted.")
        return ResponseEntity.ok(result)
    }
}