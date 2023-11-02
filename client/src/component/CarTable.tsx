import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@suid/material";
import { Component, For } from "solid-js";
import { Car } from "../model/Car";

interface Props {
    cars: Car[];
}

const CarTable: Component<Props> = (props) => {
    const { cars } = props;
    console.log(cars, 'cars component');
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Gear shift</TableCell>
                        <TableCell>Price per day</TableCell>
                        <TableCell>seats</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <For each={cars}>
                        {(row) => (
                            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.type}</TableCell>
                                <TableCell>{row.gearShift}</TableCell>
                                <TableCell>{row.pricePerDay}</TableCell>
                                <TableCell>{row.seats}</TableCell>
                            </TableRow>
                        )}
                    </For>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CarTable;