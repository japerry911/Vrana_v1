import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    imageStyle: {
        width: 'auto',
        height: '5rem', [theme.breakpoints.down('sm')]: { height: '3rem' },
        paddingTop: '1rem',
        paddingBottom: '1rem'
    },
    appBarStyle: {
        backgroundColor: theme.colors.darkGrey,
    }, 
    divGrowStyle: {
        flexGrow: 1
    },
    iconDivStyle: {
        marginLeft: '1rem'
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