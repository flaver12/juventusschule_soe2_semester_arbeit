package ch.juventus.rent_car_api.business.model

import java.util.Date

class CarFilterModel {
    var startDate: Date? = null
        get() = field
        set(value) {
            field = value
        }
    var endDate: Date? = null
        get() = field
        set(value) {
            field = value
        }
    var name: String? = null
        get() = field
        set(value) {
            field = value
        }
    var gearShift: String? = null
        get() = field
        set(value) {
            field = value
        }
    var pricePerDay: Double? = null
        get() = field
        set(value) {
            field = value
        }
    var seats: Int? = null
        get() = field
        set(value) {
            field = value
        }
    var type: String? = null
        get() = field
        set(value) {
            field = value
        }


}
