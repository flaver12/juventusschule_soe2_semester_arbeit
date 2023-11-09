package ch.juventus.rent_car_api.business.filter

interface Filter<E> {
    fun parse()
    fun assert(entity: E): Boolean
}