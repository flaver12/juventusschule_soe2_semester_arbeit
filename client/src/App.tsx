
import { Component, createSignal, onMount } from 'solid-js';
import Counter from './Counter';
import { CarService } from './service/CarService';
import { Button } from '@suid/material';

const App: Component = () => {
  const [counter, setCounter] = createSignal(0);
  setInterval(setCounter, 1000, (c: number) => c + 1);

  onMount(async () => {
    console.log('App mounted');

    const carService = new CarService();
    const cars = await carService.loadAll();

    console.log(cars);
  });

  return (
    <>
      <div>
        <Button variant="contained">Hello world</Button>
        <h1 class="header">{counter()}</h1>
      </div>
      <Counter />
    </>
  );
};

export default App;
