import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                You rented a Car
            </Typography>
            <Link to="/">
                <Button variant="contained" color="primary">
                    Back
                </Button>
            </Link>
        </div>
    );
};

export default SuccessPage;
