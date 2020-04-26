import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    paperStyle: {
        backgroundColor: theme.colors.nonTextWhite,
        width: '30vh',
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
    },
    newsImageStyle: {
        borderRadius: 10,
        width: '30vh',
        height: '30vh',
        objectFit: 'cover'
    },
    linkStyle: {
        cursor: 'pointer'
    }
}));