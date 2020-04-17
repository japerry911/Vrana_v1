import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    greetingDiv: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('https://lh3.googleusercontent.com/4gK95BUovgvu5cge3KhxMJiAp_kcgbbRM1mhQxQdnZCq7RQXTwJCglzEYTN1yDAZ36mSBHr2VtD4RXLFZZ5jt47-EY0x8E_O7zy2dX_h0_YkfhQc2bDyNvZQRcbsIjvcddqAzAHYOqKmftZ8E7RfyJNVQcGY7KCxfSQR9OKUALw8BCtNdfNM1ZwW9eUjNgRTlfS41vEDJSy-eS5yPl97qgAF16FWApZ9dAtkK_q9Mz5VqVVAT44aXZticvJqskwdq1aIn3cnDmjNEXp5qKcOiJWZ6FLMoeDhJyjuo6rC0C_eKhiLiLR5PaiASfGkknB8E4MxDjq7hnSF3Z89ND0ffPE--5zv7ewKlCcgZsDA78vf6SJo6QMSJhnL3jE3wU4NDK0YeCun49Cc7eYBk7VqFMQ4Sh8kdhaLl8nkT7lxgaOhFlSJlJf38qyf_4YcUyGaiMXeKS910007ylf1TCS4dlmxNd_fE0V8VXDygCfNZO9OZ1lMaS0ABSL4dnNFrO_Tjj0O9VeIcRO85bu-k1Ma-lSubBcwiP1mLLQ-rSG2qBc8NCk6F6Gz837RxoSxFKAwfHtstxnpGV3ljLB4Z39KWIZ_vMyRbVV-yxVnIt18BnuK0ipES3eJXqJhcS6y5bRHcOm74KYV138EMqDWxNOnKL9RsPJCGjr5GNuin7BH01sCHwFI1o7E68oxq8oUJw=w864-h576-no')`,
        minHeight: '50em',
        width: 'auto',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingBottom: '5em'
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
    ourProjectsButtonStyle: {
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
    offerImageStyle: {
        height: '10em',
        maxWidth: 'auto',
        borderRadius: 10
    },
    offerExTitleStyle: {
        color: theme.colors.darkGrey,
        fontFamily: 'Avenir-Medium',
        width: '50%',
        marginTop: '1em'
    },
    offerExDescStyle: {
        color: theme.colors.darkGrey,
        fontFamily: 'Avenir',
        width: '50%'
    },
    redSubtitleTextStyle: {
        color: theme.colors.vranaRed,
        width: '100%',
        fontFamily: 'Avenir-Medium',
        textAlign: 'center',
        marginTop: '3em'
    },
    greyTitleTextStyle: {
        color: theme.colors.darkGrey,
        fontFamily: 'Avenir-Medium',
        width: '100%',
        textAlign: 'center'
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
        marginTop: '5em',
        paddingBottom: '2em'
    },
    projectsImageStyle: {
        width: '110%',
        height: '110%'
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
    newsImageStyle: {

    },
    newsArticleTitleStyle: {
        fontFamily: 'Avenir-Bold'
    },
    articleItalicizeStyle: {
        fontFamily: 'Avenir-Italicize'
    },
    articleDateStyle: {
        fontFamily: 'Avenir'
    }
}));