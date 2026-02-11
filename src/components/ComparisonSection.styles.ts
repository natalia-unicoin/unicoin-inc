import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: '60px',
        paddingBottom: '60px',
        backgroundColor: '#F5F5F7', // Apple light gray
        color: '#1D1D1F',
        [theme.breakpoints.up('md')]: {
            paddingTop: '100px',
            paddingBottom: '100px',
        }
    },
    container: {
        maxWidth: '980px', // Apple max-width
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '20px',
        paddingRight: '20px',
    },
    title: {
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
    subtitle: {
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 60px auto',
        fontSize: '17px', // Apple body
        lineHeight: '25px',
        color: '#6E6E73', // Apple medium gray
    },
    tableWrapper: {
        overflowX: 'auto',
        backgroundColor: 'transparent',
        borderRadius: '24px',
        padding: '1px', // For shadow not to cut
    },
    table: {
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: '10px 0', // Spacing for columns to look like cards
        minWidth: '800px',
    },
    th: {
        padding: theme.spacing(3, 4),
        textAlign: 'center',
        fontSize: '14px',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontWeight: 700,
        color: '#6E6E73',
        border: 'none',
    },
    td: {
        padding: theme.spacing(4, 4),
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: 1.5,
        borderBottom: '1px solid #E5E5E7',
        color: '#1D1D1F',
        textAlign: 'center',
    },
    featureName: {
        fontWeight: 600,
        color: '#1D1D1F',
        width: '30%',
        textAlign: 'left',
        borderBottom: 'none',
    },
    traditional: {
        color: '#6E6E73',
        width: '35%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    unicoin: {
        backgroundColor: '#FFFFFF',
        width: '35%',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        borderLeft: '1px solid #E5E5E7',
        borderRight: '1px solid #E5E5E7',
        zIndex: 1,
    },
    thUnicoin: {
        backgroundColor: '#FFFFFF',
        color: '#1D1D1F', // Dark text for readability
        borderTop: '4px solid #FCD144',
        borderTopLeftRadius: '24px',
        borderTopRightRadius: '24px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
        padding: theme.spacing(4, 4), // More vertical padding
        fontSize: '16px', // Slightly larger than other headers
    },
    highlightRow: {
        '&:hover td': {
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
        },
        '&:hover td.unicoin': {
            backgroundColor: '#FFFFFF',
            transform: 'scale(1.02)',
            transition: 'all 0.3s ease',
        }
    },
    lastTdUnicoin: {
        borderBottomLeftRadius: '24px',
        borderBottomRightRadius: '24px',
        borderBottom: 'none !important',
    }
}));
