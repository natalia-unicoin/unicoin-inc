import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(12),
        backgroundColor: '#000000',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
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
        position: 'relative',
        zIndex: 10,
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '100px',
            paddingRight: '100px',
        }
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily,
        fontSize: '40px',
        fontWeight: 700,
        marginBottom: theme.spacing(8),
        letterSpacing: '-0.04em',
        lineHeight: 1.1,
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            fontSize: '56px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '64px',
            marginBottom: '120px',
        }
    },
    contentGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: theme.spacing(6),
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: theme.spacing(12),
        },
        alignItems: 'start'
    },
    leftColumn: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(4),
    },
    statement: {
        fontSize: '1.75rem',
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: '-0.02em',
        [theme.breakpoints.up('md')]: {
            fontSize: '2.5rem',
        }
    },
    accent: {
        color: '#fcd144', // Highlight color
    },
    rightColumn: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(4),
    },
    supportingText: {
        fontSize: '1.125rem',
        lineHeight: 1.8,
        color: '#A1A1A6',
        fontWeight: 300,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.25rem',
        }
    },
    metricGrid: {
        marginTop: theme.spacing(8),
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: theme.spacing(4),
        borderTop: '1px solid rgba(255,255,255,0.1)',
        paddingTop: theme.spacing(6),
    },
    metricItem: {
        display: 'flex',
        flexDirection: 'column',
    },
    metricValue: {
        fontSize: '2rem',
        fontWeight: 700,
        color: '#FFFFFF',
    },
    metricLabel: {
        fontSize: '0.875rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: '#6E6E73',
        marginTop: theme.spacing(1),
    }
}));
