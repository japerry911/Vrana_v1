import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    paperStyle: {
        backgroundColor: theme.colors.nonTextWhite,
        width: '60%',
        height: '100%',
        overflow: 'hidden'
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
        height: '35vh',
        width: '100%',
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
        justifyContent: 'space-between',
        width: '75%'
    }
}));