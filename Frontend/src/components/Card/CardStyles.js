import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    snapshotImageStyle: {
        borderRadius: 10,
        width: '30vh',
        height: '30vh', 
        objectFit: 'cover'
    },
    medGreyHeaderStyle: {
        fontFamily: 'Avenir-Medium',
        color: theme.colors.darkGrey,
        paddingTop: '1em',
        textAlign: props => props.headerAlign ? props.headerAlign : 'left',
        width: '30vh'
    },
    darkGreyBodyStyle: {
        fontFamily: 'Avenir',
        color: theme.colors.darkGrey
    },
    redBodyStyle: {
        fontFamily: 'Avenir-medium',
        color: theme.colors.vranaRed
    },
    cardTextDivStyle: {
        width: '30vh', 
        textAlign: 'left'
    },
    linkStyle: {
        textDecoration: 'none',
        color: theme.colors.darkGrey
    },
    mainDivStyle: {
        marginBottom: '3rem'
    }
}));