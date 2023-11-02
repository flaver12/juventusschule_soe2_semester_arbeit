import { Component, Show, createSignal, onMount } from "solid-js";
import Navbar from "../component/Navbar";
import { Box, Grid } from "@suid/material";
import CarTable from "../component/CarTable";
import CarFilter from "../component/CarFilter";
import { CarService } from "../service/CarService";

const HomePage: Component = () => {
    const [ready, setReady] = createSignal(false);
    const carService = new CarService();
    const [cars, setCars] = createSignal([]);

    onMount(async () => {
        const cars = await carService.loadAllCars();
        console.log(cars);
        setCars(cars);
        setReady(true);
    });

    return (
        <>
            <Navbar />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={12}>
                        <div class="car-spacing">
                            <Show when={ready()}>
                                <CarFilter />
                                <CarTable cars={cars()} />
                            </Show>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default HomePage;