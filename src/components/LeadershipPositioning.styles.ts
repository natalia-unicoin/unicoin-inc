import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: '160px',
        paddingBottom: '80px',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E5E5E7',
    },
    container: {
        maxWidth: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            paddingLeft: '150px',
            paddingRight: '150px',
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '150px',
            paddingRight: '150px',
        }
    },
    title: {
        fontSize: '44px',
        lineHeight: '1.1',
        fontWeight: 700,
        marginBottom: '60px',
        letterSpacing: '-0.03em',
        fontFamily: theme.typography.h1.fontFamily,
        color: '#1D1D1F',
        textAlign: 'center',
        textTransform: 'none',
        [theme.breakpoints.up('md')]: {
            fontSize: '64px',
            marginBottom: '100px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '72px',
        }
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        // borderTop: '1px solid #E5E5E7', // Removed for individual item borders
        // borderLeft: '1px solid #E5E5E7', // Removed for individual item borders
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
        }
    },
    statItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left',
        padding: '32px',
        border: '1px solid #D2D2D7',
        borderRadius: '30px',
        transition: 'background-color 0.3s ease',
        '&:hover': {
            backgroundColor: '#F9F9FB',
        }
    },
    statValue: {
        fontSize: '32px',
        fontWeight: 700,
        lineHeight: '1',
        marginBottom: '8px',
        color: '#1D1D1F',
        fontFamily: theme.typography.h1.fontFamily,
        [theme.breakpoints.up('md')]: {
            fontSize: '48px',
        }
    },
    statLabel: {
        fontSize: '12px',
        fontWeight: 700,
        color: '#1D1D1F', // High contrast
        textTransform: 'uppercase',
        letterSpacing: '0.05em', // Reduced from 0.1em
        lineHeight: '1.4',
        fontFamily: theme.typography.body1.fontFamily,
    }
}));
