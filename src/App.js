import {Button, Card, CardActions, CardContent, Fab, Grid, Stack, Typography} from '@mui/material';
import { Container } from '@mui/system';
import MenuBar from './Composants/MenuBar/MenuBar';
import AddIcon from '@mui/icons-material/Add';


function App() {
  return (
    <Stack>
      <MenuBar />
      <Container maxWidth="md">
        <Stack spacing={2}>
          <h2>Titre</h2>
          <Grid container spacing={2}>
            <Grid item sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Elément
                </Typography>
              </CardContent>
          </Card>
            </Grid>
          </Grid>
          <Fab color='primary' aria-label='add'>
            <AddIcon/>

          </Fab>
        </Stack>
        
      </Container>
      
    </Stack>
  );
}

export default App;
