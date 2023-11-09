package ch.juventus.rent_car_api.data.repository

import ch.juventus.rent_car_api.business.filter.Filter
import ch.juventus.rent_car_api.data.entity.Entity

interface FilterRepository<T : Entity> {
    fun findByFilter(filter: Filter<T>): List<T>
}