import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/theme';
// import './styles/global.css';
import HomePage from './Components/HomePage/HomePage';
import { NameFilled, SignIn, ReloadData} from "./Components/index.js";
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import './App.css';
import "@fontsource/montserrat";
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IconButton
        sx={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
        }}
      >
        <Brightness7Icon />
      </IconButton>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/SignIn' element={<SignIn/>} />
          <Route path='/NameFilled' element={<NameFilled/>}/>
          <Route path='/reloadData' element={<ReloadData/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;