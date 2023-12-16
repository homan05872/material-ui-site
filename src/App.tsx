import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Top from './pages/homes/Top';
import Profile from './pages/homes/profile';
import Blog from './pages/homes/blog';
import Skill from './pages/homes/skill'
import Production from './pages/homes/production';
import Contact from './pages/homes/contact';
import NoMatch from './pages/nomatch';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Top />}></Route>
        <Route path='/profile/' element={<Profile/>}></Route>
        <Route path='/skill/' element={<Skill/>}></Route>
        <Route path='/production/' element={<Production/>}></Route>
        <Route path='/contact/' element={<Contact/>}></Route>
        <Route path='/blog/' element={<Blog/>}></Route>
        <Route path='*' element={<NoMatch/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
