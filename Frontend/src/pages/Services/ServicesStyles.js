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
    whiteContainerStyle: {
        backgroundColor: theme.colors.nonTextWhite,
        paddingBottom: '5em',
        paddingTop: '2em'
    },
    gridRightItemCardStyle: {        
        marginTop: '3em',
        paddingLeft: '5em'
    },
    gridLeftItemCardStyle: {
        marginTop: '3em',
        paddingRight: '5em'
    },
    darkGreyTitleStyle: {
        color: theme.colors.darkGrey,
        fontFamily: 'Avenir-Medium'
    },
    gridTopPaddingStyle: {
        paddingTop: '2em'
    }
}));