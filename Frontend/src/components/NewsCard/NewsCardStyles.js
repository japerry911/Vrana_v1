import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    paperStyle: {
        backgroundColor: theme.colors.nonTextWhite,
        width: '60%',
        height: '30em',
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
        width: '100%',
        height: '15em',
        objectFit: 'cover'
    },
    linkStyle: {
        cursor: 'pointer'
    },
    cardTextDivStyle: {
        textAlign: 'center',
        height: '13em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
}));