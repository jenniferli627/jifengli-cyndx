import React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { Content } from './Content';

import './PlainCss.css';
interface FooterComponentProps {
  linkName: string
}

 export const FooterComponent = ({ linkName }: FooterComponentProps): JSX.Element => {
  return (
    <Typography className='footerItem' variant="body1" color="text.secondary" align="center">
      {'This is a footer @ '}
      <Link color="inherit" href="https://mui.com/">
        {linkName}
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}