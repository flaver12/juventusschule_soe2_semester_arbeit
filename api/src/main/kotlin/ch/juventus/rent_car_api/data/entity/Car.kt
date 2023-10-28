package ch.juventus.rent_car_api.data.entity

import jakarta.persistence.*

@Entity
@Table(name = "car")
data class Car (
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    val id: Long,

    @Column(name = "name")
    val name: String,

    @Column(name = "type")
    val type: String,

    @Column(name = "gear_shift")
    val gearShift: String,

    @Column(name = "price_per_day")
    val pricePerDay: Double,

    @Column(name = "seats")
    val seats: Int
)