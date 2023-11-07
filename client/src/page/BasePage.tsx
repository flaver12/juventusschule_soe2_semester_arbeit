import { Box, Grid } from "@suid/material"
import Navbar from "../component/Navbar"
import { Outlet } from "@solidjs/router"

const BasePage = () => (
    <>
        <Navbar />
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={12}>
                    <div class="car-spacing">
                        <Outlet />
                    </div>
                </Grid>
            </Grid>
        </Box>
    </>
);

export default BasePage;