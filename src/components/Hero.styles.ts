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
        backgroundColor: '#F8FAFC', // Corporate Soft
        color: '#111111', // Corporate Black
    },
    bgWrapper: {
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        display: 'none', // Hide video background for clean institutional look
    },
    bgImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        [theme.breakpoints.up('md')]: {
            objectPosition: '80% 30%',
        },
    },
    overlay: {
        position: 'absolute',
        inset: 0,
        zIndex: 10,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
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
        marginTop: '5rem',
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '100px',
            paddingRight: '100px',
        }
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily, // Montserrat
        fontWeight: 700,
        letterSpacing: '-0.02em',
        marginBottom: theme.spacing(4),
        color: '#111111', // Corporate Black
        fontSize: '44px',
        lineHeight: '1.1',
        [theme.breakpoints.up('md')]: {
            fontSize: '64px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '72px',
        }
    },
    subtitle: {
        fontSize: '1.25rem',
        fontWeight: 600,
        letterSpacing: '0.1em',
        color: '#000000', // Black
        marginBottom: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem',
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
        color: '#000000', // Black
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
        backgroundColor: theme.palette.primary.main, // Obsidian Green
        color: '#FFFFFF',
        padding: '16px 32px', // px-8 py-4
        borderRadius: '9999px',
        fontSize: '0.875rem', // text-sm
        fontWeight: 700,
        letterSpacing: '0.1em', // tracking-widest
        textTransform: 'uppercase',
        border: 'none',
        cursor: 'pointer',
        boxShadow: theme.shadows[10], // shadow-xl approximately
        transition: 'all 0.3s',
        '&:hover': {
            backgroundColor: '#033f33', // Lighter Obsidian
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
