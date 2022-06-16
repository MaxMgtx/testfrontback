import { Alert, Card, CardContent, CircularProgress, Fab, Grid, Stack, Typography } from "@mui/material";
import useAxios from "axios-hooks";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

const Invoices = () => { 

    const [{data, loading, error}] = useAxios(
        "/invoices"
    );

    return(
        <div>
            <h3>Invoices </h3>
            <Stack spacing={2}>
                {loading && <CircularProgress/>}
                {error && <Alert severity="error">Error somewhere!</Alert>}
                {data && (
                    <>
                        <Grid container spacing={2}>
                            {data.map((invoice) => <InvoiceIndiv indiv={invoice}  key={invoice.id}/> )}
                        </Grid>
                        <Link to="/invoices/new">
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

const InvoiceIndiv = ({indiv}) => {
        
    return(
        <Grid item sm={6} md={4}>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div">
                    Number of invoice : {indiv.id}{" "}    
                    Date : {indiv.date}{" "}
                    Total price : {indiv.price}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
    
    

}; 


export default Invoices;