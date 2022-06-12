import { Stack } from '@mui/material';
import { Container } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import ClientForm from './Composants/Clients/ClientForm';
import Clients from './Composants/Clients/Clients';
import MenuBar from './Composants/MenuBar/MenuBar';
import Purchases from './Composants/Purchases/Purchases';
import Product from './Composants/Products/Product';
import Invoices from './Composants/Invoices/Invoices';


function App() {


  return (
    <Stack>
      <MenuBar />
      <Container maxWidth="md">
        <Routes>
          <Route path="/" element={<Clients/>} />
          <Route path="/customers" element={<Clients/>} />
          <Route path="/customers/new" element={<ClientForm/>}/>
          <Route path="/purchases" element={<Purchases />}/>
          <Route path="/products" element={<Product/>}/>
          <Route path="/invoices" element={<Invoices/>}/>
        </Routes> 
      </Container>
      
    </Stack>
  );
}

export default App;
