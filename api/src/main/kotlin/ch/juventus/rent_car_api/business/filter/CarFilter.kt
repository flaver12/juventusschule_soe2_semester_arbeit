package ch.juventus.rent_car_api.business.filter

import ch.juventus.rent_car_api.business.model.CarFilterModel
import ch.juventus.rent_car_api.data.entity.Car
import org.springframework.util.MultiValueMap
import java.security.InvalidParameterException
import java.text.SimpleDateFormat

private const val FILTER_NAME_KEY = "name"
private const val FILTER_TYPE_KEY = "type"
private const val FILTER_GEAR_SHIFT_KEY = "gearShift"
private const val FILTER_PRICE_PER_DAY_KEY = "pricePerDay"
private const val FILTER_SEATS_KEY = "seats"
private const val FILTER_START_DATE_KEY = "startDate"
private const val FILTER_END_DATE_KEY = "endDate"
private const val FILTER_KEY = "filter"

class CarFilter: Filter<Car> {
    private var filters: MutableMap<String, String> = HashMap()
    private val carFilterModel = CarFilterModel()

    constructor(filters: MultiValueMap<String, String>) {
        // TODO make it easier to read
        filters[FILTER_KEY]?.forEach {
            var params = it.split(",")
            params.forEach {
                var entry = it.split(":")
                this.filters[entry[0]] =  entry[1]
            }
        }
    }

    override fun parse() {
        println(filters)
        val startDate = filters.get(FILTER_START_DATE_KEY)
        val endDate = filters.get(FILTER_END_DATE_KEY)

        println(startDate)
        println(endDate)

        if (startDate == null) {
            throw InvalidParameterException()
        }
        if (endDate == null) {
            throw InvalidParameterException()
        }

        val formatter = SimpleDateFormat("yyyy-MM-dd")

        carFilterModel.startDate = formatter.parse(startDate)
        carFilterModel.endDate = formatter.parse(endDate)
        carFilterModel.name = filters.get(FILTER_NAME_KEY)
        carFilterModel.gearShift = filters.get(FILTER_GEAR_SHIFT_KEY)
        carFilterModel.type = filters.get(FILTER_TYPE_KEY)

        val pricePerDayValue = filters.get(FILTER_PRICE_PER_DAY_KEY)
        var pricePerDay: Double? = null
        if (null != pricePerDayValue)
            pricePerDay = pricePerDayValue.toDouble()

        carFilterModel.pricePerDay = pricePerDay

        val seatsValue = filters.get(FILTER_SEATS_KEY)
        var seats: Int? = null
        if (null != seatsValue)
            seats = seatsValue.toInt()

        carFilterModel.seats = seats
    }

    override fun assert(entity: Car): Boolean {
        var isValid = false

        // Check for the start and end date first
        if (entity.startDate == null && entity.endDate == null)
        {

        }

        return isValid
    }
}