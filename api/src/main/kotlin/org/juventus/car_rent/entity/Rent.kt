package org.juventus.car_rent.entity

import jakarta.persistence.*
import java.time.LocalDate

@Entity
@Table(name = "rent")
data class Rent (
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "rent_seq")
    @SequenceGenerator(name="rent_seq", sequenceName = "rent_seq", allocationSize=1)
    @Column(name = "id")
    val id: Long,

    @Column(name = "start_date")
    val startDate: LocalDate,

    @Column(name = "end_date")
    val endDate: LocalDate
)