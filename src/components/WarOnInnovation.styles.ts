import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(12),
        backgroundColor: '#2A4B6A',
        color: '#FAFBFC',
        position: 'relative',
        overflow: 'hidden',
        [theme.breakpoints.up('lg')]: {
            paddingTop: '160px',
            paddingBottom: '160px',
        }
    },
    container: {
        maxWidth: '100%',
        margin: '0 auto',
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        position: 'relative',
        zIndex: 10,
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '150px',
            paddingRight: '150px',
        }
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        letterSpacing: '-0.03em',
        marginBottom: theme.spacing(8),
        lineHeight: 1.1,
        textAlign: 'center',
        fontSize: '44px',
        [theme.breakpoints.up('md')]: {
            fontSize: '64px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '72px',
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
        letterSpacing: '-0.03em',
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
        color: '#FAFBFC',
        fontWeight: 400,
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
        color: '#FAFBFC',
    },
    metricLabel: {
        fontSize: '0.875rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: '#FAFBFC',
        marginTop: theme.spacing(1),
    }
}));
