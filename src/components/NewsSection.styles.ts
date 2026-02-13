import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: '60px',
        paddingBottom: '60px',
        backgroundColor: '#F5F5F7', // Apple light gray
        [theme.breakpoints.up('md')]: {
            paddingTop: '100px',
            paddingBottom: '100px',
        },
    },
    container: {
        maxWidth: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '20px',
        paddingRight: '20px',
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '100px',
            paddingRight: '100px',
        }
    },
    title: {
        fontSize: '32px', // Apple mobile h2
        lineHeight: '36px',
        fontWeight: 600, // Apple weight
        textAlign: 'center',
        letterSpacing: '-0.03em',
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
        fontSize: '17px', // Apple body text
        lineHeight: '25px',
        color: '#6E6E73', // Apple medium gray
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: theme.spacing(4),
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: theme.spacing(4),
        }
    },
    newsCard: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '24px',
        overflow: 'hidden',
        backgroundColor: '#FFFFFF', // Apple white
        border: '1px solid #D2D2D7', // Apple border
        transition: 'all 0.3s ease-in-out', // Apple transition
        height: '100%',
        '&:hover': {
            transform: 'scale(1.02)', // Apple subtle scale
            boxShadow: '0 8px 16px rgba(0,0,0,0.12)', // Apple shadow
        }
    },
    imageWrapper: {
        height: '220px',
        width: '100%',
        position: 'relative',
        backgroundColor: '#e0e0e0',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    content: {
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
    tag: {
        display: 'inline-block',
        padding: '4px 12px',
        borderRadius: '20px',
        backgroundColor: 'rgba(252, 209, 68, 0.2)',
        color: '#d1a61c',
        fontSize: '0.75rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        marginBottom: theme.spacing(2),
        alignSelf: 'flex-start',
    },
    newsTitle: {
        fontSize: '1.25rem',
        fontWeight: 700,
        marginBottom: theme.spacing(2),
        lineHeight: 1.4,
        color: theme.palette.text.primary,
    },
    excerpt: {
        fontSize: '1rem',
        color: theme.palette.text.secondary,
        lineHeight: 1.6,
        marginBottom: theme.spacing(3),
        flexGrow: 1,
    },
    date: {
        fontSize: '0.875rem',
        color: theme.palette.text.secondary,
        fontWeight: 500,
    },
    buttonWrapper: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(6),
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(8),
        }
    },
    learnMoreButton: {
        display: 'inline-block',
        padding: '16px 48px',
        backgroundColor: theme.palette.secondary.main, // #111111
        color: theme.palette.common.white,
        fontSize: '0.875rem',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        borderRadius: '9999px',
        transition: 'all 0.3s',
        boxShadow: theme.shadows[4],
        '&:hover': {
            backgroundColor: theme.palette.grey[800],
            transform: 'scale(1.05)',
            boxShadow: theme.shadows[8],
        },
        [theme.breakpoints.up('md')]: {
            padding: '20px 56px',
            fontSize: '1rem',
        }
    }
}));
