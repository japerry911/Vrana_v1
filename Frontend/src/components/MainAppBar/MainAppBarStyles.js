import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    appBarStyle: {
        backgroundColor: theme.colors.darkGrey,
        paddingBottom: 10,
        paddingTop: 10
    },
    toolbarStyle: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    pageTitleStyle: {
        marginRight: '3em',
        fontFamily: theme.fonts.avenirMedium
    },
    iconButtonStyle: {
        padding: 5,
        backgroundColor: theme.colors.vranaRed,
        borderRadius: 10,
        opacity: .75,
        color: theme.colors.nonTextWhite
    },
    imageStyle: {
        width: 'auto',
        height: '5em'
    }
}));