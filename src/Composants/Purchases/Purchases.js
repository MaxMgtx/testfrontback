import { Alert, Card, CardContent, CircularProgress, Fab, Grid, Stack, Typography } from "@mui/material";
import useAxios from "axios-hooks";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

const Purchases = () => { 

    const [{data, loading, error}] = useAxios(
        "/purchases"
    );

    return(
        <div>
            <h3>Purchases </h3>
            <Stack spacing={2}>
                {loading && <CircularProgress/>}
                {error && <Alert severity="error">Error somewhere!</Alert>}
                {data && (
                    <>
                        <Grid container spacing={2}>
                            {data.map((purch) => <PurchaseIndiv indiv={purch}  key={purch.id}/> )}
                        </Grid>
                        <Link to="/purchasesform">
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

const PurchaseIndiv = ({indiv}) => {

    return(
        <Grid item sm={6} md={4}>
            <Card>
                <CardContent>
                    <Typography variant="h6" component="div">
                    Purchase number : {indiv.id}  
                    </Typography>
                    <Typography component="div">  
                    Total amount : {indiv.price}{" €"}
                    </Typography>
                    <Typography component="div">
                    Date : {indiv.date}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}; 


export default Purchases;