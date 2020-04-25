import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    whiteContainerStyle: {
        backgroundColor: theme.colors.nonTextWhite,
        paddingBottom: '5em',
        paddingTop: '2em'
    },
    greyContainerStyle: {
        backgroundColor: theme.colors.darkGrey,
        paddingBottom: '5em'
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
    },
    ourPrinciplesContainerStyle: {
        paddingLeft: '8em'
    },
    ourPrinciplesIconsStyle: {
        height: '10%',
        width: '10%',
        marginRight: '10%'
    },
    ourPrinciplesDiv: {
        display: 'flex',
        flexDirection: 'row'
    },
    ourPrinciplesHeaderStyle: {
        color: theme.colors.textWhite,
        fontFamily: 'Avenir-Medium'
    },
    ourPrinciplesDescStyle: {
        color: theme.colors.textWhite,
        fontFamily: 'Avenir',
    },
    ourPrinciplesGridStyle: {
        maxWidth: '100%',
        paddingTop: '3em',
        paddingLeft: '3em'
    },
    ourPrinciplesImageStyle: {
        borderRadius: 10,
        marginTop: '8em',
        height: '30em',
        width: 'auto'
    }
}));