package ch.juventus.rent_car_api.data.database

interface Database<E> {
    fun create(entity: E): E
    fun update(entity: E): E
    fun delete(id: Long)
    fun findAll(): List<E>
    fun find(id: Long): E?
    fun getLatestId(): Long
}