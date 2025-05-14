import { Box, Typography, Fade } from '@mui/material';

const SuccessAnimation = () => {
    return (
        <Fade in={true}>
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
    );
};

export default SuccessAnimation; 