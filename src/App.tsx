import React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { FooterComponent } from './Footer'
import { Navbar } from './Navbar';
import { Content } from './Content';
import Signup from './signup'

import './PlainCss.css';
interface FooterComponentProps {
  linkName: string
}

export default function App() {
  return (
      <StyledEngineProvider injectFirst>
        <Navbar />
        <CssBaseline />
        <Signup />
        < FooterComponent linkName={'Link to your website'} />
      </StyledEngineProvider>
  );
}