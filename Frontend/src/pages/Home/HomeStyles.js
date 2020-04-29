import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    greetingDiv: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/HW-081616-D-07.jpg')`,
        minHeight: '50em',
        width: 'auto',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingBottom: '5em'
    },
    spinnerDiv: {
        justifyContent: 'center',
        display: 'flex',
        backgroundColor: theme.colors.nonTextWhite,
        height: '100%',
        width: '100%'
    },
    mainDivStyle: {
        height: '100%'
    },
    greetingHeaderTextStyle: {
        fontFamily: 'Avenir-Bold',
        color: theme.colors.textWhite,
        width: '40%',
        textAlign: 'center'
    },
    greetingSubtitleTextStyle: {
        fontFamily: 'Avenir-Medium',
        color: theme.colors.textWhite,
        width: '40%',
        textAlign: 'center'
    },
    buttonsDivStyle: {
        display: 'flex',
        width: '50%',
        justifyContent: 'space-between'
    },
    learnMoreButtonStyle: {
        color: theme.colors.textWhite,
        backgroundColor: theme.colors.vranaRed,
        height: '5em',
        width: '15em',
        borderRadius: 10,
        fontFamily: 'Avenir-Bold',
        opacity: .77,
        borderColor: theme.colors.nonTextWhite,
        borderWidth: '1pt',
        borderStyle: 'solid',
    },
    greyButtonStyle: {
        color: theme.colors.textWhite,
        backgroundColor: theme.colors.darkGrey,
        height: '5em',
        width: '15em',
        borderRadius: 10,
        fontFamily: 'Avenir-Bold',
        borderColor: theme.colors.nonTextWhite,
        borderWidth: '1pt',
        borderStyle: 'solid',
        opacity: .77
    },
    offerContainerStyle: {
        marginTop: '2em'
    },
    whiteTitleTextStyle: {
        color: theme.colors.textWhite,
        fontFamily: 'Avenir-Medium',
        width: '100%',
        textAlign: 'center'
    },
    containerGreyStyle: {
        backgroundColor: theme.colors.darkGrey,
        width: '100%',
        paddingBottom: '2em'
    },
    projectsImageStyle: {
        minWidth: '105%',
        minHeight: '105%'
    },
    greyContainerStyle: {
        backgroundColor: theme.colors.lightGrey,
        width: '100%',
        paddingBottom: '2em'
    },
    ourReasonContainerStyle: {
        paddingLeft: '8em'
    },
    greyBoldTitle: {
        color: theme.colors.darkGrey,
        fontFamily: 'Avenir-Medium',
        width: '100%',
    },
    redSubtitleTextNoAlignStyle: {
        color: theme.colors.vranaRed,
        width: '100%',
        fontFamily: 'Avenir-Medium',
        marginTop: '3em'
    },
    ourReasonIconsStyle: {
        height: '10%',
        width: '10%',
        marginRight: '10%'
    },
    ourReasonDiv: {
        display: 'flex',
        flexDirection: 'row'
    },
    ourReasonHeaderStyle: {
        color: theme.colors.darkGrey,
        fontFamily: 'Avenir-Medium'
    },
    ourReasonDescStyle: {
        color: theme.colors.darkGrey,
        fontFamily: 'Avenir',
    },
    ourReasonGridStyle: {
        maxWidth: '100%',
        paddingTop: '3em'
    },
    ourReasonImagestyle: {
        borderRadius: 10,
        marginTop: '8em'
    },
    lightWhiteContainerStyle: {
        backgroundColor: theme.colors.nonTextWhite,
        width: '100%',
        paddingBottom: '8em'
    },
    newsArticleTitleStyle: {
        fontFamily: 'Avenir-Bold'
    },
    articleItalicizeStyle: {
        fontFamily: 'Avenir-Italicize'
    },
    articleDateStyle: {
        fontFamily: 'Avenir'
    },
    streckLogoStyle: {
        height: 'auto',
        width: '70%'
    },
    omahaSteaksLogoStyle: {
        width: '70%',
        height: 'auto'
    },
    gridBottomPaddingStyle: {
        paddingBottom: '3em'
    },
    netSportsLogoStyle: {
        height: 'auto',
        width: '80%',
        paddingTop: '3em'
    },
    rotellasLogoStyle: {
        height: 'auto',
        width: '60%',
        paddingTop: '2em'
    },
    omaLogoStyle: {
        height: 'auto',
        width: '50%'
    },
    omahaNorthSchoolLogoStyle: {
        height: 'auto',
        width: '50%'
    },
    ourProjectsContainerStyle: {
        overflow: 'hidden'
    }
}));