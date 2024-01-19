import { useState } from 'react';
import { TextField, Button, Grid, Container, MenuItem, FormControl } from '@mui/material';
import { Car } from '../models/Car';
import { CarService } from '../services/CarService';
import moment from 'moment';
import { carFilter } from '../util/carFilter';

interface FilterFormProps {
    startDate: string;
    setStartDate: (date: string) => void;
    endDate: string;
    setEndDate: (date: string) => void;
    onFilter: (filtered: Car[]) => void;
}

function FilterForm({ startDate, setStartDate, endDate, setEndDate, onFilter }: FilterFormProps) {
    const carService = new CarService();
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [gearShift, setGearShift] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [minSeats, setMinSeats] = useState('');
    const [dateError, setDateError] = useState(false);
    const [priceError, setPriceError] = useState(false);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        
        const currentDate = new Date();
        // Check that start date is not later than end date
        if (startDate && endDate && moment(endDate).isBefore(moment(startDate))) {
            setDateError(true);
            return;
        }

        // Check that start date is not later than the current date
        if (startDate && moment(startDate).isSameOrAfter(moment(currentDate))) {
            setDateError(true);
            return;
        }

        // Check that the date range does not exceed one month
        const diffDays = moment(endDate).diff(moment(startDate), 'days');
        if (diffDays > 30) {
            setDateError(true);
            return;
        }
        
        const cars = await carService.getCars();
        // Filter the cars based on the form inputs
        const filtered = cars.filter(car => {
           return carFilter(car, { startDate, endDate, name, type, gearShift, minPrice, maxPrice, minSeats });
        });

        onFilter(filtered);
    };

    const resetForm = async () => {
        setStartDate('');
        setEndDate('');
        setName('');
        setType('');
        setGearShift('');
        setMinPrice('');
        setMaxPrice('');
        setMinSeats('');
        setDateError(false);
        setPriceError(false);
        
        const cars = await carService.getCars();
        onFilter(cars);
    }

    return (
        <Container sx={{ marginTop: '100px', background: 'lightgray', paddingBottom: '20px' }}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <TextField
                            label="Start Date"
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            InputLabelProps={{ shrink: true }}
                            required
                            error={dateError}
                            helperText={dateError ? "End date cannot be earlier than start date." : ""}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            label="End Date"
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            InputLabelProps={{ shrink: true }}
                            required
                            error={dateError}
                            helperText={dateError ? "End date cannot be earlier than start date." : ""}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <FormControl style={{ minWidth: 120 }}>
                            <TextField
                                select
                                label="Type"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <MenuItem value="sedan">Sedan</MenuItem>
                                <MenuItem value="suv">SUV</MenuItem>
                                <MenuItem value="hatchback">Hatchback</MenuItem>
                            </TextField>
                        </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                        <FormControl style={{ minWidth: 120 }}>
                            <TextField
                                select
                                label="Gear Shift"
                                value={gearShift}
                                onChange={(e) => setGearShift(e.target.value)}
                            >
                                <MenuItem value="manuel">Manuel</MenuItem>
                                <MenuItem value="automatic">Automatic</MenuItem>
                            </TextField>
                        </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            label="Min Price"
                            type="number"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                            error={priceError}
                            helperText={priceError ? "Minimum price cannot be higher than maximum price." : ""}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            label="Max Price"
                            type="number"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            error={priceError}
                            helperText={priceError ? "Minimum price cannot be higher than maximum price." : ""}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            label="Min Seats"
                            type="number"
                            value={minSeats}
                            onChange={(e) => setMinSeats(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="contained" color="primary" type="submit">
                            Filter
                        </Button>
                        <Button variant="contained" color="secondary" type="reset" style={{ marginLeft: '20px' }} onClick={resetForm}>
                            Reset
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default FilterForm;