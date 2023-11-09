package ch.juventus.rent_car_api.business.service

// Prefix with I due to the fact that there is all ready a @Service tag
interface IService<M,E> {
    fun loadAll(): List<M>
    fun load(id: Long): M?
    fun createOrUpdate(model: M): M
    fun delete(id: Long)
    fun convertFromModelToEntity(model: M): E
    fun convertFromEntityModel(entity: E): M
}