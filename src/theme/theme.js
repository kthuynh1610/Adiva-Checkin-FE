import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#19bfb7',  // Your existing teal color
    },
    secondary: {
      main: '#F50057',
    },
    background: {
      default: '#fafafa',  // Very light gray, almost white
      paper: '#FFFFFF',    // Pure white for cards/paper
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  transitions: {
    duration: {
      enteringScreen: 500,  // Duration for entering animations (in milliseconds)
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontFamily: 'Montserrat',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width: 600px)': {
            padding: '24px',
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
        autoFocus: false,
      },
      styleOverrides: {
        root: {
          '& .MuiInput-underline:before': {
            borderBottomColor: '#19bfb7'
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#19bfb7'
          }
        }
      }
    },
    MuiSlide: {
      defaultProps: {
        timeout: {
          enter: 500,
          exit: 300,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          '@keyframes scaleUp': {
            '0%': {
              transform: 'scale(0)',
              opacity: 0
            },
            '50%': {
              transform: 'scale(1.2)',
            },
            '100%': {
              transform: 'scale(1)',
              opacity: 1
            }
          }
        }
      }
    }
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#19bfb7',
    },
    secondary: {
      main: '#FF4081',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontFamily: 'Montserrat',
        },
      },
    },
  },
}); 