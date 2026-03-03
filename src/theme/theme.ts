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
                primary: { main: '#02251E' }, // Obsidian Green
                secondary: { main: '#DBFC93' }, // Acid Lime
                success: { main: '#02251E' },
                info: { main: '#89C9C9' }, // Soft Aqua-Marine
                warning: { main: '#DBFC93' },
                background: { default: '#F2F7FA', paper: '#FFFFFF' }, // Frost White and pure white
                text: { primary: '#02251E', secondary: '#89C9C9' },
            };
        case 'safebets':
            return {
                mode: 'light' as const,
                primary: { main: '#232733' }, // Dark Navy
                secondary: { main: '#BBFF71' }, // Lime Green
                success: { main: '#232733' },
                info: { main: '#0966FF' }, // Bright Blue
                warning: { main: '#BBFF71' },
                background: { default: '#FFFFFF', paper: '#FAFBFC' },
                text: { primary: '#232733', secondary: '#575A65' },
            };
        case 'tbiz':
        default:
            return {
                mode: 'light' as const,
                primary: { main: '#0E1A2B' }, // Darkest Blue/Black (assumed from first card background)
                secondary: { main: '#FCD144' }, // Yellow Accent
                success: { main: '#0E1A2B' },
                info: { main: '#2A4B6A' }, // Dark Blue Complement
                warning: { main: '#FCD144' },
                background: { default: '#FFFFFF', paper: '#FAFBFC' }, // Off-white for paper
                text: { primary: '#0E1A2B', secondary: '#2A4B6A' },
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
