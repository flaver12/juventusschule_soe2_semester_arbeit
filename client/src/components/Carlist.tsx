import {Container, Grid, Card, CardMedia, CardContent, Typography, Button, CardActions, Box } from "@mui/material";
import { useContext } from 'react';
import { CarContext } from "../App";

function CarList() {
    const cars = useContext(CarContext);

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
                                <Button variant="contained" color="success" size="large">
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