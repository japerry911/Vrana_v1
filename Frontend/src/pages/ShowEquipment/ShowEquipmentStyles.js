import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    spinnerDiv: {
        justifyContent: 'center',
        display: 'flex',
        backgroundColor: theme.colors.nonTextWhite,
        height: '100%',
        width: '100%'
    },
    mainDivStyle: {
        backgroundColor: theme.colors.nonTextWhite,
        height: '100%'
    },
    whiteContainerStyle: {
        width: '90%',
        backgroundColor: theme.colors.nonTextWhite,
        paddingLeft: '3em',
        paddingTop: '2em',
        paddingBottom: '2em', [theme.breakpoints.down('sm')]: { paddingLeft: '1rem' }
    },
    darkGreyHeaderTextStyle: {
        color: theme.colors.darkGrey,
        fontFamily: 'Avenir-Bold'
    },
    vranaRedHeaderTextStyle: {
        color: theme.colors.vranaRed,
        fontFamily: 'Avenir-Bold',
        paddingBottom: '1em',
        paddingTop: '3em'
    },
    boldSpacingStyle: {
        fontFamily: 'Avenir-Bold',
        paddingTop: '1em'
    },
    avenirRegStyle: {
        fontFamily: 'Avenir'
    },
    imageStyle: {
        height: 'auto',
        width: '50%',
        borderRadius: 10,
        marginBottom: '3em',
        marginTop: '3em', [theme.breakpoints.down('md')]: { width: '70%' }
    }
}));