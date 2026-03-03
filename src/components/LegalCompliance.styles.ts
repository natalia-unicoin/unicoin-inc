import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        backgroundColor: '#FFFFFF', // Clean white background
        color: '#232733',
        padding: theme.spacing(10, 0),
        borderTop: `1px solid ${theme.palette.grey[200]}`, // Subtle separator from previous sections
        width: '100%',
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(12, 0),
        }
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: theme.spacing(0, 3),
        [theme.breakpoints.up('lg')]: {
            padding: theme.spacing(0, 6),
            maxWidth: '1440px',
        }
    },
    header: {
        marginBottom: theme.spacing(4),
        textAlign: 'center',
        margin: '0 auto',
        maxWidth: '900px',
        [theme.breakpoints.up('md')]: {
            marginBottom: theme.spacing(6),
        }
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily, // Inter
        fontSize: '1.5rem', // Smaller than main sections
        fontWeight: 700,
        letterSpacing: '-0.02em',
        color: '#232733',
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem',
        },
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        gap: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
        },
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: theme.spacing(4),
        },
        [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: 'repeat(5, 1fr)',
        }
    },
    linkItem: {
        fontSize: '0.8125rem', // Smaller typography (13px)
        color: theme.palette.grey[600],
        textDecoration: 'none',
        lineHeight: 1.5,
        fontWeight: 500,
        fontFamily: theme.typography.h1.fontFamily,
        transition: 'color 0.2s ease',
        display: 'block',
        '&:hover': {
            color: '#0966FF', // Action blue on hover
        }
    }
}));
