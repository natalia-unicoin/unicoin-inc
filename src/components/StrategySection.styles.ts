import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        padding: theme.spacing(15, 0),
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: theme.spacing(0, 4),
        textAlign: 'center',
    },
    subtitle: {
        fontFamily: theme.typography.h2.fontFamily,
        fontSize: '1.5rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: theme.palette.secondary.main,
        marginBottom: theme.spacing(6),
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem',
        }
    },
    content: {
        maxWidth: '900px',
        margin: '0 auto',
    },
    description: {
        fontSize: '1.25rem',
        lineHeight: 1.8,
        marginBottom: theme.spacing(4),
        color: theme.palette.text.secondary,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem',
        },
        '& strong': {
            color: theme.palette.common.black,
            fontWeight: 700,
        }
    }
}));
