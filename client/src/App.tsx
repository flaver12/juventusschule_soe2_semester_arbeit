import NavBar from './components/Navbar'
import CarList from './components/Carlist'
import FilterForm from './components/Filterform'
import { createContext, useEffect, useState } from 'react';
import { Car } from './models/Car';
import { CarService } from './services/CarService';

// Create a context to share the cars state
export const CarContext = createContext<Car[]>([]);

function App() {
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [initialCars, setInitialCars] = useState<boolean>(false);
  const carService = new CarService();
  if (initialCars === false) {
    carService.getCars().then(cars => {
      setFilteredCars(cars);
      setInitialCars(true);
    });
  }

  
  return (
    <CarContext.Provider value={filteredCars}>
      <NavBar />
      <FilterForm onFilter={setFilteredCars} />
      <CarList />
    </CarContext.Provider>
  )
}

export default App
