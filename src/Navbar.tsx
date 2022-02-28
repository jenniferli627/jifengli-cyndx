import React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { Content } from './Content';

import './PlainCss.css';
import ReactDOM from 'react-dom';

export class Navbar extends React.Component {
	render() {
		return (
			<div>
				<ul className="nav">
					<li><a href="https://www.cyndx.com/">Cyndx</a></li>
					<li><a href="https://www.cyndx.com/about-us">About</a></li>
					<li><a href="https://www.cyndx.com/request-demo">Contact</a></li>
				</ul>
			</div>
			
		);
	}
}

ReactDOM.render(
	<Navbar />,
	document.getElementById('root')
);