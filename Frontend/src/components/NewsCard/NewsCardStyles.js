import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    paperStyle: {
        backgroundColor: theme.colors.nonTextWhite,
        width: '70%',
        overflow: 'hidden',
        paddingBottom: '1em'
    },
    newsArticleTitleStyle: {
        fontFamily: 'Avenir-Bold'
    },
    articleItalicizeStyle: {
        fontFamily: 'Avenir-Italicize'
    },
    articleDateStyle: {
        fontFamily: 'Avenir'
    }
}));