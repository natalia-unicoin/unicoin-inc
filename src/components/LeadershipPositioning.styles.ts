import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: '80px',
        paddingBottom: '80px',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E5E5E7',
        [theme.breakpoints.up('md')]: {
            paddingTop: '120px',
            paddingBottom: '120px',
        }
    },
    container: {
        maxWidth: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            paddingLeft: '100px',
            paddingRight: '100px',
        }
    },
    title: {
        fontSize: '40px',
        lineHeight: '1.1',
        fontWeight: 700,
        marginBottom: '60px',
        letterSpacing: '-0.02em',
        fontFamily: theme.typography.h1.fontFamily,
        color: '#000000',
        textAlign: 'center',
        textTransform: 'uppercase',
        [theme.breakpoints.up('md')]: {
            fontSize: '64px',
            marginBottom: '100px',
        }
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '40px',
        [theme.breakpoints.up('sm')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
        },
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '60px 40px',
        }
    },
    statItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
    },
    statValue: {
        fontSize: '48px',
        fontWeight: 800,
        lineHeight: '1',
        marginBottom: '12px',
        color: '#000000',
        fontFamily: theme.typography.h1.fontFamily,
        [theme.breakpoints.up('md')]: {
            fontSize: '72px',
        }
    },
    statLabel: {
        fontSize: '14px',
        fontWeight: 600,
        color: '#666666',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        maxWidth: '200px',
        lineHeight: '1.4',
        fontFamily: theme.typography.body1.fontFamily,
    }
}));
