import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: '100%',
        width: '100%',
        backgroundColor: theme.colors.nonTextWhite
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        height: '100%',
        width: '15%'
    }
}));