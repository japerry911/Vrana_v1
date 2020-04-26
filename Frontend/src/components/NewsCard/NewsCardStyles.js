import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    paperStyle: {
        backgroundColor: theme.colors.nonTextWhite,
        width: '30vh',
        height: '50vh',
        overflow: 'hidden',
        marginTop: '2em'
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
        width: '30vh',
        height: '30vh',
        objectFit: 'cover'
    },
    linkStyle: {
        cursor: 'pointer'
    },
    cardTextDivStyle: {
        textAlign: 'center',
        height: '19vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
}));