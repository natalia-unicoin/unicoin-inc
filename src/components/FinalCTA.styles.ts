import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: '160px',
        paddingBottom: '160px',
        backgroundColor: '#0E1A2B', // Institutional Deep Black
        color: '#FAFBFC',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid #333333', // Subtle separator for dark section
    },
    container: {
        maxWidth: '100%',
        margin: '0 auto',
        paddingLeft: '20px',
        paddingRight: '20px',
        position: 'relative',
        zIndex: 2,
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '150px',
            paddingRight: '150px',
        }
    },
    title: {
        lineHeight: '1.1',
        fontWeight: 700,
        marginBottom: theme.spacing(3),
        letterSpacing: '-0.03em',
        fontFamily: theme.typography.h1.fontFamily,
        fontSize: '44px',
        [theme.breakpoints.up('md')]: {
            fontSize: '64px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '72px',
        }
    },
    subtitle: {
        fontSize: '18px',
        lineHeight: '1.6',
        color: '#FAFBFC', // Apple Secondary Gray
        maxWidth: '700px',
        margin: '0 auto',
        marginBottom: theme.spacing(8),
        fontWeight: 700,
        [theme.breakpoints.up('md')]: {
            fontSize: '24px',
        }
    },
    button: {
        display: 'inline-block',
        backgroundColor: '#FAFBFC',
        color: '#0E1A2B',
        padding: '20px 48px',
        borderRadius: '9999px', // Pill shape
        fontSize: '16px',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 0 30px rgba(255,255,255,0.3)',
        }
    },
    bgAccent: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)',
        zIndex: 1,
    }
}));
