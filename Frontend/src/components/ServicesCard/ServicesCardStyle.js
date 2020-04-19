import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    snapshotImageStyle: {
        borderRadius: 10
    },
    medGreyHeaderStyle: {
        fontFamily: 'Avenir-Medium',
        color: theme.colors.darkGrey,
        paddingTop: '1em'
    },
    darkGreyBodyStyle: {
        fontFamily: 'Avenir',
        color: theme.colors.darkGrey
    },
    redBodyStyle: {
        fontFamily: 'Avenir-medium',
        color: theme.colors.vranaRed
    },
    cardTextDivStyle: {
        width: '50%', 
        textAlign: 'left'
    }
}));