package org.juventus.car_rent.entity

import jakarta.persistence.*

@Entity
@Table(name = "car")
data class Car (
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "car_seq")
    @SequenceGenerator(name="car_seq", sequenceName = "car_seq", allocationSize=1)
    @Column(name = "id")
    val id: Long,

    @ManyToMany(cascade = [CascadeType.ALL])
    @JoinTable(
        name = "car_rent",
        joinColumns = [JoinColumn(name = "car_id", nullable = true)],
        inverseJoinColumns = [JoinColumn(name = "rent_id", nullable = true)]
    )
    var rentCar: List<Rent>?,

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