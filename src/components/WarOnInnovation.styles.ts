import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(12),
        backgroundColor: '#2A4B6A',
        color: '#FAFBFC',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '150vh', // Extend height to allow long scroll interactions
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('lg')]: {
            paddingTop: '160px',
            paddingBottom: '160px',
            minHeight: '200vh', // Massive scroll area on desktop
        }
    },
    container: {
        maxWidth: '100%',
        margin: '0 auto',
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        position: 'relative',
        zIndex: 10,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
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
        fontSize: '24px',
        textTransform: 'uppercase',
        color: 'rgba(250, 251, 252, 0.6)',
        position: 'sticky', // Ensure title stays visible
        top: '100px',
        zIndex: 20,
        [theme.breakpoints.up('md')]: {
            fontSize: '28px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '32px',
        }
    },
    contentWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        flex: 1, // Take up remaining space
        width: '100%',
    },
    statementContainer: {
        position: 'sticky',
        top: '25vh', // Lock in upper middle of screen
        width: '100%',
        zIndex: 15,
        display: 'flex',
        justifyContent: 'center',
    },
    supportContainer: {
        position: 'sticky',
        top: '35vh',
        width: '100%',
        zIndex: 16,
        display: 'flex',
        justifyContent: 'center',
    },
    statement: {
        fontSize: '1.75rem',
        fontWeight: 700,
        lineHeight: 1.1,
        letterSpacing: '-0.03em',
        padding: '0 10px',
        [theme.breakpoints.up('md')]: {
            fontSize: '4rem',
            padding: 0,
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '5rem', // Cinematic size
        }
    },
    accent: {
        color: '#fcd144', // Highlight color
    },
    supportingText: {
        fontSize: '1rem',
        lineHeight: 1.6,
        color: 'rgba(250, 251, 252, 0.8)',
        fontWeight: 400,
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 10px',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem',
            lineHeight: 1.7,
            padding: 0,
        }
    },
    metricGrid: {
        position: 'sticky',
        top: '40vh',
        zIndex: 17,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing(8),
        width: '100%',
        backgroundColor: '#2A4B6A', // Ensure it obscures elements behind it if needed
        padding: '40px 0',
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
        fontSize: '3rem', // Scaled down for mobile stack
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
