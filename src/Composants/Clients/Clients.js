import { Alert, Card, CardContent, CircularProgress, Fab, Grid, Stack, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import useAxios from 'axios-hooks';
import { Link } from "react-router-dom";

const Clients = () => {
    const [{data, loading, error}] = useAxios(
        "http://localhost:8080/api/v1/clients"
    );
    
    return(
        <Stack spacing={2}>
            <h2>Clients</h2>
            {loading && <CircularProgress/>}
            {error && <Alert severity="error">Error somewhere!</Alert>}
            {data && (
                <>
                    <Grid container spacing={2}>
                        {data.map((client) => <ClientIndiv indiv={client}/> )}
                    </Grid>
                    <Link to="/clients/new">
                        <Fab color='primary' aria-label='add'>
                            <AddIcon/>
                        </Fab>
                    </Link>    
                </>
            )} 
        </Stack>
    )
};

const ClientIndiv = ({indiv}) => {

    return(
        <Grid item sm={6} md={4} key={indiv.id}>
            <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                {indiv.name}
                </Typography>
            </CardContent>
            </Card>
        </Grid>
    )

}
export default Clients;