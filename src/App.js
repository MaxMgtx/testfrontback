
import { Stack } from '@mui/material';
import { Container } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import ClientForm from './Composants/Clients/ClientForm';
import Clients from './Composants/Clients/Clients';
import MenuBar from './Composants/MenuBar/MenuBar';



function App() {
  return (
    <Stack>
      <MenuBar />
      <Container maxWidth="md">
        <Routes>
          <Route path="/clients" element={<Clients/>} />
          <Route path="/clients/new" element={<ClientForm/>}/>
        </Routes> 
      </Container>
      
    </Stack>
  );
}

export default App;
