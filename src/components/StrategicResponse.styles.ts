import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(12),
        backgroundColor: '#FBFBFD', // Apple very light gray
        color: '#1D1D1F',
        [theme.breakpoints.up('lg')]: {
            paddingTop: '160px',
            paddingBottom: '160px',
        }
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '100px',
            paddingRight: '100px',
        }
    },
    header: {
        textAlign: 'center',
        marginBottom: theme.spacing(10),
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily,
        fontSize: '40px',
        fontWeight: 700,
        marginBottom: theme.spacing(2),
        letterSpacing: '-0.03em',
        [theme.breakpoints.up('md')]: {
            fontSize: '56px',
        }
    },
    subtitle: {
        fontSize: '1.25rem',
        color: '#86868B',
        maxWidth: '700px',
        margin: '0 auto',
        fontWeight: 400,
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
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: '#86868B',
    },
    thBrand: {
        color: '#000000',
    },
    tr: {
        backgroundColor: '#FFFFFF',
        '&:hover': {
            transform: 'scale(1.01)',
            transition: 'transform 0.3s ease',
        }
    },
    td: {
        padding: '32px 24px',
        fontSize: '1.125rem',
        borderTop: '1px solid #F5F5F7',
        borderBottom: '1px solid #F5F5F7',
        '&:first-of-type': {
            borderLeft: '1px solid #F5F5F7',
            borderRadius: '20px 0 0 20px',
            fontWeight: 600,
            width: '25%',
        },
        '&:last-of-type': {
            borderRight: '1px solid #F5F5F7',
            borderRadius: '0 20px 20px 0',
            backgroundColor: '#F5F5F7', // Highlight for the brand
            width: '40%',
        }
    },
    traditionalValue: {
        color: '#86868B',
        width: '35%',
    },
    brandValue: {
        fontWeight: 600,
        color: '#1D1D1F',
    }
}));
