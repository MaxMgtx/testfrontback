
import { Stack } from '@mui/material';
import { Container } from '@mui/system';
import Clients from './Composants/Clients/Clients';
import MenuBar from './Composants/MenuBar/MenuBar';



function App() {
  return (
    <Stack>
      <MenuBar />
      <Container maxWidth="md">
        <Clients/> 
      </Container>
      
    </Stack>
  );
}

export default App;
