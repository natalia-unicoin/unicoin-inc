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

import { ThemeMode } from '@/context/ThemeContext';

const getPalette = (mode: ThemeMode) => {
    switch (mode) {
        case 'light':
            return {
                mode: 'light' as const,
                primary: { main: '#000000' }, // Apple black
                secondary: { main: '#0071E3' }, // Apple blue
                success: { main: '#000000' },
                info: { main: '#0071E3' },
                warning: { main: '#F56300' },
                background: { default: '#FFFFFF', paper: '#F5F5F7' },
                text: { primary: '#1D1D1F', secondary: '#86868B' },
            };
        case 'safebets':
            return {
                mode: 'dark' as const,
                primary: { main: '#1D1D1F' },
                secondary: { main: '#BBFF71' }, // Neon accent
                success: { main: '#1D1D1F' },
                info: { main: '#FFFFFF' },
                warning: { main: '#BBFF71' },
                background: { default: '#111111', paper: '#1D1D1F' },
                text: { primary: '#FFFFFF', secondary: '#A1A1A6' },
            };
        case 'tbiz':
        default:
            return {
                mode: 'light' as const,
                primary: { main: '#232733' }, // Neutro 3 (Oscuro)
                secondary: { main: '#BBFF71' }, // Acento (Amarillo)
                success: { main: '#232733' },
                info: { main: '#0966FF' }, // Complemento (Azul Naval)
                warning: { main: '#BBFF71' },
                background: { default: '#FFFFFF', paper: '#F5F5F7' },
                text: { primary: '#232733', secondary: '#0966FF' },
            };
    }
};

const getTheme = (mode: ThemeMode) => createTheme({
    palette: getPalette(mode),
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

export default getTheme;
