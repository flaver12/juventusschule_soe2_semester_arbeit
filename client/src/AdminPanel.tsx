import { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography, Button, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { CarService } from './services/CarService';
import { Car } from './models/Car';
import Navbar from './components/Navbar';
import CarForm from './components/CarForm';

const carService = new CarService();
const AdminPanel: React.FC = () => {
    const [items, setItems] = useState<Car[]>([]);
    const [selectedCar, setSelectedCar] = useState<Car | null>(null);
    const [showForm, setShowForm] = useState(false);

    const loadItems = async () => {
        try {
            const response = await carService.getCars();
            setItems(response);
        } catch (error) {
            console.error('Failed to load items:', error);
        }
    };

    useEffect(() => {
        loadItems();
    }, []);

    const handleEdit = (id: number) => {
        const car = items.find((item) => item.id === id);
        if (car) {
            setSelectedCar(car);
            setShowForm(true);
        }
    };

    const handleSave = async (updatedCar: Car) => {
        // Save the updated car...
        setSelectedCar(null);
        setShowForm(false);
        console.log(updatedCar);
        if (updatedCar.id !== undefined) {
            await carService.updateCar(updatedCar);
        } else  {
            await carService.addCar(updatedCar);
        }
        await loadItems();
    };

    const handleCancel = () => {
        setSelectedCar(null);
        setShowForm(false);
    };

    const handleCreate = () => {
        setSelectedCar(null);
        setShowForm(true);
    };

    const handleDelete = async (id: number) => {
        const confirmation = window.confirm('Are you sure you want to delete this Item?');
        if (confirmation) {
            await carService.deleteCar(id);
            await loadItems();
        }
        
    };

    return (
        <>
            <Navbar></Navbar>
            <Box display="flex" justifyContent="center" alignItems="center" height="calc(100vh - 64px)" style={{ marginTop: '-50px', marginLeft: '50px' }}>
                <div style={{ display: 'flex', gap: '2rem', width: '100%' }}>
                    <div style={{ flex: 1 }}>
                        <List>
                            {items.map((item) => (
                                <ListItem key={item.id}>
                                    <ListItemText primary={item.name} />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(item.id)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            ))}
                        </List>
                        <Button variant="contained" color="primary" onClick={handleCreate}>
                            Create New Item
                        </Button>
                    </div>
                    {showForm && <CarForm car={selectedCar} onSave={handleSave} onCancel={handleCancel} />}
                </div>
            </Box>
        </>
    );
};

export default AdminPanel;
