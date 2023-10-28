package ch.juventus.rent_car_api.business.service

import ch.juventus.rent_car_api.business.model.CarModel
import ch.juventus.rent_car_api.data.entity.Car
import ch.juventus.rent_car_api.data.repository.CarRepository
import kotlin.collections.ArrayList

@org.springframework.stereotype.Service
class CarService(private val carRepository: CarRepository) : Service<CarModel, Car> {
    override fun findAll(): List<CarModel> {
        val entityList = carRepository.findAll()
        val convertedResult = ArrayList<CarModel>()

        for (entry in entityList) {
            convertedResult.add(convertToModel(entry))
        }

        return convertedResult;
    }

    override fun find(id: Long): CarModel? {
        val entity = carRepository.findById(id)
        if (entity.isEmpty)
            return null

        return convertToModel(entity.get())
    }

    override fun delete(id: Long) {
        carRepository.deleteById(id)
    }

    override fun createOrUpdate(model: CarModel): CarModel {
        val entity = convertToEntity(model)
        val updatedEntity = carRepository.save(entity)
        return convertToModel(updatedEntity)
    }

    override fun convertToEntity(model: CarModel): Car {
        return Car(
            model.id,
            model.name,
            model.type,
            model.gearShift,
            model.pricePerDay,
            model.seats
        )
    }

    override fun convertToModel(entity: Car): CarModel {
        return CarModel(
            entity.id,
            entity.name,
            entity.type,
            entity.gearShift,
            entity.pricePerDay,
            entity.seats
        )
    }
}