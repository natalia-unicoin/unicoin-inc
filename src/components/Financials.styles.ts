import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        backgroundColor: theme.palette.primary.main, // Deep corporate dark
        color: '#FFFFFF',
        padding: theme.spacing(8, 0), // Mobile 64px
        width: '100%',
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(16, 0), // Desktop 128px
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
        color: '#FFFFFF',
        [theme.breakpoints.up('md')]: {
            fontSize: '3.5rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '4.5rem',
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
    card: {
        backgroundColor: theme.palette.primary.main, // Slightly lighter dark for contrast against #1D1D1F
        border: `1px solid rgba(255, 255, 255, 0.08)`, // Extremely subtle stroke
        borderRadius: '24px',
        padding: theme.spacing(4), // Slightly tighter on mobile
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '260px', // slightly smaller
        transition: 'transform 0.3s ease, border-color 0.3s ease',
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
        },
        '&:hover': {
            transform: 'translateY(-4px)',
            borderColor: 'rgba(255, 255, 255, 0.2)',
        }
    },
    statValue: {
        fontSize: '2.5rem', // Adjusted for mobile
        fontWeight: 800,
        color: '#FFFFFF',
        fontFamily: theme.typography.h1.fontFamily,
        lineHeight: 1,
        marginBottom: theme.spacing(2),
        letterSpacing: '-0.03em',
        [theme.breakpoints.up('md')]: {
            fontSize: '4rem',
        }
    },
    statLabel: {
        fontSize: '0.875rem',
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: theme.palette.secondary.main, // Brand accent for data label
        marginBottom: theme.spacing(4),
    },
    cardTitle: {
        fontSize: '1.25rem',
        fontWeight: 600,
        color: '#FFFFFF',
        fontFamily: theme.typography.h1.fontFamily,
        lineHeight: 1.4,
        marginBottom: theme.spacing(4),
        maxWidth: '80%',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem',
        }
    },
    cardAction: {
        fontSize: '0.875rem',
        fontWeight: 600,
        color: '#FFFFFF',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1),
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        opacity: 0.8,
        transition: 'opacity 0.2s, color 0.2s',
        '&::after': {
            content: '"→"',
            transition: 'transform 0.2s',
        },
        '&:hover': {
            opacity: 1,
            color: theme.palette.secondary.main,
        },
        '&:hover::after': {
            transform: 'translateX(4px)',
        }
    }
}));
