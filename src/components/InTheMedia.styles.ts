import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        backgroundColor: '#FFFFFF',
        color: '#000000',
        [theme.breakpoints.up('md')]: {
            paddingTop: '120px',
            paddingBottom: '120px',
        },
    },
    container: {
        maxWidth: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '20px',
        paddingRight: '20px',
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '100px',
            paddingRight: '100px',
        }
    },
    title: {
        fontSize: '40px',
        lineHeight: '1.1',
        fontWeight: 700,
        textAlign: 'center',
        letterSpacing: '-0.02em',
        fontFamily: theme.typography.h1.fontFamily,
        marginBottom: '60px',
        textTransform: 'uppercase',
        [theme.breakpoints.up('md')]: {
            fontSize: '64px',
            marginBottom: '80px',
        }
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: theme.spacing(6),
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
        }
    },
    mediaCard: {
        display: 'flex',
        flexDirection: 'column',
        padding: '40px',
        border: '1px solid #E5E5E7',
        backgroundColor: '#FBFBFB',
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: '#FFFFFF',
            boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
            transform: 'translateY(-5px)',
        }
    },
    tag: {
        fontSize: '12px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: '#86868B',
        marginBottom: '20px',
    },
    mediaTitle: {
        fontSize: '20px',
        fontWeight: 700,
        lineHeight: 1.3,
        marginBottom: '15px',
        color: '#000000',
    },
    excerpt: {
        fontSize: '16px',
        lineHeight: 1.6,
        color: '#6E6E73',
        marginBottom: '25px',
        flexGrow: 1,
    },
    source: {
        fontSize: '14px',
        fontWeight: 600,
        color: '#000000',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        '&:after': {
            content: '"→"',
            transition: 'transform 0.3s ease',
        },
        '.mediaCard:hover &:after': {
            transform: 'translateX(5px)',
        }
    }
}));
