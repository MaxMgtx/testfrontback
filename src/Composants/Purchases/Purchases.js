import { Alert, Card, CardContent, CircularProgress, Grid, Stack, Typography } from "@mui/material";
import useAxios from "axios-hooks";

const Purchases = () => { 

    const [{data, loading, error}] = useAxios(
        "http://localhost:8080/api/v1/purchases"
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
                            {data.map((purch) => <PurchaseIndiv indiv={purch}/> )}
                        </Grid>   
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
                    <Typography variant="h5" component="div" key={indiv.id}>
                    Numéro de commande : {indiv.id}{" "}    
                    Somme totale : {indiv.price}{" "}
                    Date : {indiv.date}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
    
    

}; 


export default Purchases;