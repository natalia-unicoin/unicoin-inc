import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: '60px',
        paddingBottom: '60px',
        backgroundColor: '#F5F5F7', // Apple light gray
        [theme.breakpoints.up('md')]: {
            paddingTop: '100px',
            paddingBottom: '100px',
        }
    },
    container: {
        maxWidth: '980px',
        margin: '0 auto',
        padding: '0 20px',
        textAlign: 'center',
    },
    title: {
        fontSize: '40px',
        lineHeight: '50px',
        fontWeight: 600,
        letterSpacing: '-0.03em',
        textAlign: 'center',
        marginBottom: theme.spacing(2),
        fontFamily: theme.typography.h1.fontFamily,
        color: '#1D1D1F',
        [theme.breakpoints.up('md')]: {
            fontSize: '56px',
            lineHeight: '66px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '64px',
            lineHeight: '74px',
        }
    },
    subtitle: {
        fontSize: '32px', // Apple mobile h2
        lineHeight: '36px',
        fontWeight: 600,
        letterSpacing: '-0.03em',
        textAlign: 'center',
        marginBottom: theme.spacing(2),
        fontFamily: theme.typography.h2.fontFamily,
        [theme.breakpoints.up('md')]: {
            fontSize: '48px', // Apple desktop h2
            lineHeight: '52px',
        }
    },
    content: {
        maxWidth: '900px',
        margin: '0 auto',
    },
    description: {
        fontSize: '17px', // Apple body
        lineHeight: '25px',
        marginBottom: theme.spacing(4),
        color: '#6E6E73', // Apple medium gray
        [theme.breakpoints.up('md')]: {
            fontSize: '17px',
        },
        '& strong': {
            color: '#1D1D1F', // Apple almost black
            fontWeight: 600,
        }
    }
}));
