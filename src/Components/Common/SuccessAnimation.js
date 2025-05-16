import { Box, Typography, Fade } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SuccessAnimation = () => {
    const navigate = useNavigate();
    const [showFlip, setShowFlip] = useState(false);

    useEffect(() => {
        // First show the success animation
        const successTimer = setTimeout(() => {
            setShowFlip(true);
        }, 3000); // Show flip after 3 seconds

        // Then navigate after flip animation
        const navigateTimer = setTimeout(() => {
            navigate('/');
        }, 5000); // Navigate after 5 seconds total

        // Cleanup timers
        return () => {
            clearTimeout(successTimer);
            clearTimeout(navigateTimer);
        };
    }, [navigate]);

    return (
        <Box sx={{
            height: '100vh',
            width: '100vw',
            perspective: '1000px',
            position: 'relative',
            transformStyle: 'preserve-3d',
            transition: 'transform 1s',
            transform: showFlip ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}>
         
            <Box sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Fade in={!showFlip}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        gap: 2,
                        '& .circle': {
                            strokeDasharray: 597,
                            strokeDashoffset: 597,
                            animation: 'circle 1s ease-in-out forwards'
                        },
                        '& .tick': {
                            strokeDasharray: 175,
                            strokeDashoffset: 175,
                            animation: 'tick 0.8s ease-out forwards 0.2s'
                        },
                        '@keyframes circle': {
                            from: {
                                strokeDashoffset: 597
                            },
                            to: {
                                strokeDashoffset: 0
                            }
                        },
                        '@keyframes tick': {
                            from: {
                                strokeDashoffset: 175
                            },
                            to: {
                                strokeDashoffset: 0
                            }
                        }
                    }}>
                        <svg width="100" height="100">
                            <circle
                                fill="none"
                                stroke="#19bfb7"
                                strokeWidth="6"
                                cx="50"
                                cy="50"
                                r="45"
                                strokeLinecap="round"
                                transform="rotate(-90 50 50)"
                                className="circle"
                            />
                            <polyline
                                fill="none"
                                stroke="#19bfb7"
                                points="22,53.5 43.25,71 76,34.5"
                                strokeWidth="7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="tick"
                            />
                        </svg>
                        <Typography 
                            variant="h5" 
                            sx={{ 
                                color: '#19bfb7',
                                animation: 'fadeIn 0.5s ease-in-out 1s forwards',
                                opacity: 0,
                                fontSize: '1.5rem',
                                '@keyframes fadeIn': {
                                    from: {
                                        opacity: 0,
                                        transform: 'translateY(10px)'
                                    },
                                    to: {
                                        opacity: 1,
                                        transform: 'translateY(0)'
                                    }
                                }
                            }}
                        >
                            Thank you for checking in!
                        </Typography>
                    </Box>
                </Fade>
            </Box>

            {/* Back side (Empty, will show home page after navigation) */}
            <Box sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                backgroundColor: '#fafafa',
            }} />
        </Box>
    );
};

export default SuccessAnimation; 