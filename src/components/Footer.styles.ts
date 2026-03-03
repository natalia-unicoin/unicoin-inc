import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    footer: {
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(11, 17, 32, 0.6)' : theme.palette.background.paper,
        backdropFilter: theme.palette.mode === 'dark' ? 'blur(20px)' : 'none',
        color: theme.palette.text.primary,
        paddingTop: theme.spacing(10), // py-20 (approx 80px)
        paddingBottom: theme.spacing(10),
        borderTop: theme.palette.mode === 'dark' ? '1px solid rgba(255,255,255,0.1)' : `1px solid ${theme.palette.grey[100]}`,
    },
    container: {
        maxWidth: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: theme.spacing(3), // px-6
        paddingRight: theme.spacing(3),
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '150px',
            paddingRight: '150px',
        }
    },
    mainGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        gap: theme.spacing(6),
        marginBottom: theme.spacing(10),
        [theme.breakpoints.up('sm')]: {
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        },
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
        }
    },
    brandColumn: {
        gridColumn: 'span 1 / span 1',
        [theme.breakpoints.up('md')]: {
            gridColumn: 'span 4 / span 4',
        }
    },
    logoWrapper: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1.5),
        marginBottom: theme.spacing(4), // mb-8
    },
    isotypeImage: {
        height: '40px',
        width: 'auto',
        objectFit: 'contain',
    },
    description: {
        color: theme.palette.text.secondary, // Changed from gray-500
        lineHeight: 1.625, // leading-relaxed
        maxWidth: '24rem', // max-w-sm
        marginBottom: theme.spacing(4), // mb-8
    },
    socialWrapper: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(3), // gap-6
    },
    socialIcon: {
        width: '48px', // w-12
        height: '48px', // h-12
        borderRadius: '50%',
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : theme.palette.grey[50], // gray-50
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.text.primary,
        transition: 'all 0.3s',
        '&:hover': {
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : theme.palette.primary.main,
            color: '#FFFFFF',
            boxShadow: theme.palette.mode === 'dark' ? '0 0 15px rgba(255,255,255,0.2)' : 'none',
        }
    },
    socialSvg: {
        transition: 'transform 0.3s',
        '&:hover': {
            transform: 'scale(1.1)',
        }
    },
    // Links Columns
    linksColumn: {
        gridColumn: 'span 1 / span 1',
        [theme.breakpoints.up('md')]: {
            gridColumn: 'span 2 / span 2',
        }
    },
    linksColumnFirst: {
        gridColumn: 'span 1 / span 1',
        [theme.breakpoints.up('md')]: {
            gridColumn: 'span 2 / span 2',
            gridColumnStart: 5, // Moved from 6
        }
    },
    linksColumnSecond: {
        gridColumn: 'span 1 / span 1',
        [theme.breakpoints.up('md')]: {
            gridColumn: 'span 2 / span 2',
            gridColumnStart: 7, // Moved from 9
        }
    },
    socialColumn: {
        gridColumn: 'span 1 / span 1',
        [theme.breakpoints.up('md')]: {
            gridColumn: 'span 3 / span 3',
            gridColumnStart: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
        }
    },
    columnTitle: {
        fontWeight: 700,
        marginBottom: theme.spacing(3), // mb-6
    },
    linkList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2), // space-y-4
        color: theme.palette.text.secondary, // Changed from gray-500
    },
    linkItem: {
        color: 'inherit',
        textDecoration: 'none',
        transition: 'color 0.2s',
        '&:hover': {
            color: theme.palette.text.primary,
        }
    },
    // Bottom Bar
    bottomBar: {
        paddingTop: theme.spacing(4), // pt-8
        borderTop: `1px solid ${theme.palette.grey[100]}`,
    },
    tagline: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.spacing(6),
        gap: theme.spacing(3),
        fontSize: '10px', // text-[10px]
        fontWeight: 700,
        letterSpacing: '0.2em', // tracking-[0.2em]
        textTransform: 'none',
        color: theme.palette.grey[400], // gray-400
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            fontSize: '0.75rem', // md:text-xs
        }
    },
    separator: {
        display: 'none',
        color: theme.palette.grey[300],
        [theme.breakpoints.up('md')]: {
            display: 'block',
        }
    },
    legalLinksBar: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: theme.spacing(2),
        marginTop: 0,
        [theme.breakpoints.up('md')]: {
            gap: theme.spacing(3),
        }
    },
    bottomLegalLink: {
        color: theme.palette.grey[500],
        fontSize: '0.75rem', // 12px
        textDecoration: 'none',
        transition: 'color 0.2s',
        '&:hover': {
            color: theme.palette.primary.main,
        }
    },
    legalSeparator: {
        color: theme.palette.grey[300],
        fontSize: '0.75rem',
    },
    copyright: {
        marginTop: theme.spacing(8),
        display: 'flex',
        justifyContent: 'center',
        fontSize: '0.75rem',
        color: theme.palette.grey[400],
    },
    copyrightBrand: {
        whiteSpace: 'nowrap',
        fontWeight: 700,
    }
}));
