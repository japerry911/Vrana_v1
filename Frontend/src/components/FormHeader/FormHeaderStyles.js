import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    headerFontStyle: {
        color: theme.colors.darkGrey,
        fontFamily: 'Avenir-Medium'
    },
    gridItemStyle: {
        paddingTop: '3em'
    }
})); 