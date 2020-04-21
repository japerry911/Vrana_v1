import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    spinnerDiv: {
        justifyContent: 'center',
        display: 'flex'
    },
    whiteContainerStyle: {
        width: '100%',
        backgroundColor: theme.colors.nonTextWhite,
        paddingLeft: '3em',
        paddingTop: '2em'
    },
    darkGreyHeaderTextStyle: {
        color: theme.colors.darkGrey,
        fontFamily: 'Avenir-Bold'
    },
    vranaRedHeaderTextStyle: {
        color: theme.colors.vranaRed,
        fontFamily: 'Avenir-Bold'
    },
    boldSpacingStyle: {
        fontFamily: 'Avenir-Bold',
        paddingTop: '1em'
    },
    avenirRegStyle: {
        fontFamily: 'Avenir'
    }
}));