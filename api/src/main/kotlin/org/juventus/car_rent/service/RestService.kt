package org.juventus.car_rent.service

import java.util.Optional

interface RestService<E> {
    fun findAll(): List<E>
    fun find(id: Long): Optional<E>
    fun createOrUpdate(entity: E): E
    fun delete(id: Long)
}