import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        backgroundColor: '#FFFFFF', // Clean institutional white
        color: '#232733',
        padding: theme.spacing(12, 0),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(16, 0),
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
        marginBottom: theme.spacing(8),
        textAlign: 'center',
        margin: '0 auto',
        maxWidth: '900px',
        [theme.breakpoints.up('md')]: {
            marginBottom: theme.spacing(12),
        }
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily, // Inter
        fontSize: '2.5rem',
        fontWeight: 700,
        letterSpacing: '-0.03em',
        lineHeight: 1.1,
        color: '#232733',
        [theme.breakpoints.up('md')]: {
            fontSize: '3.5rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '4.5rem',
        }
    },
    grid: {
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        maxWidth: '1000px',
        margin: '0 auto',
    },
    card: {
        backgroundColor: 'transparent',
        borderBottom: `1px solid ${theme.palette.grey[200]}`,
        padding: theme.spacing(4, 2),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        transition: 'background-color 0.2s ease, padding-left 0.2s ease',
        '&:first-of-type': {
            borderTop: `1px solid ${theme.palette.grey[200]}`,
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: theme.spacing(5, 4),
        },
        '&:hover': {
            backgroundColor: '#FAFBFC',
            paddingLeft: theme.spacing(6),
        }
    },
    cardTitle: {
        fontSize: '1.25rem',
        fontWeight: 600,
        color: '#232733',
        fontFamily: theme.typography.h1.fontFamily,
        lineHeight: 1.3,
        letterSpacing: '-0.01em',
        marginBottom: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            marginBottom: 0,
            fontSize: '1.5rem',
        }
    },
    cardAction: {
        fontSize: '0.875rem',
        fontWeight: 600,
        color: '#0966FF', // Action blue
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1),
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        '&::after': {
            content: '"→"',
            transition: 'transform 0.2s',
        },
        '&:hover::after': {
            transform: 'translateX(4px)',
        }
    }
}));
