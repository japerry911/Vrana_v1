import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    greyContainerStyle: {
        width: '100%',
        backgroundColor: theme.colors.darkGrey,
        paddingTop: '2em',
        paddingBottom: '3em',
    },
    whiteHeaderText: {
        color: theme.colors.textWhite,
        fontFamily: 'Avenir-Medium',
        textDecoration: 'none'
    },
    whiteDescText: {
        color: theme.colors.textWhite,
        fontFamily: 'Avenir'
    },
    vranaLogoStyle: {
        height: 'auto',
        width: '40%', [theme.breakpoints.down('sm')]: { paddingTop: '1rem', paddingBottom: '1rem' }
    }
}));