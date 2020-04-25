import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    whiteContainerStyle: {
        backgroundColor: theme.colors.nonTextWhite,
        paddingBottom: '5em',
        paddingTop: '2em'
    },
    redHeaderTextStyle: {
        fontFamily: 'Avenir-Bold',
        color: theme.colors.vranaRed,
        display: 'inline'
    },
    darkGreyHeaderStyle: {
        fontFamily: 'Avenir-Bold',
        color: theme.colors.darkGrey
    },
    greetingContentGridStyle: {
        maxWidth: '45%',
        paddingRight: '5%'
    },
    safetyHeaderDivStyle: {
        paddingBottom: '3%'
    },
    safetyDescStyle: {
        fontFamily: 'Avenir',
        color: theme.colors.darkGrey
    },
    safeSiteImageStyle: {
        marginLeft: '2em',
        marginTop: '2em',
        borderRadius: 10,
        height: 'auto',
        maxWidth: '75%',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    },
    buttonTextStyle: {
        color: theme.colors.nonTextWhite,
        fontFamily: 'Avenir-Bold'
    },
    buttonStyle: {
        backgroundColor: theme.colors.vranaRed,
        height: '5em',
        width: '15em',
        borderRadius: 10,
        fontFamily: 'Avenir-Bold',
        borderColor: theme.colors.nonTextWhite,
        borderWidth: '1pt',
        borderStyle: 'solid',
        opacity: .90,
    },
    buttonDivStyle: {
        display: 'flex',
        justifyContent: 'center'
    }
}));