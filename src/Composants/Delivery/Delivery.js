import { Alert, Card, CardContent, CircularProgress, Fab, Grid, Stack, Typography } from "@mui/material";
import useAxios from "axios-hooks";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

const Delivery = () => { 

    const [{data, loading, error}] = useAxios(
        "/deliveryNote"
    );

    return(
        <div>
            <h3>Deliveries Notes </h3>
            <Stack spacing={2}>
                {loading && <CircularProgress/>}
                {error && <Alert severity="error">Error somewhere!</Alert>}
                {data && (
                    <>
                        <Grid container spacing={2}>
                            {data.map((delivery) => <DeliveryIndiv indiv={delivery}  key={delivery.id}/> )}
                        </Grid>
                        <Link to="/deliveriesform">
                            <Fab color='primary' aria-label='add'>
                                <AddIcon/>
                            </Fab>
                        </Link>    
                    </>
                )} 
            </Stack>
    
        </div>
    )
};

const DeliveryIndiv = ({indiv}) => {
        
    return(
        <Grid item sm={6} md={4}>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div">
                    Number of delivery : {indiv.id}{" "}    
                    Date : {indiv.date}{" "}
                    Total of products : {indiv.totalProduit}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
    
    

}; 


export default Delivery;