import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: '160px',
        paddingBottom: '80px',
        backgroundColor: theme.palette.mode === 'dark' ? '#F5F5F7' : theme.palette.background.paper, // Off-white/light gray fallback
        backgroundImage: theme.palette.mode === 'dark' ? 'url(/images/liquid-glass-bg-1.jpg)' : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderTop: theme.palette.mode === 'dark' ? '1px solid rgba(0,0,0,0.05)' : '1px solid #E5E5E7',
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
        color: theme.palette.mode === 'dark' ? '#111827' : theme.palette.text.primary, // Force dark text on new light background in dark mode
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
        gap: '12px', // Added gap for mobile
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
        padding: '24px', // Tighter padding on mobile
        border: theme.palette.mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.25)' : '1px solid #D2D2D7',
        borderRadius: '24px', // Scaled border radius
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
        backdropFilter: theme.palette.mode === 'dark' ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: theme.palette.mode === 'dark' ? 'blur(24px)' : 'none',
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.25)' : '#F9F9FB',
            boxShadow: theme.palette.mode === 'dark' ? '0 0 30px rgba(6, 182, 212, 0.3)' : 'none',
        },
        [theme.breakpoints.up('md')]: {
            padding: '32px',
            borderRadius: '30px',
        }
    },
    statValue: {
        fontSize: '32px',
        fontWeight: 700,
        lineHeight: '1',
        marginBottom: '8px',
        color: theme.palette.mode === 'dark' ? '#111827' : theme.palette.text.primary, // Force dark text
        fontFamily: theme.typography.h1.fontFamily,
        [theme.breakpoints.up('md')]: {
            fontSize: '48px',
        }
    },
    statLabel: {
        fontSize: '12px',
        fontWeight: 700,
        color: theme.palette.mode === 'dark' ? '#4B5563' : theme.palette.text.primary, // Dark gray for readability
        textTransform: 'uppercase',
        letterSpacing: '0.05em', // Reduced from 0.1em
        lineHeight: '1.4',
        fontFamily: theme.typography.body1.fontFamily,
    }
}));
