import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        backgroundColor: '#FAFBFC',
        color: '#0E1A2B',
        borderTop: '1px solid #f5f5f7',
        position: 'relative',
        minHeight: '150vh', // Extended for scroll duration
        [theme.breakpoints.up('lg')]: {
            minHeight: '200vh',
        }
    },
    stickyWrapper: {
        position: 'sticky',
        top: 0,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(12),
        overflow: 'hidden',
    },
    container: {
        maxWidth: '100%',
        margin: '0 auto',
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        textAlign: 'center',
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '150px',
            paddingRight: '150px',
        }
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        letterSpacing: '-0.03em',
        marginBottom: theme.spacing(4),
        lineHeight: 1.1,
        fontSize: '44px',
        [theme.breakpoints.up('md')]: {
            fontSize: '64px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '84px',
        }
    },
    description: {
        fontSize: '24px', // Increased size for the text reveal effect
        lineHeight: 1.5,
        color: '#0E1A2B',
        maxWidth: '1000px', // Wider since it's the main focus
        margin: '0 auto',
        fontWeight: 600, // Make it bold and confident
        letterSpacing: '-0.02em',
        [theme.breakpoints.up('md')]: {
            fontSize: '32px',
            lineHeight: 1.6,
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '40px',
            lineHeight: 1.4,
        }
    }
}));
