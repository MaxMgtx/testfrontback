import {Stack} from '@mui/material';
import { Container } from '@mui/system';
import MenuBar from './Composants/MenuBar/MenuBar';


function App() {
  return (
    <Stack>
      <MenuBar />
      <Container maxWidth="md">
        <p>Hello</p>
      </Container>
      
    </Stack>
  );
}

export default App;
