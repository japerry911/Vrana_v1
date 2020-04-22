import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    formTextFieldStyle: {
        maxWidth: '70%',
        minWidth: '70%'
    },
    gridItemStyle: {
        paddingTop: '3em'
    },
    fieldLabelStyle: {
        color: theme.colors.darkGrey,
        fontFamily: 'Avenir-Medium'
    }
}));