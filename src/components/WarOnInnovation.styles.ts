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
        marginBottom: theme.spacing(12),
        lineHeight: 1.1,
        textAlign: 'center',
        fontSize: '24px', // Smaller so it doesn't compete with the main statement
        textTransform: 'uppercase',
        color: 'rgba(250, 251, 252, 0.6)', // Faded
        [theme.breakpoints.up('md')]: {
            fontSize: '28px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '32px',
            marginBottom: '160px',
        }
    },
    contentWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        gap: theme.spacing(10),
    },
    statement: {
        fontSize: '2.5rem',
        fontWeight: 700,
        lineHeight: 1.1,
        letterSpacing: '-0.03em',
        [theme.breakpoints.up('md')]: {
            fontSize: '4rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '5rem', // Cinematic size
        }
    },
    accent: {
        color: '#fcd144', // Highlight color
    },
    supportingText: {
        fontSize: '1.25rem',
        lineHeight: 1.7,
        color: 'rgba(250, 251, 252, 0.8)',
        fontWeight: 400,
        maxWidth: '800px',
        margin: '0 auto',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem',
        }
    },
    metricGrid: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing(8),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            gap: theme.spacing(16),
        }
    },
    metricItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    metricDivider: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
            width: '1px',
            height: '100px',
            backgroundColor: 'rgba(250, 251, 252, 0.2)',
        }
    },
    metricValue: {
        fontSize: '4rem', // Massive metrics
        fontWeight: 700,
        color: '#FAFBFC',
        lineHeight: 1,
        letterSpacing: '-0.04em',
        [theme.breakpoints.up('md')]: {
            fontSize: '6rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '7rem',
        }
    },
    metricLabel: {
        fontSize: '1rem',
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        color: '#FCD144', // Accent yellow for labels
        marginTop: theme.spacing(3),
        fontWeight: 600,
    }
}));
