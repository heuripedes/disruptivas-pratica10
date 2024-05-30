import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Item = Paper;
function Footer() {
	return (
		<Container>
			<Item sx={{textAlign: "center", fontWeight: "bold"}}>
				Atividade Prática do Módulo 10 - Higor Eurípedes 2024
			</Item>
		</Container>
	)
}

export default Footer;

