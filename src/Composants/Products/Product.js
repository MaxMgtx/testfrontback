import { Alert, Card, CardContent, CircularProgress, Grid, Stack, Typography } from "@mui/material";
import useAxios from "axios-hooks";
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import DoneIcon from '@mui/icons-material/Done';
import { useState } from "react";




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
                    <Grid container spacing={2}>
                        {data.map((product) => <UniqueProduct p={product} key={product.id}/> )}
                    </Grid>   
                )} 
            </Stack>
        </div>
    )

};

const UniqueProduct = ({p}) => {    

    const [qty, setQty] = useState(0);
    const changeQty=(num, name)=>{
        setQty(qty + num);

    }

    const confirm = () => {

        console.log(qty);
    }

    
    return(
        <Grid item sm={6} md={4}>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div">
                    {p.name}
                    </Typography>
                    <Typography variant="h5" component="div">
                    {p.price}{"€"}
                    </Typography><br />
                <AddIcon onClick={()=>changeQty(1, p.name)}/>
                <HorizontalRuleIcon onClick={()=>changeQty(-1, p.name)}/>
                <DoneIcon onClick={()=>confirm()}/>
                </CardContent>
                <Typography>Quantity : {qty}</Typography>
            
            </Card>
        </Grid>
    )
    

};

export default Product;