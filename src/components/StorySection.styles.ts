import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(12),
        backgroundColor: '#FAFBFC',
        color: '#111111',
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
    innerFlex: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(8),
        [theme.breakpoints.up('lg')]: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: theme.spacing(12),
        }
    },
    stickyColumn: {
        flex: 1,
        [theme.breakpoints.up('lg')]: {
            position: 'sticky',
            top: '160px', /* Stays anchored near the top */
            maxWidth: '500px',
            paddingRight: theme.spacing(6),
        }
    },
    scrollColumn: {
        flex: 1.5,
        display: 'flex',
        flexDirection: 'row', // Horizontal on mobile
        gap: theme.spacing(2),
        overflowX: 'auto',
        overflowY: 'hidden',
        scrollSnapType: 'x mandatory',
        WebkitOverflowScrolling: 'touch',
        paddingBottom: theme.spacing(4),
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
            display: 'none'
        },
        [theme.breakpoints.up('lg')]: {
            flexDirection: 'column', // Back to vertical on desktop
            overflowX: 'visible',
            scrollSnapType: 'none',
            paddingBottom: '160px',
            paddingTop: '320px', // Starts low so user scrolls into it
            gap: '120px', // Massive gap on desktop
        }
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        letterSpacing: '-0.03em',
        marginBottom: theme.spacing(4),
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
        fontWeight: 700,
        color: '#0E1A2B', // Dark Navy
        lineHeight: 1.5,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem',
        }
    },
    storyBlock: {
        backgroundColor: '#E6E8EB', // Neutro Medio
        borderRadius: '32px',
        padding: '40px 24px', // Tighter padding for mobile
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '400px', // Ensures big scrolling area
        minWidth: '85vw', // Take up most of screen on mobile
        scrollSnapAlign: 'start',
        scrollMarginLeft: '20px',
        [theme.breakpoints.up('md')]: {
            padding: '60px 40px',
        },
        [theme.breakpoints.up('lg')]: {
            minWidth: 'auto', // Reset on desktop
            scrollMarginLeft: 0,
        }
    },
    chapterLabel: {
        fontSize: '0.875rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        color: '#2A4B6A', // Complementary Blue
        marginBottom: theme.spacing(3),
        display: 'block',
    },
    cardTitle: {
        fontSize: '2rem',
        fontWeight: 700,
        marginBottom: theme.spacing(3),
        letterSpacing: '-0.03em',
        color: '#0E1A2B',
        [theme.breakpoints.up('md')]: {
            fontSize: '2.5rem',
        }
    },
    cardText: {
        fontSize: '1.125rem',
        lineHeight: 1.7,
        color: '#0E1A2B',
        fontWeight: 400,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.25rem',
        }
    },
    highlightBlock: {
        backgroundColor: '#0E1A2B', // Neutro Oscuro
        color: '#FAFBFC', // Neutro Claro
    },
    imperativeLabel: {
        fontSize: '0.875rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        color: '#FCD144', // Brand Accent Yellow
        marginBottom: theme.spacing(3),
        display: 'block',
    },
    imperativeTitle: {
        fontSize: '2rem',
        fontWeight: 700,
        marginBottom: theme.spacing(3),
        letterSpacing: '-0.03em',
        color: '#FAFBFC',
        [theme.breakpoints.up('md')]: {
            fontSize: '2.5rem',
        }
    },
    imperativeDescription: {
        fontSize: '1.125rem',
        color: '#FAFBFC',
        lineHeight: 1.7,
        fontWeight: 400,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.25rem',
        }
    },
    scrollIndicator: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        marginTop: theme.spacing(2),
        [theme.breakpoints.up('lg')]: {
            display: 'none', // Hide on desktop where it's vertical
        }
    },
    dot: {
        height: '8px',
        width: '8px',
        borderRadius: '4px',
        backgroundColor: '#D1D1D6', // Light gray for inactive
        transition: 'all 0.3s ease',
    },
    activeDot: {
        width: '32px', // Elongated for active
        backgroundColor: '#0E1A2B', // Dark for active
    }
}));
