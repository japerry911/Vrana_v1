import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    headerDiv: {
        backgroundImage: props => `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${props.imageUrl})`,
        minHeight: '30em',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundPosition: '0 62%'
    },
    headerTextStyle: {
        color: theme.colors.textWhite,
        fontFamily: 'Avenir-Bold'
    },
}));