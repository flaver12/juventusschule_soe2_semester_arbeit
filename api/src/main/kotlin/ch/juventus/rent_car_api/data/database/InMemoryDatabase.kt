package ch.juventus.rent_car_api.data.database

import ch.juventus.rent_car_api.data.entity.Entity
import org.springframework.stereotype.Service
import java.util.*
import kotlin.collections.ArrayList

@Service
class InMemoryDatabase<T : Entity> : Database<T> {
    private var data: MutableMap<Long, T> = HashMap()

    override fun create(entity: T): T {
        // Get latest id
        entity.setId(getLatestId())
        data[entity.getId()] = entity
        return entity
    }

    override fun update(entity: T): T {
        // Check if we have an entity all ready
        if (!data.containsKey(entity.getId()))
            throw Exception("Entity does not exist")
        data[entity.getId()] = entity
        return entity
    }

    override fun delete(id: Long) {
        if (!data.containsKey(id))
            return

        data.remove(id)
    }

    override fun findAll(): List<T> {
        return ArrayList(data.values)
    }

    override fun find(id: Long): T? {
        if (!data.containsKey(id))
            return null
        return data[id]
    }

    override fun getLatestId(): Long {
        val highestId: Optional<Long> = data.keys.stream().max { x: Long, y: Long ->
            java.lang.Long.compare(
                x,
                y
            )
        }
        return highestId.map { id: Long -> id + 1 }.orElse(1L)
    }
}