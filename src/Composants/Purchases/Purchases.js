import { Alert, Card, CardContent, CircularProgress, Grid, Stack, Typography } from "@mui/material";
import useAxios from "axios-hooks";

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
                    <Typography variant="h5" component="div">
                    Purchase number : {indiv.id}{" "}    
                    Total amount : {indiv.price}{" "}
                    Date : {indiv.date}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
    
    

}; 


export default Purchases;