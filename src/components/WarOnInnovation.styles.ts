import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
    const isYellowBg = theme.palette.info.main === '#FCD144';
    const textColor = theme.palette.mode === 'dark' ? '#FFFFFF' : (isYellowBg ? '#10141E' : '#FFFFFF');
    const textAlpha80 = theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : (isYellowBg ? 'rgba(16, 20, 30, 0.8)' : 'rgba(255, 255, 255, 0.8)');
    const textAlpha90 = theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.9)' : (isYellowBg ? 'rgba(16, 20, 30, 0.9)' : 'rgba(255, 255, 255, 0.9)');
    const accentColor = theme.palette.mode === 'dark' ? theme.palette.secondary.main : (isYellowBg ? theme.palette.primary.main : theme.palette.secondary.main);

    return {
        section: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
            backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : theme.palette.info.main,
            color: textColor,
            position: 'relative',
            overflow: 'hidden',
            minHeight: '300vh', // Massive height for very slow paced reading
            display: 'flex',
            flexDirection: 'column',
            [theme.breakpoints.up('lg')]: {
                paddingTop: '160px',
                paddingBottom: '160px',
                minHeight: '400vh', // Extreme scroll timeline to hold text
            }
        },
        container: {
            maxWidth: '100%',
            margin: '0 auto',
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
            position: 'relative',
            zIndex: 10,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            [theme.breakpoints.up('lg')]: {
                paddingLeft: '150px',
                paddingRight: '150px',
            }
        },
        title: {
            fontFamily: theme.typography.h1.fontFamily,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            marginBottom: theme.spacing(16), // More space before the sticky statements
            lineHeight: 1.1,
            textAlign: 'center',
            fontSize: '20px',
            textTransform: 'uppercase',
            color: textAlpha80,
            position: 'relative', // REMOVED STICKY: This was the main cause of the overlap
            zIndex: 20,
            [theme.breakpoints.up('md')]: {
                fontSize: '28px',
                marginBottom: theme.spacing(24),
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: '32px',
            }
        },
        contentWrapper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative',
            flex: 1, // Take up remaining space
            width: '100%',
        },
        statementContainer: {
            position: 'sticky',
            top: '25vh', // Lock in upper middle of screen
            width: '100%',
            zIndex: 15,
            display: 'flex',
            justifyContent: 'center',
        },
        supportContainer: {
            position: 'sticky',
            top: '45vh', // Lower down to avoid the massive text above
            width: '100%',
            zIndex: 16,
            display: 'flex',
            justifyContent: 'center',
        },
        statement: {
            fontSize: '1.75rem',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            padding: '0 10px',
            [theme.breakpoints.up('md')]: {
                fontSize: '4rem',
                padding: 0,
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: '5rem', // Cinematic size
            }
        },
        accent: {
            color: accentColor, // Dynamic Highlight color
        },
        supportingText: {
            fontSize: '1rem',
            lineHeight: 1.6,
            color: textAlpha90, // Improved contrast
            fontWeight: 400,
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 10px',
            [theme.breakpoints.up('md')]: {
                fontSize: '1.5rem',
                lineHeight: 1.7,
                padding: 0,
            }
        },
        metricGrid: {
            position: 'sticky',
            top: '55vh', // Safely below the support text
            zIndex: 17,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: theme.spacing(8),
            width: '100%',
            backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : theme.palette.info.main, // Transparent for mesh
            padding: '40px 0',
            [theme.breakpoints.up('md')]: {
                flexDirection: 'row',
                gap: theme.spacing(16),
            }
        },
        metricItem: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        metricDivider: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'block',
                width: '1px',
                height: '100px',
                backgroundColor: 'rgba(250, 251, 252, 0.2)',
            }
        },
        metricValue: {
            fontSize: '2.5rem', // Scaled down further for mobile stack
            fontWeight: 700,
            color: textColor,
            lineHeight: 1,
            letterSpacing: '-0.04em',
            [theme.breakpoints.up('md')]: {
                fontSize: '6rem',
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: '7rem',
            }
        },
        metricLabel: {
            fontSize: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: accentColor, // Accent for labels
            marginTop: theme.spacing(3),
            fontWeight: 600,
        }
    };
});
