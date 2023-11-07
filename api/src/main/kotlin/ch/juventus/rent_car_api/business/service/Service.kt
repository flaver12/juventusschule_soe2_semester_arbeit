package ch.juventus.rent_car_api.business.service

interface Service<M,E,F> {
    fun findAll(): List<M>
    fun find(id: Long): M?
    fun createOrUpdate(model: M): M
    fun delete(id: Long)
    fun findByFilter(filter: F): E
    fun convertToEntity(model: M): E
    fun convertToModel(entity: E): M
}