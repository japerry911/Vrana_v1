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
    },
    imageBannerGridStyle: {
        marginTop: '2em'
    },
    additionalProjectsTextStyle: {
        paddingTop: '1em'
    },
    redHightlightDivStyle: {
        fontWeight: 'bold',
        fontSize: '1.25em',
        display: 'inline',
        paddingRight: '.5em',
        color: theme.colors.vranaRed
    }
}));