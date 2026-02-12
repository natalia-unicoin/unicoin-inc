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
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    bgWrapper: {
        position: 'absolute',
        inset: 0,
        zIndex: 0,
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
        letterSpacing: '-0.03em',
        marginBottom: theme.spacing(4),
        filter: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',
        fontSize: '40px',
        lineHeight: '50px',
        [theme.breakpoints.up('md')]: {
            fontSize: '56px',
            lineHeight: '66px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '64px',
            lineHeight: '74px',
        }
    },
    subtitle: {
        fontSize: '1.25rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: 'rgba(255, 255, 255, 1)', // White
        marginBottom: theme.spacing(1.5), // Reduced spacing
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
        color: 'rgba(255, 255, 255, 0.9)',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.35rem',
        }
    },
    highlight: {
        color: theme.palette.secondary.main, // #fcd144
        paddingRight: theme.spacing(1.5),
        fontSize: '3rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '3.75rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '6rem',
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
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.black,
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
            backgroundColor: '#d4cd55',
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
    },
    watermarkBadge: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        padding: '6px 16px', // px-4 py-1.5
        borderRadius: '9999px',
        boxShadow: theme.shadows[4],
    },
    watermarkText: {
        fontSize: '0.875rem', // text-sm
        fontWeight: 700,
        letterSpacing: '0.2em',
        color: 'rgba(255, 255, 255, 0.8)',
        textTransform: 'uppercase',
    }
}));
