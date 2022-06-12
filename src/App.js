import { Stack } from '@mui/material';
import { Container } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import MenuBar from './Composants/MenuBar/MenuBar';
import Purchases from './Composants/Purchases/Purchases';
import Product from './Composants/Products/Product';
import Invoices from './Composants/Invoices/Invoices';
import Customers from './Composants/Customers/Customers';
import CustomerForm from './Composants/Customers/CustomerForm';


function App() {

  /*
  const {isAuthenticated, getAccessTokenSilently} = useAuth0();

  if(isAuthenticated){
    getAccessTokenSilently().then((token) => {
      const headers = {autorization : `Bearer ${token}`};
      const axios = Axios.create({
        baseURL : "http://localhost:8080/api/v1",
        headers : headers,
      })
      const defaultOptions = {useCache : false,}
      configure({
        axios, defaultOptions
      });
    }
    )*/
    return(
      <Stack>
      <MenuBar />
      <Container maxWidth="md">
        <Routes>
          <Route path="/customers" element={<Customers/>} />
          <Route path="/customers/new" element={<CustomerForm/>}/>
          <Route path="/purchases" element={<Purchases />}/>
          <Route path="/products" element={<Product/>}/>
          <Route path="/invoices" element={<Invoices/>}/>
        </Routes> 
      </Container>
      
    </Stack>
    );
  /*
  }else{
    return (
      <div>
        <MenuBar/>
        <Alert severity="info">
          Vous devez vous connecter pour accéder au reste de l'application.
        </Alert>
      </div>
    );
  }*/
}

export default App;
