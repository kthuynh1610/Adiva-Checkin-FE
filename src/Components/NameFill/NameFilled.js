//import {Link} from 'react-router-dom';
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { Box, TextField, IconButton, Container, Paper, Typography, Button, Slide } from '@mui/material';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';
import logo from '../../assets/logo.png';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NameFilled = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [checked, setChecked] = useState(false);  // For controlling the slide animation
    const [error, setError] = useState(false);

    const validateName = (name) => {
        const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+([ '-][a-zA-ZÀ-ÖØ-öø-ÿ]+)+$/;
        return nameRegex.test(name.trim());
    }

    useEffect(() => {
        setChecked(true);
    }, []);

    const checkUser = async () => {
        if(!name){
            alert('Please enter your name');
            return;
        }
        try {
            const response = await fetch('http://localhost:8800/users/userFind', {
                method: 'POST',
                body: JSON.stringify({ name }),
                headers: {
                    'Content-type': "application/json; charset=UTF-8",
                }
            });
            const data = await response.json();
            if (data.message === "User not found") {
                navigate('/SignIn', { state: name });
            } else {
                navigate('/reloadData', { state: name });
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmitName = (e) => {
        e.preventDefault();
        checkUser();
    };

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        setError(value.trim() !== '' && !validateName(value));
    };

    return (
        <Container maxWidth="sm">
            <Button 
                variant="contained"
                onClick={() => navigate('/')}
                sx={{ position: 'absolute', top: 20, left: 20,
                    padding: '10px 30px',
                    color: 'white',
                    width: '100px',
                    height: '60px', }}
            >
                <ArrowBackIcon />
            </Button>
            <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
                <Box
                    sx={{
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Paper
                        elevation={3}
                        sx={{ p: 4, width: '100%',
                            height:'500px',display:'flex',
                            alignItems:'center',
                            justifyContent:'center'
                         }}
                    >
                        <Box
                            component="form"
                            onSubmit={handleSubmitName}
                            sx={{
                                display: 'flex',
                                gap: 2,
                                alignItems: 'center',flexDirection:'column'
                            }}
                        >
                            <Box component="img" src={logo} alt="logo" sx={{ width: '400px', alignSelf: 'center', mb: 3 }} />
                            <Box sx={{
                                display: 'flex',
                                gap: 2,
                                marginBottom:'50px',
                                alignItems: 'flex-start',flexDirection:'column'
                            }}>
                                <TextField
                                    label="Your full name"
                                    variant="standard"
                                    sx={{
                                        width:'500px',border:'none',
                                        '& .MuiInput-underline:before': {
                                            borderBottomColor: '#19bfb7'
                                        },
                                        '& .MuiInput-underline:after': {
                                            borderBottomColor: '#19bfb7'
                                        }
                                    }}
                                    onChange={handleNameChange}
                                    error={error}
                                    helperText={error ? 'Please enter your full name (first and last).' : ''}
                                />
                            </Box>
                            
                            <Box >
                                <Button 
                                    variant="contained" 
                                    size="large"
                                    sx={{
                                        borderRadius: 2,
                                        padding: '10px 30px',
                                        color: 'white',
                                        width: '200px',
                                        height: '60px',
                                        fontSize: '20px',
                                        textTransform: 'uppercase',
                                        cursor: 'pointer',
                                        backgroundColor: "#19bfb7",
                                        opacity: error ? 0.5 : 1,
                                        pointerEvents: error ? 'none' : 'auto',
                                    }}
                                    type="submit"
                                >
                                     <MdArrowForwardIos />
                                </Button>
                             </Box>
                        </Box>
                    </Paper>
                </Box>
            </Slide>
        </Container>
    );
};

export default NameFilled;
// onClick={alreadyLogin === 'false'? <Link to='/SignIn'/> : setAlreadyLogin(true)}