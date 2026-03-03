import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        backgroundColor: '#FFFFFF', // Clean institutional white
        color: '#232733', // Dark text for contrast
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
        marginBottom: theme.spacing(3),
        color: '#232733',
        [theme.breakpoints.up('md')]: {
            fontSize: '3.5rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '4.5rem',
        }
    },
    subtitle: {
        fontSize: '1.25rem',
        lineHeight: 1.5,
        color: theme.palette.grey[700],
        maxWidth: '800px',
        margin: '0 auto',
        fontWeight: 700,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem',
        }
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: theme.spacing(6),
        [theme.breakpoints.up('sm')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
        },
        [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: theme.spacing(4),
        }
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(3),
    },
    colTitle: {
        fontSize: '1.25rem',
        fontWeight: 700,
        color: '#232733',
        borderBottom: `2px solid #BBFF71`, // Accent underline
        paddingBottom: theme.spacing(2),
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        fontFamily: theme.typography.h1.fontFamily,
    },
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
    },
    listItem: {
        fontSize: '0.9375rem',
        color: theme.palette.grey[800],
        lineHeight: 1.6,
        display: 'flex',
        alignItems: 'baseline',
        gap: theme.spacing(1.5),
        '&::before': {
            content: '""',
            display: 'inline-block',
            width: '4px',
            height: '4px',
            backgroundColor: '#0966FF', // Action color dot
            borderRadius: '50%',
            flexShrink: 0,
            transform: 'translateY(-3px)'
        }
    }
}));
