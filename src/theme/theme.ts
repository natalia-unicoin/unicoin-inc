import { createTheme } from '@mui/material/styles';
import { Inter, Montserrat } from 'next/font/google';

const inter = Inter({
    weight: ['400', '500', '700', '900'],
    subsets: ['latin'],
    display: 'swap',
});

const montserrat = Montserrat({
    weight: ['700', '800', '900'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#0E1A2B', // Neutro 3 (Oscuro)
        },
        secondary: {
            main: '#FCD144', // Acento (Amarillo)
        },
        success: {
            main: '#0E1A2B', // Neutro 3
        },
        info: {
            main: '#2A4B6A', // Complemento (Azul Naval)
        },
        warning: {
            main: '#FCD144', // Acento
        },
        background: {
            default: '#FAFBFC', // Neutro 1 (Claro - Blanco Humo)
            paper: '#E6E8EB', // Neutro 2 (Medio / Gris Tenue)
        },
        text: {
            primary: '#0E1A2B', // Neutro 3
            secondary: '#2A4B6A', // Complemento
        }
    },
    typography: {
        fontFamily: inter.style.fontFamily,
        h1: {
            fontFamily: montserrat.style.fontFamily,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
        },
        h2: {
            fontFamily: montserrat.style.fontFamily,
            fontWeight: 700,
            letterSpacing: '-0.03em',
        },
        h3: {
            fontFamily: montserrat.style.fontFamily,
            fontWeight: 700,
            letterSpacing: '-0.03em',
        },
        h4: {
            fontFamily: montserrat.style.fontFamily,
            fontWeight: 700,
            letterSpacing: '-0.03em',
        },
        h5: {
            fontFamily: montserrat.style.fontFamily,
            fontWeight: 700,
            letterSpacing: '-0.03em',
        },
        h6: {
            fontFamily: montserrat.style.fontFamily,
            fontWeight: 700,
            letterSpacing: '-0.03em',
        },
        body1: {
            fontFamily: inter.style.fontFamily,
        },
        subtitle1: {
            fontFamily: inter.style.fontFamily,
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                h1, h2, h3, h4, h5, h6 {
                    font-family: ${montserrat.style.fontFamily} !important;
                    font-weight: 700 !important;
                    letter-spacing: -0.03em !important;
                }
            `,
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    padding: '12px 24px',
                },
            },
        },
    },
});

export default theme;
