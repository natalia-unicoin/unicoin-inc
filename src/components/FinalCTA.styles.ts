import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(12),
        backgroundColor: '#000000', // Institutional Deep Black
        color: '#FFFFFF',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        [theme.breakpoints.up('lg')]: {
            paddingTop: '200px',
            paddingBottom: '200px',
        }
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        paddingLeft: '20px',
        paddingRight: '20px',
        position: 'relative',
        zIndex: 2,
    },
    title: {
        fontSize: '40px',
        lineHeight: '1.1',
        fontWeight: 700,
        marginBottom: theme.spacing(3),
        letterSpacing: '-0.04em',
        fontFamily: theme.typography.h1.fontFamily,
        [theme.breakpoints.up('md')]: {
            fontSize: '72px',
        }
    },
    subtitle: {
        fontSize: '18px',
        lineHeight: '1.6',
        color: '#A1A1A6', // Apple Secondary Gray
        maxWidth: '700px',
        margin: '0 auto',
        marginBottom: theme.spacing(8),
        fontWeight: 400,
        [theme.breakpoints.up('md')]: {
            fontSize: '24px',
        }
    },
    button: {
        display: 'inline-block',
        backgroundColor: '#FFFFFF',
        color: '#000000',
        padding: '20px 48px',
        borderRadius: '9999px',
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
