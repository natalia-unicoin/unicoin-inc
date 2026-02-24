import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        position: 'relative',
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#000000', // Fallback for video
        color: '#FFFFFF', // White for video context
    },
    bgWrapper: {
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        backgroundColor: '#000000',
    },
    content: {
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        maxWidth: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '0', // Adjusted from 5rem
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '150px',
            paddingRight: '150px',
        }
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily, // Montserrat
        fontWeight: 700,
        letterSpacing: '-0.03em',
        marginBottom: theme.spacing(1),
        color: '#FFFFFF', // White for video
        fontSize: '40px',
        lineHeight: '1',
        [theme.breakpoints.up('md')]: {
            fontSize: '64px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '84px',
        }
    },
    subtitle: {
        fontSize: '1.25rem',
        fontWeight: 600,
        letterSpacing: '0',
        color: '#FFFFFF', // White for video
        marginBottom: theme.spacing(2),
        lineHeight: 1.2,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.75rem',
        }
    },
    description: {
        fontSize: '1rem',
        fontWeight: 300,
        lineHeight: 1.6,
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: theme.spacing(4),
        color: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white
        [theme.breakpoints.up('md')]: {
            fontSize: '1.25rem',
        }
    },
    ctaContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        }
    },
    ctaButton: {
        backgroundColor: '#FCD144', // Brand Yellow
        color: '#000000',
        padding: '16px 32px', // px-8 py-4
        borderRadius: '9999px', // Pill shape
        fontSize: '0.875rem', // text-sm
        fontWeight: 700,
        letterSpacing: '0.1em', // tracking-widest
        textTransform: 'uppercase',
        border: 'none',
        cursor: 'pointer',
        boxShadow: theme.shadows[10], // shadow-xl approximately
        transition: 'all 0.3s',
        '&:hover': {
            backgroundColor: '#e5bc3d', // Darker Yellow
            transform: 'scale(1.05)',
            boxShadow: theme.shadows[20], // shadow-2xl
        },
        [theme.breakpoints.up('md')]: {
            padding: '20px 40px', // px-10 py-5
            fontSize: '1rem', // text-base
        }
    },
    watermark: {
        position: 'absolute',
        bottom: theme.spacing(4), // bottom-8
        right: theme.spacing(4), // right-8
        zIndex: 20,
        display: 'none', // Hidden as per requirement
    },
    modalBackdrop: {
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 100,
        backdropFilter: 'blur(8px)', // Apple-style frost
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(3),
    },
    modalContent: {
        backgroundColor: '#FFFFFF', // High contrast institutional look
        borderRadius: '30px', // Match the rest of the cards
        padding: theme.spacing(5),
        maxWidth: '700px',
        width: '100%',
        position: 'relative',
        boxShadow: theme.shadows[24],
        textAlign: 'left',
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(8),
        }
    },
    modalCloseButton: {
        position: 'absolute',
        top: theme.spacing(3),
        right: theme.spacing(3),
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: theme.spacing(1),
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.grey[500],
        transition: 'all 0.2s',
        '&:hover': {
            backgroundColor: theme.palette.grey[100],
            color: theme.palette.common.black,
        },
        [theme.breakpoints.up('md')]: {
            top: theme.spacing(4),
            right: theme.spacing(4),
        }
    },
    modalTitle: {
        fontFamily: theme.typography.h1.fontFamily,
        fontSize: '1.5rem',
        fontWeight: 700,
        letterSpacing: '-0.03em', // Typical Apple formatting
        marginBottom: theme.spacing(3),
        color: theme.palette.common.black,
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem',
        }
    },
    modalText: {
        fontFamily: "'Inter', sans-serif",
        fontSize: '1rem',
        lineHeight: 1.8,
        fontWeight: 400,
        color: theme.palette.grey[800],
        [theme.breakpoints.up('md')]: {
            fontSize: '1.125rem',
        }
    }
}));
