import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './page/HomePage';
import Edukasi from './page/Edukasi';
import Dashboard from './page/Dashboard';
import Komunitas from './page/Komunitas';
import Biotalaut from './page/Biotalaut';
import Majalah from './page/Majalah';
import DetailMajalah from './page/DetailMajalah';
import DetailBiotalaut from './page/DetailBiotalaut';
import CrudBiotalaut from './page/CrudBiotalaut';
import CrudMajalah from './page/CrudMajalah';
import ListBiotalaut from './page/ListBiotalaut';
import ListMajalah from './page/ListMajalah';
import EditMajalah from './page/EditMajalah';
import EditBiotalaut from './page/EditBiotalaut';
import AdminorUser from './page/AdminorUser';
import AdminDashboard from './page/AdminDashboard';
import LoginUser from './page/LoginUser';
import LoginAdmin from './page/LoginAdmin';
import SignUp from './page/SignUp';
import Navigationbar from './components/Navigationbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarWrapper() {
  const location = useLocation();
  const hideNavbar = [
    '/adminoruser',
    '/admindashboard',
    '/crudmajalah',
    '/crudbiotalaut',
    '/listbiotalaut',
    '/listmajalah',
    '/editmajalah',
    '/editbiotalaut',
  ].includes(location.pathname);

  return (
    <div>
      {!hideNavbar && <Navigationbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edukasi" element={<Edukasi />} />
        <Route path="/komunitas" element={<Komunitas />} />
        <Route path="/biotalaut" element={<Biotalaut />} />
        <Route path="/majalah" element={<Majalah />} />
        <Route path="/detailmajalah/:id" element={<DetailMajalah />} />
        <Route path="/detailbiotalaut/:id" element={<DetailBiotalaut />} />
        <Route path="/crudmajalah" element={<CrudMajalah />} />
        <Route path="/crudbiotalaut" element={<CrudBiotalaut />} />
        <Route path="/listbiotalaut" element={<ListBiotalaut />} />
        <Route path="/listmajalah" element={<ListMajalah />} />
        <Route path="/editmajalah/:id" element={<EditMajalah />} />
        <Route path="/editbiotalaut/:id" element={<EditBiotalaut />} />
        <Route path="/adminoruser" element={<AdminorUser />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/loginuser" element={<LoginUser />} />
        <Route path="/loginadmin" element={<LoginAdmin />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <NavbarWrapper />
    </Router>
  );
}

export default App;