import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, TextField, Container, Paper, Typography, Button, Slide } from '@mui/material';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import React from 'react';
import logo from '../../assets/logo.png';
import SuccessAnimation from '../Common/SuccessAnimation';

const ReloadData = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const name = state;
    const [email, setEmail] = useState('');
    const [phoneNumber, setNumber] = useState('');
    const [doin, setDoin] = useState('');
    const [birthday, setBirthday] = useState('');
    const [status, setStatus] = useState(false);
    const [checked, setChecked] = useState(false);

    React.useEffect(() => {
        setChecked(true);
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await fetch('http://localhost:8800/users/userFind', {
                method: 'POST',
                body: JSON.stringify({ name: name }),
                headers: {
                    'Content-type': "application/json; charset=UTF-8",
                }
            });
            const data = await response.json();
            setEmail(data.email);
            setNumber(data.phonenumber);
            setDoin(data.freetext);
            setBirthday(data.birthday);
        } catch (err) {
            console.log(err);
        }
    };

    const UpdateUser = async () => {
        try {
            const response = await fetch('http://localhost:8800/users/updateUser', {
                method: 'put',
                body: JSON.stringify({
                    email,
                    phoneNumber,
                    freetext: doin,
                    birthday,
                }),
                headers: {
                    'Content-type': "application/json; charset=UTF-8",
                }
            });
            const data = await response.json();
            console.log(data);
            setStatus(true);
        } catch (err) {
            console.log("Error", err);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        UpdateUser();
    };

    if (status) {
        return (
            <Container maxWidth="sm">
                <Box sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                   <SuccessAnimation />
                </Box>
            </Container>
        );
    }

    return (
        <Container maxWidth="sm">
            <Button 
                variant="contained"
                onClick={() => navigate('/')}
                sx={{ 
                    position: 'absolute', 
                    top: 20, 
                    left: 20,
                    padding: '10px 30px',
                    color: 'white',
                    width: '100px',
                    height: '60px', 
                }}
            >
                <MdArrowBackIos />
            </Button>
            <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
                <Box sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Paper elevation={3} sx={{
                        p: 4,
                        width: '100%',
                        height: '700px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Box component="form" onSubmit={handleSubmit} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 3,
                            width: '100%',
                            maxWidth: '500px'
                        }}>
                            <Box component="img" src={logo} alt="logo" sx={{ width: '400px', alignSelf: 'center', mb: 3 }} />
                            
                            <TextField
                                label="Email Address"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            
                            <TextField
                                label="Phone Number"
                                type="number"
                                value={phoneNumber}
                                required
                                onChange={(e) => setNumber(e.target.value)}
                            />
                            
                            <TextField
                                label="What are you doing today?"
                                value={doin}
                                onChange={(e) => setDoin(e.target.value)}
                            />
                            
                            <TextField
                                type="date"
                                label="Your birthday"
                                value={birthday}
                                InputLabelProps={{ shrink: true }}
                                onChange={(e) => setBirthday(e.target.value)}
                            />

                            <Button 
                                variant="contained"
                                type="submit"
                                sx={{
                                    borderRadius: 2,
                                    padding: '10px 30px',
                                    color: 'white',
                                    height: '60px',
                                    fontSize: '20px',
                                    textTransform: 'uppercase',
                                    backgroundColor: "#19bfb7",
                                    alignSelf: 'center'
                                }}
                            >
                                Next <MdArrowForwardIos style={{ marginLeft: '8px' }}/>
                            </Button>
                        </Box>
                    </Paper>
                </Box>
            </Slide>
        </Container>
    );
};

export default ReloadData;