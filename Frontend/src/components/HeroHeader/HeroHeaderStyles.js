import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    headerDiv: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/HW-081616-D-07.jpg')`,
        minHeight: '10em',
        width: '100%',
        backgroundSize: 'cover',
        paddingBottom: '5em',
        backgroundPosition: '0 33%',
        alignItems: 'center',
        display: 'flex'
    },
    headerTextStyle: {
        fontFamily: 'Avenir-Bold',
        color: theme.colors.textWhite,
        marginLeft: '10%',
        marginTop: '2em'
    }
}));