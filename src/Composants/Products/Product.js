import { Alert, Card, CardContent, CircularProgress, Fab, Grid, Stack, Typography } from "@mui/material";
import useAxios from "axios-hooks";
import AddIcon from '@mui/icons-material/Add';

import { Link } from "react-router-dom";




const Product = () => { 

    const [{data, loading, error}] = useAxios(
        "/products"
    )
    return(
        <div>
            <h2>Products</h2>
            <Stack spacing={2}>
                {loading && <CircularProgress/>}
                {error && <Alert severity="error">Error somewhere!</Alert>}
                {data && (
                    <div>
                        <Grid container spacing={2}>
                            {data.map((product) => <UniqueProduct p={product} key={product.id}/> )}
                        </Grid><br />
                        <Link to="/productsform">
                            <Fab color='primary' aria-label='add'>
                                <AddIcon/>
                            </Fab>
                        </Link> 

                    </div>
                       
                )} 
            </Stack>
        </div>
    )

};

const UniqueProduct = ({p}) => {    
    
    return(
        <Grid item sm={6} md={4}>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div">
                    {p.name}
                    </Typography>
                    <Typography variant="h5" component="div">
                    {p.price}{" €"}
                    </Typography>
                    <Typography variant="body2" component="div">
                    {"Stock restant : "}{p.stock}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
    

};

export default Product;