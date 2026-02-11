import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        backgroundColor: '#f9f9f9',
        color: theme.palette.common.black,
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(15),
            paddingBottom: theme.spacing(15),
        }
    },
    container: {
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
        }
    },
    title: {
        fontSize: '40px',
        lineHeight: '50px',
        fontWeight: 700,
        letterSpacing: '-0.03em',
        textAlign: 'center',
        marginBottom: theme.spacing(8),
        fontFamily: theme.typography.h1.fontFamily,
        [theme.breakpoints.up('md')]: {
            fontSize: '56px',
            lineHeight: '66px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '64px',
            lineHeight: '74px',
        }
    },
    tableWrapper: {
        overflowX: 'auto',
        backgroundColor: theme.palette.common.white,
        borderRadius: '24px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
        border: '1px solid #eee',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        minWidth: '800px',
    },
    th: {
        padding: theme.spacing(4),
        textAlign: 'left',
        backgroundColor: theme.palette.grey[50],
        borderBottom: '2px solid #eee',
        fontSize: '1rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontWeight: 700,
        color: theme.palette.text.secondary,
    },
    td: {
        padding: theme.spacing(4),
        borderBottom: '1px solid #f0f0f0',
        fontSize: '1.125rem',
        fontWeight: 500,
    },
    featureName: {
        fontWeight: 700,
        color: theme.palette.text.primary,
        width: '25%',
        backgroundColor: theme.palette.grey[50],
    },
    traditional: {
        color: theme.palette.text.secondary,
        width: '37.5%',
    },
    unicoin: {
        color: theme.palette.secondary.main, // #fcd144
        fontWeight: 700,
        width: '37.5%',
        backgroundColor: 'rgba(252, 209, 68, 0.06)',
        borderLeft: `2px solid ${theme.palette.secondary.main}`,
        borderRight: `2px solid ${theme.palette.secondary.main}`,
        position: 'relative',
    },
    thUnicoin: {
        backgroundColor: 'rgba(252, 209, 68, 0.1)',
        color: theme.palette.secondary.main,
        borderLeft: `2px solid ${theme.palette.secondary.main}`,
        borderRight: `2px solid ${theme.palette.secondary.main}`,
        borderTop: `4px solid ${theme.palette.secondary.main}`,
        textAlign: 'center',
    },
    highlightRow: {
        '&:last-child td.unicoin': {
            borderBottom: `2px solid ${theme.palette.secondary.main}`,
        },
        '&:hover': {
            backgroundColor: '#fafafa',
        }
    }
}));
