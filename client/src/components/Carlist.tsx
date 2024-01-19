import {Container, Grid, Card, CardMedia, CardContent, Typography, Button, CardActions, Box } from "@mui/material";
import { useContext } from 'react';
import { CarContext } from "../App";
import { CarService } from "../services/CarService";
import { useNavigate } from "react-router-dom";

interface CarListProps {
    startDate: string;
    endDate: string;
}

const carService = new CarService();

function CarList({ startDate, endDate }: CarListProps) {
    const cars = useContext(CarContext);
    const navigate = useNavigate();

    const handleRent = async (id: number) => {
        await carService.rentCar(id, { startDate, endDate });
        navigate('/success');
    }

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
        <Container sx={{ marginTop: '60px' }}>
            <Grid container spacing={3}>
                {cars.map((car) => (
                    <Grid item xs={12} key={car.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                image={car.image}
                                title={car.name}
                                height={200}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {car.name}
                                </Typography>
                                <Typography>
                                    {car.type}
                                </Typography>
                            </CardContent>
                            <CardActions style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Button variant="contained" color="success" size="large" onClick={() => handleRent(car.id)} disabled={ startDate === '' || endDate === '' ? true : false }>
                                    Rent
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
        </Box>
    );
}

export default CarList;