import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    redSubtitleTextStyle: {
        color: theme.colors.vranaRed,
        width: '100%',
        fontFamily: 'Avenir-Medium',
        textAlign: 'center',
        marginTop: '3em'
    },
    greyTitleTextStyle: {
        color: props => props.headerTextColor === 'dark' ? theme.colors.darkGrey : theme.colors.textWhite,
        fontFamily: 'Avenir-Medium',
        width: '100%',
        textAlign: 'center'
    }
}));