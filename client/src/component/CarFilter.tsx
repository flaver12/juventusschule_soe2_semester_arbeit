import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@suid/material";
import { SelectChangeEvent } from "@suid/material/Select";
import { Component, createSignal } from "solid-js";

const CarFilter: Component = () => {
    const [date, setDate] = createSignal("");
    const [name, setName] = createSignal("");
    const [type, setType] = createSignal("");
    const [gearShift, setGearShift] = createSignal("");
    const [pricePerDay, setPricePerDay] = createSignal("");
    const [seats, setSeats] = createSignal("");

    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value);
    };
    
    return (
        <>
            <div>
                <Stack
                    direction="row"
                    //divider={<Divider orientation="vertical" flexItem />}
                    spacing={5}
                >
                    <TextField
                        label="Start*"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={date()}
                        onChange={(event, value) => setDate(value)}
                        helperText={date()}
                    />
                    <TextField
                        label="End*"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={date()}
                        onChange={(event, value) => setDate(value)}
                        helperText={date()}
                    />
                    <TextField id="standard-basic" label="Name" variant="standard" />
                    <FormControl size="medium">
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type()}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl size="medium">
                        <InputLabel id="demo-simple-select-label">Gear Shift</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type()}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        label="Price per day"
                        type="number"
                        value={pricePerDay()}
                        onChange={(event, value) => setPricePerDay(value)}
                        helperText={pricePerDay()}
                    />
                    <TextField
                        label="min Seats"
                        type="number"
                        value={seats()}
                        onChange={(event, value) => setSeats(value)}
                        helperText={seats()}
                    />
                    <Button variant="contained">Filter</Button>
                </Stack>
            </div>
            
        </>
    );
};
export default CarFilter;