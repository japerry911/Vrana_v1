import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    whiteContainerStyle: {
        backgroundColor: theme.colors.nonTextWhite,
        paddingBottom: '3em'
    },
    gridRightItemCardStyle: {        
        marginTop: '3em',
        paddingLeft: '5em'
    },
    gridLeftItemCardStyle: {
        marginTop: '3em',
        paddingRight: '5em'
    }
}));