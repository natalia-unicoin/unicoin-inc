import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(12),
        backgroundColor: '#FFFFFF',
        color: '#111111',
        [theme.breakpoints.up('lg')]: {
            paddingTop: '160px',
            paddingBottom: '160px',
        }
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '100px',
            paddingRight: '100px',
        }
    },
    header: {
        textAlign: 'center',
        marginBottom: theme.spacing(10),
        [theme.breakpoints.up('lg')]: {
            marginBottom: '120px',
        }
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        letterSpacing: '-0.02em',
        marginBottom: theme.spacing(3),
        lineHeight: 1.1,
        fontSize: '44px',
        [theme.breakpoints.up('md')]: {
            fontSize: '64px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '72px',
        }
    },
    subtitle: {
        fontSize: '1.25rem',
        fontWeight: 400,
        color: '#6e6e73', // Apple gray
        maxWidth: '800px',
        margin: '0 auto',
        lineHeight: 1.5,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem',
        }
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: theme.spacing(4),
        marginTop: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
        },
        [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: 'repeat(4, 1fr)',
            marginTop: theme.spacing(6),
        }
    },
    box: {
        backgroundColor: '#ffffff',
        border: '1px solid #e5e5ea',
        borderRadius: '20px',
        padding: '40px 30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
        '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: theme.shadows[8],
        },
        // Decorative top accent for institutional feel
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            backgroundColor: '#000000',
            transform: 'scaleX(0)',
            transformOrigin: 'left',
            transition: 'transform 0.4s ease',
        },
        '&:hover::before': {
            transform: 'scaleX(1)',
        }
    },
    boxTitle: {
        fontSize: '1.25rem',
        fontWeight: 700,
        color: '#1d1d1f',
        marginBottom: theme.spacing(2),
        letterSpacing: '-0.01em',
        fontFamily: theme.typography.h3.fontFamily,
    },
    boxText: {
        fontSize: '1rem',
        color: '#6e6e73',
        lineHeight: 1.6,
        fontWeight: 400,
    }
}));
