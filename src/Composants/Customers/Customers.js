import { Alert, Button, Card, CardContent, CircularProgress, Fab, Grid, Stack, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import useAxios from 'axios-hooks';
import { Link } from "react-router-dom";
import { useState } from "react";


const Customers = () => {
    const [{data, loading, error}] = useAxios(
        "http://localhost:8080/api/v1/customers"

    );

    return(
        <Stack spacing={2}>
            <h2>Customers</h2>
            {loading && <CircularProgress/>}
            {error && <Alert severity="error">Error somewhere!</Alert>}
            {data && (
                <>
                    <Grid container spacing={2}>
                        {data.map((customer) => <IndivCustomer indiv={customer}/> )}
                    </Grid>
                    <Link to="/customers/new">
                        <Fab color='primary' aria-label='add'>
                            <AddIcon/>
                        </Fab>
                    </Link>    
                </>
            )} 
        </Stack>
    )
};

const IndivCustomer = ({indiv}) => {

    
    return(
        <Grid item sm={6} md={4} key={indiv.id}>
            <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                {indiv.firstName}
                </Typography>
                <Typography variant="h5" component="div">
                {indiv.lastName}
                </Typography>
                <Typography variant="h5" component="div">
                {indiv.purchaseOrder}
                </Typography>
            </CardContent>
            <Button  variant="contained">
                View purchases
            </Button> 
            </Card>
        </Grid>
    )
    

}; 

export default Customers;