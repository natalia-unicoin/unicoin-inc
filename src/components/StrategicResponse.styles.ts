import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : '#FBFBFD', // Apple very light gray in light, dark background in dark
        color: theme.palette.text.primary,
        [theme.breakpoints.up('lg')]: {
            paddingTop: '160px',
            paddingBottom: '160px',
        }
    },
    container: {
        maxWidth: '100%',
        margin: '0 auto',
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '150px',
            paddingRight: '150px',
        }
    },
    header: {
        textAlign: 'center',
        marginBottom: theme.spacing(10),
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        letterSpacing: '-0.03em',
        marginBottom: theme.spacing(2),
        lineHeight: 1.1,
        fontSize: '44px',
        [theme.breakpoints.up('md')]: {
            fontSize: '64px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '72px',
        }
    },
    subtitle: {
        fontSize: '1.25rem',
        color: theme.palette.text.primary,
        maxWidth: '700px',
        margin: '0 auto',
        fontWeight: 700,
    },
    tableContainer: {
        marginTop: theme.spacing(8),
        overflowX: 'auto',
    },
    table: {
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: '0 12px',
    },
    th: {
        textAlign: 'left',
        padding: '24px',
        fontSize: '0.875rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: theme.palette.text.primary,
    },
    thBrand: {
        color: theme.palette.text.primary,
    },
    tr: {
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : theme.palette.background.paper,
        backdropFilter: theme.palette.mode === 'dark' ? 'blur(10px)' : 'none',
        '&:hover': {
            transform: 'scale(1.01)',
            transition: 'transform 0.3s ease',
        }
    },
    td: {
        padding: '32px 24px',
        fontSize: '1.125rem',
        borderTop: theme.palette.mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #F5F5F7',
        borderBottom: theme.palette.mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #F5F5F7',
        '&:first-of-type': {
            borderLeft: theme.palette.mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #F5F5F7',
            borderRadius: '20px 0 0 20px',
            fontWeight: 600,
            width: '25%',
        },
        '&:last-of-type': {
            borderRight: theme.palette.mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #F5F5F7',
            borderRadius: '0 20px 20px 0',
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#F5F5F7', // Highlight for the brand
            width: '40%',
        }
    },
    traditionalValue: {
        color: theme.palette.text.primary,
        width: '35%',
        fontWeight: 400,
    },
    brandValue: {
        fontWeight: 700,
        color: theme.palette.text.primary,
    }
}));
