import React from 'react';
import logo from '../../assets/logo.png';
import { Box, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Container 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh'
            }}
        >
            <Box component="img" src={logo} alt="logo" sx={{ width: '500px', mb: 3 }} />
            <Box>
                <Link to='/NameFilled' style={{ textDecoration: 'none' }}>
                    <Button 
                        variant="contained" 
                        size="large"
                        sx={{
                            borderRadius: 2,
                            padding: '10px 30px',
                            color: 'white',
                            width: '400px',
                            height: '100px',
                            fontSize: '20px',
                            textTransform: 'uppercase',
                            cursor: 'pointer',
                            backgroundColor: "#19bfb7",
                        }}
                    >
                        Tap to Sign in
                    </Button>
                </Link>
            </Box>
        </Container>
    );
};

export default HomePage;