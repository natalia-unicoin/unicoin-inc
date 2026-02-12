import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: theme.spacing(6), // py-12
        paddingBottom: theme.spacing(6),
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        overflow: 'hidden',
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(10), // py-20
            paddingBottom: theme.spacing(10),
        }
    },
    container: {
        maxWidth: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '100px',
            paddingRight: '100px',
        }
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily, // Montserrat
        fontWeight: 700,
        letterSpacing: '-0.03em',
        marginBottom: theme.spacing(2),
        textAlign: 'center',
        fontSize: '40px',
        lineHeight: '50px',
        [theme.breakpoints.up('md')]: {
            fontSize: '56px',
            lineHeight: '66px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '64px',
            lineHeight: '74px',
        }
    },
    highlight: {
        color: theme.palette.secondary.main, // #fcd144
        fontSize: '40px',
        display: 'block', // To put it on a new line if needed
        [theme.breakpoints.up('md')]: {
            fontSize: '56px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '64px',
        }
    },
    subtitle: {
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 40px auto',
        fontSize: '17px', // Apple body
        lineHeight: '25px',
        color: '#6E6E73', // Apple medium gray
    },
    // Grid/Scroll Container
    scrollContainer: {
        display: 'flex',
        gap: theme.spacing(2),
        overflowX: 'auto',
        scrollSnapType: 'x mandatory',
        paddingBottom: theme.spacing(4),
        marginLeft: theme.spacing(-2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        [theme.breakpoints.up('md')]: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: '15px', // Reduced gap
            overflow: 'visible',
            scrollSnapType: 'none',
            paddingBottom: 0,
            margin: 0,
            padding: 0,
        },
        [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: '15px', // Reduced gap
        }
    },
    cardWrapper: {
        display: 'block',
        minWidth: '85vw',
        scrollSnapAlign: 'center',
        [theme.breakpoints.up('md')]: {
            minWidth: 0,
        }
    },
    cardInner: {
        position: 'relative',
        height: '420px', // Shorter
        width: '100%',
        cursor: 'pointer',
        perspective: '1000px',
        [theme.breakpoints.up('md')]: {
            height: '480px', // Shorter
        }
    },
    cardFlipper: {
        position: 'relative',
        width: '100%',
        height: '100%',
        transition: 'transform 0.7s',
        transformStyle: 'preserve-3d', // preserve-3d
    },
    cardFront: {
        position: 'absolute',
        inset: 0,
        backfaceVisibility: 'hidden', // backface-hidden
        borderRadius: '24px', // More square
        overflow: 'hidden',
        boxShadow: theme.shadows[4], // shadow-lg
        backgroundColor: theme.palette.grey[50],
    },
    cardImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.7s',
    },
    overlay: {
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Darker by default for readability
        transition: 'background-color 0.3s',
    },
    stepIdLarge: {
        position: 'absolute',
        top: theme.spacing(2),
        right: theme.spacing(3),
        fontSize: '7rem',
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 900,
        opacity: 0.15,
        zIndex: 10,
        color: theme.palette.common.white,
        lineHeight: 1,
        pointerEvents: 'none',
        [theme.breakpoints.up('md')]: {
            fontSize: '9rem',
        }
    },
    frontTitleWrapper: {
        position: 'absolute',
        inset: 0, // Fill the whole card so title can be centered
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    frontTitle: {
        fontSize: '30px', // max 30px
        fontFamily: theme.typography.h1.fontFamily, // Switched to Montserrat for consistency
        fontWeight: 700,
        color: theme.palette.common.white,
        letterSpacing: '-0.03em',
        lineHeight: 1.1, // Adjusted for multi-line
        padding: theme.spacing(0, 2),
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        [theme.breakpoints.up('md')]: {
            fontSize: '30px',
        }
    },
    cardBack: {
        position: 'absolute',
        inset: 0,
        backfaceVisibility: 'hidden',
        transform: 'rotateY(180deg)',
        borderRadius: '24px',
        padding: theme.spacing(4, 3), // Reduced padding for more space
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: theme.palette.common.white,
        borderWidth: '2px', // border-2
        borderStyle: 'solid',
    },
    backStepId: {
        fontSize: '3.75rem', // text-6xl
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        marginBottom: theme.spacing(4), // mb-8
        opacity: 0.2,
    },
    backTitle: {
        fontSize: '30px', // max 30px
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        marginBottom: theme.spacing(3),
    },
    backDescription: {
        fontSize: '1.125rem', // slightly smaller text-lg
        color: '#000000', // Explanatory text in black
        lineHeight: 1.5,
        fontWeight: 400,
        padding: theme.spacing(0, 2),
    },
    mobileIndicators: {
        display: 'none',
    },
    indicatorDot: {
        display: 'none',
    }
}));
