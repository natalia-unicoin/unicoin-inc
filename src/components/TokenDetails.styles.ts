import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        backgroundColor: '#ffffff',
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(15),
            paddingBottom: theme.spacing(15),
        }
    },
    container: {
        maxWidth: '1280px',
        margin: '0 auto',
        padding: theme.spacing(0, 3),
        [theme.breakpoints.up('lg')]: {
            padding: '0 60px',
        }
    },
    header: {
        textAlign: 'center',
        maxWidth: '900px',
        margin: '0 auto 60px',
    },
    title: {
        fontSize: '40px',
        lineHeight: '50px',
        fontWeight: 800,
        marginBottom: theme.spacing(3),
        letterSpacing: '-0.03em',
        [theme.breakpoints.up('md')]: {
            fontSize: '56px',
            lineHeight: '66px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '64px',
            lineHeight: '74px',
        }
    },
    description: {
        fontSize: '1.25rem',
        lineHeight: 1.6,
        color: '#4b5563',
        fontWeight: 400,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem',
        }
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
        },
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(3, 1fr)',
        }
    },
    card: {
        backgroundColor: '#ffffff',
        border: '1px solid #f3f4f6',
        borderRadius: '24px',
        padding: theme.spacing(4),
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '220px',
        transition: 'all 0.3s ease',
        '&:hover': {
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            transform: 'translateY(-5px)',
        }
    },
    label: {
        fontSize: '0.875rem',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        color: '#9ca3af',
        marginBottom: theme.spacing(3),
        fontWeight: 600,
    },
    value: {
        fontSize: '1.75rem',
        fontWeight: 700,
        color: '#000000',
        wordBreak: 'break-all',
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem',
        }
    },
    address: {
        fontSize: '1rem',
        fontWeight: 600,
        color: '#000000',
        wordBreak: 'break-all',
        lineHeight: 1.4,
    },
    logo: {
        height: '40px',
        width: 'auto',
        marginBottom: theme.spacing(1),
    },
    logoText: {
        fontSize: '1.5rem',
        fontWeight: 700,
        marginTop: theme.spacing(1),
    }
}));
