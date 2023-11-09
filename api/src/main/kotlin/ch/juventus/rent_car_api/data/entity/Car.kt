package ch.juventus.rent_car_api.data.entity

import com.fasterxml.jackson.annotation.JsonProperty
import java.util.Date

data class Car(
    var id: Long?,
    val name: String,
    val type: String,
    val gearShift: String,
    val pricePerDay: Double,
    val seats: Int,
    val startDate: Date?,
    val endDate: Date?
) : Entity {
    override fun getId(): Long {
        // Cast is okay here for this little app
        return id as Long
    }

    override fun setId(id: Long) {
        this.id = id
    }
}
