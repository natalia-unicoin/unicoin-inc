import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: '80px',
        paddingBottom: '160px',
        backgroundColor: '#FAFBFC',
        color: '#0E1A2B',
    },
    container: {
        maxWidth: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '20px',
        paddingRight: '20px',
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '150px',
            paddingRight: '150px',
        }
    },
    title: {
        fontSize: '44px',
        lineHeight: '1.1',
        fontWeight: 700,
        color: '#0E1A2B', // Apple Black
        textAlign: 'center',
        letterSpacing: '-0.03em',
        fontFamily: theme.typography.h1.fontFamily,
        marginBottom: '60px',
        textTransform: 'none',
        [theme.breakpoints.up('md')]: {
            fontSize: '64px',
            marginBottom: '80px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '72px',
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
        borderRadius: '30px',
        border: '1px solid #D2D2D7', // Apple Light Gray
        backgroundColor: '#FBFBFB',
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: '#FAFBFC',
            boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
            transform: 'translateY(-5px)',
        }
    },
    tag: {
        fontSize: '12px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: '#0E1A2B',
        marginBottom: '20px',
    },
    mediaTitle: {
        fontSize: '20px',
        fontWeight: 700,
        lineHeight: 1.3,
        marginBottom: '15px',
        color: '#0E1A2B',
    },
    excerpt: {
        fontSize: '16px',
        lineHeight: 1.6,
        color: '#0E1A2B',
        marginBottom: '25px',
        flexGrow: 1,
    },
    source: {
        fontSize: '14px',
        fontWeight: 700,
        color: '#0E1A2B',
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
