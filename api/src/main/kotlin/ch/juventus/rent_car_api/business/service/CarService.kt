package ch.juventus.rent_car_api.business.service

import ch.juventus.rent_car_api.business.model.CarModel
import ch.juventus.rent_car_api.data.entity.Car
import ch.juventus.rent_car_api.data.repository.CarRepository
import org.springframework.stereotype.Service

@Service
class CarService(private val carRepository: CarRepository) : IService<CarModel, Car> {
    override fun loadAll(): List<CarModel> {
        val result = carRepository.findAll()

        val convertedResult = ArrayList<CarModel>()
        result.forEach{ car -> convertedResult.add(convertFromEntityModel(car)) }

        return convertedResult
    }

    override fun load(id: Long): CarModel? {
        val result = carRepository.find(id) ?: return null
        return convertFromEntityModel(result)
    }

    override fun delete(id: Long) {
        carRepository.delete(id)
    }

    override fun convertFromEntityModel(entity: Car): CarModel {
        return CarModel(
            entity.id,
            entity.name,
            entity.type,
            entity.gearShift,
            entity.pricePerDay,
            entity.seats,
            entity.startDate,
            entity.endDate
        )
    }

    override fun convertFromModelToEntity(model: CarModel): Car {
        return Car(
            model.id,
            model.name,
            model.type,
            model.gearShift,
            model.pricePerDay,
            model.seats,
            model.startDate,
            model.enDate
        )
    }

    override fun createOrUpdate(model: CarModel): CarModel {
        var create = false
        if (model.id == null) {
            create = true
        }

        val converted = convertFromModelToEntity(model);
        if (create)
            return convertFromEntityModel(
                carRepository.create(converted)
            )
        return convertFromEntityModel(
            carRepository.update(converted)
        )
    }
}