import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    textFieldStyle: {
        width: '70%'
    },
    gridItemStyle: {
        paddingTop: props => props.paddingTop ? props.paddingTop : '3em'
    }
}));