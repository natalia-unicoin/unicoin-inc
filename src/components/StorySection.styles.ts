import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(12),
        backgroundColor: '#FFFFFF',
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
            paddingLeft: '100px',
            paddingRight: '100px',
        }
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily,
        fontSize: '32px',
        fontWeight: 700,
        marginBottom: theme.spacing(6),
        letterSpacing: '-0.02em',
        [theme.breakpoints.up('md')]: {
            fontSize: '48px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '56px',
            marginBottom: theme.spacing(10),
        }
    },
    contentGrid: {
        display: 'grid',
        gridTemplateColumns: '1 - 1',
        gap: theme.spacing(4),
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: theme.spacing(8),
        },
        [theme.breakpoints.up('lg')]: {
            gap: '120px',
        }
    },
    textBlock: {
        fontSize: '1.125rem',
        lineHeight: 1.8,
        fontWeight: 300,
        color: '#333333',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.25rem',
        }
    },
    highlightRow: {
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(8),
        borderTop: '1px solid #E5E7EB',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(4),
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }
    },
    imperativeLabel: {
        fontSize: '0.875rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: '#6B7280',
    }
}));
