import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    aboutUsHeaderDiv: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('https://lh3.googleusercontent.com/vC3363SAFXNsR-YU4OAwJejXQnt1FPJpdfaE7I9Wb1_Gu-DkgqcVC_V8daE7am40QtWlY58Pw4AM4qkn830ZBVA3DEZYiFLElDRj6NN5nXunQtb_XxtQIzjFwpmFOMk7F61Ag4dLY1fRbCnWn2o2v2Ewm0fAauLt70Y-FYmSbYOOw8bedSFI_d4PYBsGu_4D7thdVl8gjPuo6THjOXxhUWwPK1mDk-9p8DvFCyGunuWb1cNzkOZONc3MbcTtgLVjFuM8vpEn5iJ8ntisb3J7PBHP_yaVFd2pXnUC7LP0HNq6iNV-8hi6icquOCJeYa9hJdr8IJESBMygM_lhUi46yK9tCscNVbw2vI_tITkTBgpjWNl0Pylww5cLcPunaSoBUsCuisbRD1FArrgS8fIZXboxPf88xc6Jh6CMvpqYtjN3VD8Y3_Ekq5-mPz25QlvlyuaZ-BzzIOdETNzy1F59CNn4x2K426S_aF6kuLERE_EtF6em9u4LFhXFxYTT30VR02KaYskMJK7bc4jnIuocZvgMNBNCwaS-R2fG9j0mZDBkUk7GeSD3vHxKZaF8GIbFXbXWsHx_HeusjwmC192FmEWrzdcydlVW659mNXSknKVdUPIjAlN6OdLLaqnSL-TjHxgctE9ePNG5bVRre2Wyp8yjSfHI8Hn98sYbuVawjoJlzS8pAMRmK0CGYCw-OA=w864-h576-no')`,
        minHeight: '10em',
        width: '100%',
        backgroundSize: 'cover',
        paddingBottom: '5em',
        backgroundPosition: '0 33%'
    },
    aboutUsHeaderTextStyle: {
        fontFamily: 'Avenir-Bold',
        color: theme.colors.textWhite,
        marginLeft: '10%',
        marginTop: '5%'
    },
    aboutUsGreetingContentGridStyle: {
        maxWidth: '45%',
        paddingRight: '5%'
    },
    charlesAndTroyImageStyle: {
        paddingTop: '5%',
        paddingLeft: '5%',
        borderRadius: 10
    },
    blackHeaderTextStyle: {
        fontFamily: 'Avenir-Bold',
        color: theme.colors.darkGrey
    },
    redHeaderTextStyle: {
        fontFamily: 'Avenir-Bold',
        color: theme.colors.vranaRed,
        display: 'inline'
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
        width: 'auto'
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