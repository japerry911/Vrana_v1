import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    imageStyle: {
        width: 'auto',
        height: '5em',
        paddingTop: '1em',
        paddingBottom: '1em'
    },
    appBarStyle: {
        backgroundColor: theme.colors.darkGrey,
    }, 
    divGrowStyle: {
        flexGrow: 1
    },
    iconDivStyle: {
        marginLeft: '1em'
    },
    iconButtonStyle: {
        color: theme.colors.textWhite,
        '&:hover': {
            backgroundColor: theme.colors.vranaRed
        }
    },
    pageTitleStyle: {
        color: theme.colors.textWhite
    }
}));