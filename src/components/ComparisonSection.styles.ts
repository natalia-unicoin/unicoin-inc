import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: '60px',
        paddingBottom: '60px',
        backgroundColor: '#E6E8EB', // Apple Light Gray background
        color: '#0E1A2B',
        [theme.breakpoints.up('md')]: {
            paddingTop: '100px',
            paddingBottom: '100px',
        }
    },
    container: {
        maxWidth: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '20px',
        paddingRight: '20px',
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '150px',
            paddingRight: '150px',
        }
    },
    header: {
        textAlign: 'center',
        marginBottom: '60px',
    },
    title: {
        fontSize: '32px',
        lineHeight: '36px',
        fontWeight: 600,
        letterSpacing: '-0.03em',
        marginBottom: theme.spacing(2),
        fontFamily: theme.typography.h2.fontFamily,
        [theme.breakpoints.up('md')]: {
            fontSize: '48px',
            lineHeight: '52px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '64px',
            lineHeight: '68px',
        }
    },
    subtitle: {
        maxWidth: '800px',
        margin: '0 auto',
        fontSize: '17px',
        lineHeight: '25px',
        color: '#86868B', // Apple Gray Text
        [theme.breakpoints.up('md')]: {
            fontSize: '21px',
            lineHeight: '31px',
        }
    },
    cardsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            alignItems: 'stretch',
            gap: theme.spacing(4),
        }
    },
    traditionalCard: {
        flex: 1,
        backgroundColor: '#E5E5EA', // Very dim gray to imply older tech
        borderRadius: '32px',
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        opacity: 0.8,
        transition: 'opacity 0.3s ease',
        cursor: 'default',
        '&:hover': {
            opacity: 1,
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
        }
    },
    brandCard: {
        flex: 1,
        backgroundColor: '#FAFBFC',
        borderRadius: '32px',
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
        border: `1px solid ${theme.palette.grey[200]}`,
        position: 'relative',
        cursor: 'default',
        transform: 'translateY(0)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '10%',
            right: '10%',
            height: '4px',
            backgroundColor: '#FCD144', // Brand yellow accent on top
            borderBottomLeftRadius: '4px',
            borderBottomRightRadius: '4px',
        },
        '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
        }
    },
    cardHeader: {
        borderBottom: '1px solid #D1D1D6',
        paddingBottom: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    cardHeaderBrand: {
        borderBottom: '1px solid #E5E5EA',
        paddingBottom: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    cardTitle: {
        fontSize: '24px',
        fontWeight: 600,
        color: '#86868B', // Muted
        fontFamily: theme.typography.h2.fontFamily,
    },
    cardTitleBrand: {
        fontSize: '28px',
        fontWeight: 700,
        color: '#0E1A2B', // High contrast
        fontFamily: theme.typography.h2.fontFamily,
    },
    featureList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(4),
    },
    featureItem: {
        display: 'flex',
        flexDirection: 'column',
    },
    featureLabel: {
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        fontWeight: 700,
        color: '#86868B',
        marginBottom: '4px',
    },
    featureLabelBrand: {
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        fontWeight: 700,
        color: '#0E1A2B',
        marginBottom: '4px',
    },
    traditionalValue: {
        fontSize: '18px',
        color: '#0E1A2B',
        fontWeight: 400,
        lineHeight: 1.4,
    },
    brandValue: {
        fontSize: '20px', // Slightly larger to emphasize
        color: '#0E1A2B',
        fontWeight: 600, // Bolder
        lineHeight: 1.4,
    }
}));
