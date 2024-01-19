package org.juventus.car_rent.config

import io.swagger.v3.oas.annotations.OpenAPIDefinition
import io.swagger.v3.oas.annotations.info.Info
import io.swagger.v3.oas.annotations.servers.Server

@OpenAPIDefinition(
    info = Info(
        title = "Car API Documentation",
        version = "1.0"
    ),
    servers = [
        Server(
            description = "Local environment",
            url = "http://localhost:8080"
        )
    ]
)
class OpenApiConfig