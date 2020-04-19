import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    snapshotImageStyle: {
        borderRadius: 10,
        width: '50%'
    },
    medGreyHeaderStyle: {
        fontFamily: 'Avenir-Medium',
        color: theme.colors.darkGrey,
        paddingTop: '1em',
        textAlign: props => props.headerAlign ? props.headerAlign : 'left',
        width: '50%'
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