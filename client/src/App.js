import './App.css';
import RegistraionForm from './pages/form';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<RegistraionForm/>}/>
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App; 
