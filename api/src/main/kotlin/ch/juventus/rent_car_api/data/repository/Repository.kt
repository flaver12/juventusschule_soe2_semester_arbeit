package ch.juventus.rent_car_api.data.repository

import ch.juventus.rent_car_api.data.entity.Entity

interface Repository<T : Entity> {
    fun create(data: T): T
    fun update(data: T): T
    fun delete(id: Long)
    fun find(id: Long): T?
    fun findAll(): List<T>
}