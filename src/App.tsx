import { FC } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './Pages/About/AboutPage';
import ServicesPage from './Pages/Services/ServicesPage';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import NotfoundPage from './Pages/NotFound/NotFoundPage';
import PartnersPage from './Pages/Partners/PartnersPage';
import ClientsPage from './Pages/Clients/ClientsPage';
import ObjectsPage from './Pages/Objects/ObjectsPage';
import ReviewsPage from './Pages/Reviews/ReviewsPage';
import ContactsPage from './Pages/Contacts/ContactsPage';
import MainPage from './Pages/Main/MainPage';
import Footer from './Components/Footer/Footer';

const App: FC = () => {
  return (
    <div className='app'>
      <div className='header'>
        <Header />
      </div>
      <div className='headerNavbar'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='services' element={<ServicesPage />} />
        <Route path='partners' element={<PartnersPage />} />
        <Route path='clients' element={<ClientsPage />} />
        <Route path='objects' element={<ObjectsPage />} />
        <Route path='reviews' element={<ReviewsPage />} />
        <Route path='contacts' element={<ContactsPage />} />
        <Route path='*' element={<NotfoundPage />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
