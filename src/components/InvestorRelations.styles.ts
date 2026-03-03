import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        backgroundColor: theme.palette.mode === 'dark' ? '#0B1120' : '#F5F5F7', // Deep dark or light gray
        color: theme.palette.text.primary,
        padding: theme.spacing(8, 0),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(16, 0),
        }
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: theme.spacing(0, 3),
        [theme.breakpoints.up('lg')]: {
            padding: theme.spacing(0, 6),
            maxWidth: '1440px',
        }
    },
    header: {
        marginBottom: theme.spacing(6),
        textAlign: 'center',
        margin: '0 auto',
        maxWidth: '900px',
        [theme.breakpoints.up('md')]: {
            marginBottom: theme.spacing(8),
        }
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily, // Inter
        fontSize: '2.5rem',
        fontWeight: 700,
        letterSpacing: '-0.03em',
        lineHeight: 1.1,
        color: theme.palette.text.primary,
        [theme.breakpoints.up('md')]: {
            fontSize: '3.5rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '4.5rem',
        }
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
        },
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: theme.spacing(4),
        }
    },
    card: {
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(30, 41, 59, 0.4)' : theme.palette.background.paper, // Glass translucent
        border: theme.palette.mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : `1px solid ${theme.palette.grey[200]}`,
        backdropFilter: theme.palette.mode === 'dark' ? 'blur(16px) saturate(180%)' : 'none',
        WebkitBackdropFilter: theme.palette.mode === 'dark' ? 'blur(16px) saturate(180%)' : 'none',
        borderRadius: '16px',
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        minHeight: '200px',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 24px rgba(0,0,0,0.05)',
            borderColor: '#E6E8EB',
        }
    },
    cardTitle: {
        fontSize: '1.25rem',
        fontWeight: 700,
        color: theme.palette.text.primary,
        fontFamily: theme.typography.h1.fontFamily,
        lineHeight: 1.3,
        letterSpacing: '-0.01em',
        marginBottom: theme.spacing(4)
    },
    cardAction: {
        fontSize: '0.875rem',
        fontWeight: 600,
        color: theme.palette.info.main, // Action blue
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1),
        marginTop: 'auto',
        textDecoration: 'none',
        '&::after': {
            content: '"→"',
            transition: 'transform 0.2s',
        },
        '&:hover::after': {
            transform: 'translateX(4px)',
        }
    }
}));
