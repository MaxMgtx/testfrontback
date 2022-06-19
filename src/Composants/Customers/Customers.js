import { Alert, Card, CardContent, CircularProgress, Fab, Grid, Pagination, Stack, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import useAxios from 'axios-hooks';
import { Link } from "react-router-dom";
import { useState } from "react";

const Customers = () => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = ( event, newPage) => {
        setCurrentPage(newPage);
    }
    
    const [{data, loading, error}] = useAxios({
        url: "/customers",
        params: {
            page: currentPage -1,
            size:6
        }
    });
    
    return(
        <Stack spacing={2}>
            <h2>Customers</h2>
            {loading && <CircularProgress/>}
            {error && <Alert severity="error">Error somewhere!</Alert>}
            {data && (
                <>
                    <Grid container spacing={2}>
                        {data.content.map((customer) => <IndivCustomer indiv={customer}  key={customer.id}/> )}
                    </Grid>
                    <Link to="/customerform">
                        <Fab color='primary' aria-label='add'>
                            <AddIcon/>
                        </Fab>
                    </Link>
                    <Pagination count={data.totalPages} pages={currentPage} color="primary" onChange={handlePageChange}/>    
                </>
            )} 
        </Stack>
    )
};

const IndivCustomer = ({indiv}) => {

    
    return(
        <Grid item sm={6} md={4}>
            <Card sx={{ boxShadow: 5, m:2 }}>
            <CardContent >
                <Typography variant="h5" component="div">
                {indiv.firstName}
                </Typography>
                <Typography variant="h5" component="div">
                {indiv.lastName}
                </Typography><br />
                <Typography variant="body2" sx={{py : 1}} component="div">
                {indiv.phone}
                </Typography>
                <Typography variant="body2" sx={{py : 1}} component="div">
                {indiv.mail}
                </Typography>
                <Typography variant="body2" sx={{py : 1}} component="div">
                {indiv.address}
                </Typography>
            </CardContent> 
            </Card>
        </Grid>
    )
    

}; 

export default Customers;