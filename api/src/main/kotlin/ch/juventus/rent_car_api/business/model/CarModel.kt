package ch.juventus.rent_car_api.business.model

import com.fasterxml.jackson.annotation.JsonProperty

data class CarModel (
    val id: Long,
    val name: String,
    val type: String,
    @JsonProperty("gear_shift")
    val gearShift: String,
    @JsonProperty("price_per_day")
    val pricePerDay: Double,
    val seats: Int
)