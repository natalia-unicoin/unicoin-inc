import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        position: 'relative',
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#000000', // Fallback for video
        color: '#FFFFFF', // White for video context
    },
    bgWrapper: {
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        // Re-enabled video background
    },
    bgImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        inset: 0,
        zIndex: 1, // Changed from 10 to 1 to stay behind content
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4), rgba(0,0,0,0.8))', // Darker for readability
    },
    content: {
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        maxWidth: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '0', // Adjusted from 5rem
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '100px',
            paddingRight: '100px',
        }
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily, // Montserrat
        fontWeight: 700,
        letterSpacing: '-0.02em',
        marginBottom: theme.spacing(1),
        color: '#FFFFFF', // White for video
        fontSize: '52px',
        lineHeight: '1',
        [theme.breakpoints.up('md')]: {
            fontSize: '90px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '110px',
        }
    },
    subtitle: {
        fontSize: '1.5rem',
        fontWeight: 600,
        letterSpacing: '0',
        color: '#FFFFFF', // White for video
        marginBottom: theme.spacing(4),
        lineHeight: 1.2,
        [theme.breakpoints.up('md')]: {
            fontSize: '2.25rem',
        }
    },
    description: {
        fontSize: '1.125rem',
        fontWeight: 300,
        lineHeight: 1.6,
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: theme.spacing(6),
        color: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white
        [theme.breakpoints.up('md')]: {
            fontSize: '1.35rem',
        }
    },
    ctaContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        }
    },
    ctaButton: {
        backgroundColor: '#FCD144', // Brand Yellow
        color: '#000000',
        padding: '16px 32px', // px-8 py-4
        borderRadius: '5px',
        fontSize: '0.875rem', // text-sm
        fontWeight: 700,
        letterSpacing: '0.1em', // tracking-widest
        textTransform: 'uppercase',
        border: 'none',
        cursor: 'pointer',
        boxShadow: theme.shadows[10], // shadow-xl approximately
        transition: 'all 0.3s',
        '&:hover': {
            backgroundColor: '#e5bc3d', // Darker Yellow
            transform: 'scale(1.05)',
            boxShadow: theme.shadows[20], // shadow-2xl
        },
        [theme.breakpoints.up('md')]: {
            padding: '20px 40px', // px-10 py-5
            fontSize: '1rem', // text-base
        }
    },
    watermark: {
        position: 'absolute',
        bottom: theme.spacing(4), // bottom-8
        right: theme.spacing(4), // right-8
        zIndex: 20,
        display: 'none', // Hidden as per requirement
    }
}));
