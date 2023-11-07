package ch.juventus.rent_car_api.business

data class CarFilter(
    val name: String?,
    val type: String?,
    val gearShift: String?,
    val pricePerDay: Double?,
    val seats: Int?,
    val startDate: String?,
    val endDate: String?
)