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
        gap: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: theme.spacing(4),
        }
    },
    bentoCard: {
        position: 'relative',
        backgroundColor: '#FAFBFC', // Very subtle off-white Apple style
        border: `1px solid ${theme.palette.grey[200]}`,
        borderRadius: '24px',
        padding: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(4),
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
            backgroundColor: '#FFFFFF',
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
        }
    },
    cardNumber: {
        position: 'absolute',
        top: theme.spacing(2),
        right: theme.spacing(3),
        fontSize: '4rem',
        fontWeight: 800,
        color: 'rgba(35, 39, 51, 0.03)', // Very faint structural number
        fontFamily: theme.typography.h1.fontFamily,
        pointerEvents: 'none',
        lineHeight: 1,
        [theme.breakpoints.up('md')]: {
            fontSize: '6rem',
            top: theme.spacing(3),
            right: theme.spacing(4),
        }
    },
    colTitle: {
        fontSize: '1.25rem',
        fontWeight: 700,
        color: '#232733',
        textTransform: 'capitalize',
        letterSpacing: '0.02em',
        fontFamily: theme.typography.h1.fontFamily,
        position: 'relative',
        zIndex: 2,
    },
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2.5),
        position: 'relative',
        zIndex: 2,
    },
    listItem: {
        fontSize: '1rem', // Increased readability
        color: '#232733',
        fontWeight: 500, // Medium weight for institutional feel
        lineHeight: 1.5,
        display: 'flex',
        alignItems: 'flex-start',
        gap: theme.spacing(2),
        '&::before': {
            content: '""',
            display: 'inline-block',
            width: '6px',
            height: '6px',
            backgroundColor: '#0966FF', // Action color dot
            borderRadius: '50%',
            flexShrink: 0,
            marginTop: '10px', // Aligns with first line of text
        }
    }
}));
