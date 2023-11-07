import { Component, Show, createSignal, onMount } from "solid-js";
import CarTable from "../component/CarTable";
import CarFilter from "../component/CarFilter";
import { useRouteData } from "@solidjs/router";
import { Car } from "../model/Car";

const HomePage: Component = () => {
    const [ready, setReady] = createSignal(false);
    const [cars, setCars] = createSignal([]);

    onMount(async () => {
        const cars = await useRouteData<Car[]>();
        setCars(cars);
        setReady(true);
    });

    return (
        <Show when={ready()}>
            <CarFilter />
            <CarTable cars={cars()} />
        </Show>
    );
};

export default HomePage;