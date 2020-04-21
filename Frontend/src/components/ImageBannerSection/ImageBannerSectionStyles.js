import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    headerDiv: {
        backgroundImage: props => props.noOpacity ? `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url("${props.imageUrl}")`
                                                  : `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url("${props.imageUrl}")`,
        minHeight: props => props.imageHeight ? props.imageHeight : '30em',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: props => props.justify,
        alignItems: 'center',
        backgroundPosition: '0 62%',
        flexDirection: props => props.flexColumn ? 'column' : 'row'
    },
    headerTextStyle: {
        color: theme.colors.textWhite,
        fontFamily: 'Avenir-Bold',
        width: props => props.width ? props.width : 'auto'
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
    whiteText60Style: {
        fontFamily: 'Avenir-Medium',
        color: theme.colors.textWhite,
        width: '60%'
    }
}));