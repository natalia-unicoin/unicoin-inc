import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(12),
        backgroundColor: '#FFFFFF',
        color: '#111111',
        [theme.breakpoints.up('lg')]: {
            paddingTop: '200px',
            paddingBottom: '200px',
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
        fontSize: '40px',
        fontWeight: 700,
        marginBottom: theme.spacing(3),
        letterSpacing: '-0.04em',
        lineHeight: 1.1,
        [theme.breakpoints.up('md')]: {
            fontSize: '56px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '64px',
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
    contentGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: theme.spacing(6),
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: theme.spacing(12),
        }
    },
    card: {
        backgroundColor: '#f5f5f7', // Apple light gray card
        borderRadius: '30px',
        padding: '60px 40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        transition: 'transform 0.4s ease-out',
        '&:hover': {
            transform: 'scale(1.02)',
        }
    },
    cardTitle: {
        fontSize: '1.5rem',
        fontWeight: 600,
        marginBottom: theme.spacing(2),
        letterSpacing: '-0.02em',
    },
    cardText: {
        fontSize: '1.125rem',
        lineHeight: 1.6,
        color: '#1d1d1f',
        fontWeight: 400,
    },
    highlightRow: {
        marginTop: theme.spacing(12),
        padding: '80px 40px',
        backgroundColor: '#000000',
        borderRadius: '30px',
        color: '#FFFFFF',
        textAlign: 'center',
        [theme.breakpoints.up('lg')]: {
            marginTop: '160px',
        }
    },
    imperativeLabel: {
        fontSize: '0.875rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        color: '#fcd144', // Secondary yellow/gold highlight
        marginBottom: theme.spacing(2),
        display: 'block',
    },
    imperativeTitle: {
        fontSize: '2rem',
        fontWeight: 700,
        marginBottom: theme.spacing(3),
        letterSpacing: '-0.03em',
        [theme.breakpoints.up('md')]: {
            fontSize: '3rem',
        }
    },
    imperativeDescription: {
        fontSize: '1.125rem',
        color: '#a1a1a6', // Apple description gray
        maxWidth: '700px',
        margin: '0 auto',
        lineHeight: 1.6,
    }
}));
