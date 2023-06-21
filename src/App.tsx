import { FC } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './Pages/About';
import ServicesPage from './Pages/Services/Index';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import NotfoundPage from './Pages/NotFound/Index';
import PartnersPage from './Pages/Partners/Index';
import ClientsPage from './Pages/Clients/Index';
import ObjectsPage from './Pages/Objects/Index';
import ReviewsPage from './Pages/Reviews/Index';
import ContactsPage from './Pages/Contacts/Index';
import MainPage from './Pages/Main/Index';

const App: FC = () => {
  return (
    <>
      <Header />
      <Navbar />
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
    </>
  );
};

export default App;
