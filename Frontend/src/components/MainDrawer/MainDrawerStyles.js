import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    drawerStyle: {
        width: '15em',
        flexShrink: 0
    },
    drawerPaperStyle: {
        width: '15em',
        backgroundColor: theme.colors.darkGrey,
        color: theme.colors.textWhite
    },
    drawerHeaderStyle: {
        display: 'flex',
        alignItems: 'flex-start',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end'
    },
    backButtonStyle: {
        padding: 5,
        backgroundColor: theme.colors.vranaRed,
        borderRadius: 10,
        opacity: .75,
        color: theme.colors.nonTextWhite,
        marginTop: 10
    }
}));