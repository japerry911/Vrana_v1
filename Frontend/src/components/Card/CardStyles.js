import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    snapshotImageStyle: {
        borderRadius: 10,
        height: '35vh',
        width: '50%',
        objectFit: 'cover', [theme.breakpoints.down('md')]: { height: '20vh', width: '55%' }
    },
    medGreyHeaderStyle: {
        fontFamily: 'Avenir-Medium',
        color: theme.colors.darkGrey,
        paddingTop: '1rem',
        width: '50%',
        fontSize: '1.125rem', [theme.breakpoints.down('sm')]: { fontSize: '1rem' }
    },
    darkGreyBodyStyle: {
        fontFamily: 'Avenir',
        color: theme.colors.darkGrey,
        fontSize: '1rem', [theme.breakpoints.down('sm')]: { fontSize: '.75rem' },
        paddingRight: '20%',
        paddingLeft: '20%'
    },
    redBodyStyle: {
        fontFamily: 'Avenir-medium',
        color: theme.colors.vranaRed,
        fontSize: '1rem', [theme.breakpoints.down('sm')]: { fontSize: '.75rem' },
        textAlign: 'center'
    },
    cardTextDivStyle: {
        width: '100%'
    },
    linkStyle: {
        textDecoration: 'none',
        color: theme.colors.darkGrey
    },
    mainDivStyle: {
        marginBottom: '3rem',
        marginTop: '3rem'
    }
}));