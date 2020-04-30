import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    whiteContainerStyle: {
        backgroundColor: theme.colors.nonTextWhite,
        paddingBottom: '5rem',
        paddingTop: '2rem'
    },
    greyContainerStyle: {
        backgroundColor: theme.colors.darkGrey,
        paddingBottom: '5rem'
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
        paddingRight: '5%', [theme.breakpoints.down('sm')]: { maxWidth: '90%' }
    },
    safetyHeaderDivStyle: {
        paddingBottom: '3%'
    },
    safetyDescStyle: {
        fontFamily: 'Avenir',
        color: theme.colors.darkGrey
    },
    safeSiteImageStyle: {
        marginLeft: '2rem',
        marginTop: '2rem',
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
        height: '5rem',
        width: '15rem',
        borderRadius: 10,
        fontFamily: 'Avenir-Bold',
        borderColor: theme.colors.nonTextWhite,
        borderWidth: '1pt',
        borderStyle: 'solid',
        opacity: .90, [theme.breakpoints.down('sm')]: { width: '8rem', height: '3rem' }
    },
    buttonDivStyle: {
        display: 'flex',
        justifyContent: 'center'
    },
    ourPrinciplesContainerStyle: {
        paddingLeft: '8rem'
    },
    ourPrinciplesIconsStyle: {
        height: '10%',
        width: '10%', 
        marginRight: '10%', [theme.breakpoints.down('sm')]: { height: '15%', width: '15%' }
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
        paddingTop: '3rem',
        paddingLeft: '3rem', [theme.breakpoints.down('sm')]: { paddingLeft: '1rem', maxWidth: '90%' }
    },
    ourPrinciplesImageStyle: {
        borderRadius: 10,
        marginTop: '8rem',
        height: '30rem',
        width: 'auto', [theme.breakpoints.down('sm')]: { height: '15rem', marginTop: '2rem' }
    }
}));