package ch.juventus.rent_car_api.business.service

import ch.juventus.rent_car_api.business.CarFilter
import ch.juventus.rent_car_api.business.model.CarModel
import ch.juventus.rent_car_api.data.entity.Car
import ch.juventus.rent_car_api.data.repository.CarRepository
import jakarta.persistence.criteria.CriteriaBuilder
import jakarta.persistence.criteria.Predicate
import org.springframework.data.domain.Example
import org.springframework.data.jpa.domain.Specification
import java.math.BigDecimal
import java.util.*
import kotlin.collections.ArrayList

@org.springframework.stereotype.Service
class CarService(private val carRepository: CarRepository) : Service<CarModel, Car> {
    override fun findAll(): List<CarModel> {
        val entityList = carRepository.findAll()
        val convertedResult = ArrayList<CarModel>()

        for (entry in entityList) {
            convertedResult.add(convertToModel(entry))
        }

        return convertedResult
    }

     fun findByFilter(
        name: String?,
        type: String?,
        gearShift: String?,
        pricePerDay: Double?,
        seats: Int?,
        startDate: String,
        endDate: String
    ): List<CarModel> {
        val specs = Specification.where<CarModel> { root, query, cb ->
            val predicates = mutableListOf<Predicate>()

            name?.let {
                predicates.add(cb.like(cb.lower(root.get("name")), "%${it.lowercase()}%"))
            }
            type?.let {
                predicates.add(cb.equal(root.get<String>("type"), it))
            }
            gearShift?.let {
                predicates.add(cb.equal(root.get<String>("gearShift"), it))
            }
            pricePerDay?.let {
                predicates.add(cb.equal(root.get<Double>("pricePerDay"), it))
            }
            seats?.let {
                predicates.add(cb.equal(root.get<Int>("seats"), it))
            }

            // Add your date range predicates here using startDate and endDate
            // Ensure that startDate and endDate are parsed into Date or LocalDate objects as needed
            // val startDatePredicate = cb.greaterThanOrEqualTo(root.get("startDate"), startDate)
            // val endDatePredicate = cb.lessThanOrEqualTo(root.get("endDate"), endDate)
            // predicates.add(startDatePredicate)
            // predicates.add(endDatePredicate)

            cb.and(*predicates.toTypedArray())
        }

        val entityList = carRepository.findAll(specs)
        val convertedResult = ArrayList<CarModel>()

        for (entry in entityList) {
            convertedResult.add(convertToModel(entry))
        }

        return convertedResult
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

    private fun convertCarFilterToCriteriaBuilder(filter: CarFilter, criteriaBuilder: CriteriaBuilder): CriteriaBuilder {


        return criteriaBuilder
    }
}