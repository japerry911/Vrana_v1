import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    aboutUsHeaderTextStyle: {
        fontFamily: 'Avenir-Bold',
        color: theme.colors.textWhite,
        marginLeft: '10%',
        marginTop: '5%'
    },
    aboutUsGreetingContentGridStyle: {
        paddingRight: '5%',
        maxWidth: '45%', [theme.breakpoints.down('sm')]: { maxWidth: '85%' }
    },
    charlesAndTroyImageStyle: {
        paddingTop: '5%',
        paddingLeft: '8%',
        borderRadius: 10,
        height: 'auto',
        width: '80%'
    },
    blackHeaderTextStyle: {
        fontFamily: 'Avenir-Bold',
        color: theme.colors.darkGrey
    },
    redHeaderTextStyle: {
        fontFamily: 'Avenir-Bold',
        color: theme.colors.vranaRed,
        display: 'inline-block'
    },
    charIntComHeaderDivStyle: {
        paddingBottom: '3%'
    },
    aboutUsDescStyle: {
        fontFamily: 'Avenir',
        color: theme.colors.darkGrey
    },
    whiteContainerStyle: {
        backgroundColor: theme.colors.nonTextWhite,
        paddingBottom: '5em',
        paddingTop: '2em'
    },
    ourLeadershipHeaderGridStyle: {
        paddingBottom: '3em'
    },
    profileImageStyle: {
        borderRadius: 10,
        height: 400,
        width: 'auto', [theme.breakpoints.down('sm')]: { height: 300 }
    },
    profileTitleStyle: {
        color: theme.colors.darkGrey,
        fontFamily: 'Avenir-Bold'
    },
    profileDescStyle: {
        color: theme.colors.darkGrey,
        fontFamily: 'Avenir'
    }
}));