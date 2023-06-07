import { FC } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import NotfoundPage from './Pages/NotfoundPage';
import PartnersPage from './Pages/PartnersPage';
import ClientsPage from './Pages/СlientsPage';
import ObjectsPage from './Pages/ObjectsPage';
import ReviewsPage from './Pages/ReviewsPage';
import ContactsPage from './Pages/ContactsPage';

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
