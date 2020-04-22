import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    gridItemStyle: {
        paddingTop: '3em'
    },
    imageUploaderStyle: {
        width: '70%'
    },
    labelStyle: {
        color: theme.colors.darkGrey,
        fontFamily: 'Avenir-Medium',
        paddingBottom: '1em'
    }
}));