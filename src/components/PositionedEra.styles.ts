import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: '160px',
        paddingBottom: '160px',
        backgroundColor: '#FFFFFF',
        color: '#1D1D1F',
        borderTop: '1px solid #f5f5f7',
        [theme.breakpoints.up('lg')]: {
            paddingTop: '200px',
            paddingBottom: '200px',
        }
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
        fontSize: '1.25rem',
        lineHeight: 1.6,
        color: '#1D1D1F',
        maxWidth: '800px',
        margin: '0 auto',
        fontWeight: 400,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem',
            lineHeight: 1.8,
        }
    }
}));
