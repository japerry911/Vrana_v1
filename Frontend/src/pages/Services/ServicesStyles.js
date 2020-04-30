import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    redHeaderTextStyle: {
        fontFamily: 'Avenir-Bold',
        color: theme.colors.vranaRed,
        display: 'inline'
    },
    darkGreyHeaderStyle: {
        fontFamily: 'Avenir-Bold',
        color: theme.colors.darkGrey
    },
    whiteContainerPaddingStyle: {
        backgroundColor: theme.colors.nonTextWhite,
        paddingBottom: '3em',
        paddingTop: '2em'
    },
    whiteContainerStyle: {
        backgroundColor: theme.colors.nonTextWhite
    },
    darkGreyTitleStyle: {
        color: theme.colors.darkGrey,
        fontFamily: 'Avenir-Medium'
    },
    gridTopPaddingStyle: {
        paddingTop: '2em'
    }
}));