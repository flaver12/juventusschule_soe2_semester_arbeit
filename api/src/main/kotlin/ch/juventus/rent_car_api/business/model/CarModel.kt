package ch.juventus.rent_car_api.business.model

data class CarModel (
    val id: Long,
    val name: String,
    val type: String,
    val gearShift: String,
    val pricePerDay: Double,
    val seats: Int
)