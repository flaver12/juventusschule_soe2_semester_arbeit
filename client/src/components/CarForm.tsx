import { TextField, Button, Box, FormControl, Select, MenuItem } from '@mui/material';
import { useState, useEffect } from 'react';
import { Car } from '../models/Car';
import { GearShift } from '../enums/GearShift';

interface CarFormProps {
    car: Car | null;
    onSave: (car: Car) => void;
    onCancel: () => void;
}

const CarForm: React.FC<CarFormProps> = ({ car, onSave, onCancel }) => {
    const [localCar, setLocalCar] = useState<Car | null>(null);

    useEffect(() => {
        setLocalCar(car);
    }, [car]);

    const handleSave = () => {
        if (localCar) {
            onSave(localCar);
        }
    };

    const handleTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setLocalCar({ ...localCar, type: event.target.value as string });
    };

    const handleGearShiftChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setLocalCar({ ...localCar, gearShift: event.target.value as GearShift });
    };

    return (
        <Box display="flex" flexDirection="column" gap={2} sx={{ background: 'lightgrey',  padding: '20px', marginTop: '-100px'}}>
            <TextField label="Name" value={localCar?.name || ''} onChange={(e) => setLocalCar({ ...localCar, name: e.target.value })} required />
            <FormControl fullWidth>
                <Select labelId="type-label" label="Type" value={localCar?.type || ''} onChange={handleTypeChange} required>
                    <MenuItem value="sedan">Sedan</MenuItem>
                    <MenuItem value="suv">SUV</MenuItem>
                    <MenuItem value="hatchback">Hatchback</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <Select labelId="gearShift-label" label="Gear Shift" value={localCar?.gearShift || ''} onChange={handleGearShiftChange} required>
                    <MenuItem value="manual">Manual</MenuItem>
                    <MenuItem value="automatic">Automatic</MenuItem>
                </Select>
            </FormControl>
            <TextField label="Price Per Day" value={localCar?.pricePerDay || 0} onChange={(e) => setLocalCar({ ...localCar, pricePerDay: Number(e.target.value) })} type="number" required />
            <TextField label="Seats" value={localCar?.seats || 0} onChange={(e) => setLocalCar({ ...localCar, seats: Number(e.target.value) })} type="number" required />
            <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
            <Button variant="outlined" color="secondary" onClick={onCancel}>Cancel</Button>
        </Box>
    );
};

export default CarForm;
