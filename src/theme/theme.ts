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
        case 'safebets': // This acts as TBIZ 2 now
            return {
                mode: 'light' as const,
                primary: { main: '#10141E' }, // Darkest Navy/Black from image
                secondary: { main: '#BBFF71' }, // Restored Lime Green for high-contrast accents
                success: { main: '#10141E' },
                info: { main: '#009EE3' }, // Bright Azure from image
                warning: { main: '#F7D046' }, // Gold/Yellow from image
                background: { default: '#FFFFFF', paper: '#E6E7E8' }, // Light Gray from palette
                text: { primary: '#10141E', secondary: '#0A337C' }, // Deep blue for secondary text
            };
        case 'glass':
            return {
                mode: 'dark' as const,
                primary: { main: '#FAFBFC' }, // Light primary for dark backgrounds
                secondary: { main: '#06b6d4' }, // Luminous Cyan
                success: { main: '#FAFBFC' },
                info: { main: '#38bdf8' }, // Light Blue
                warning: { main: '#a78bfa' }, // Soft Purple
                background: { default: '#0B1120', paper: 'rgba(16, 23, 42, 0.4)' }, // Translucent dark
                text: { primary: '#FFFFFF', secondary: '#94a3b8' }, // High contrast text
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
