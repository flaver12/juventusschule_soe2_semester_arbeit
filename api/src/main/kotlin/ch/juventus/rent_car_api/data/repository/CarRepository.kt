package ch.juventus.rent_car_api.data.repository

import ch.juventus.rent_car_api.business.filter.CarFilter
import ch.juventus.rent_car_api.business.filter.Filter
import ch.juventus.rent_car_api.data.database.InMemoryDatabase
import ch.juventus.rent_car_api.data.entity.Car
import org.springframework.stereotype.Service

@Service
class CarRepository(private val database: InMemoryDatabase<Car>) : Repository<Car>, FilterRepository<Car> {
    override fun create(data: Car): Car {
        return database.create(data)
    }

    override fun update(data: Car): Car {
        return database.update(data)
    }

    override fun delete(id: Long) {
        database.delete(id)
    }

    override fun find(id: Long): Car? {
        return database.find(id)
    }

    override fun findAll(): List<Car> {
        return database.findAll()
    }

    override fun findByFilter(filter: Filter<Car>): List<Car> {
        val result = findAll()
        val filteredResult = ArrayList<Car>()

        for (entry in result) {
            if (filter.assert(entry)) {
                filteredResult.add(entry)
            }
        }

        return filteredResult
    }
}