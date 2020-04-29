import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    drawerStyle: {
        width: '15em',
        flexShrink: 0
    },
    drawerPaperStyle: {
        width: '15em',
        backgroundColor: theme.colors.darkGrey,
        color: theme.colors.textWhite
    },
    drawerHeaderStyle: {
        display: 'flex',
        alignItems: 'flex-start',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end'
    },
    backButtonStyle: {
        padding: 5,
        backgroundColor: theme.colors.vranaRed,
        borderRadius: 10,
        opacity: .75,
        color: theme.colors.nonTextWhite,
        marginTop: 10
    },
    listSubheaderStyle: {
        textAlign: 'center',
        fontFamily: 'Avenir-Medium',
        padding: 0,
        width: '10em',
        color: 'inherit',
        cursor: 'pointer',
        '&:hover': {
            background: theme.colors.vranaRed,
            opacity: .75
        }
    },
    listSubheaderMasterStyle: {
        textAlign: 'center',
        fontFamily: 'Avenir-Bold',
        padding: 0,
        width: '10em',
        color: 'inherit',
        cursor: 'pointer',
        '&:hover': {
            background: theme.colors.vranaRed,
            opacity: .75
        }
    },
    dividerStyle: {
        width: '10em'
    },
    listIconStyle: {
        color: theme.colors.nonTextWhite
    }
}));