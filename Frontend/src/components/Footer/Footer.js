import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './FooterStyles';

const Footer = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.greyContainerStyle} align='center' justify='flex-end'>
            <Grid container item xs={12} sm={12} md={4} lg={4} xl={4} direction='column'>
                <Typography variant='h6' className={classes.whiteHeaderText}>
                    CONTACT US
                </Typography>
                <Typography variant='body2' className={classes.whiteDescText}>
                    4816 F Street Omaha, NE 68117
                </Typography>
                <Typography variant='body2' className={classes.whiteDescText}>
                    Phone: (402) 733-5200
                </Typography>
                <Typography variant='body2' className={classes.whiteDescText}>
                    Email: info@vrana.com
                </Typography>
                <Typography variant='body2' className={classes.whiteDescText}>
                    Fax: (402) 733-5203
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <a href='/'>
                    <img 
                        alt='Vrana logo'
                        src='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/VRANA+Logo_Long+V1.png'
                        className={classes.vranaLogoStyle}
                    />
                </a>
            </Grid>
            <Grid container item xs={12} sm={12} md={4} lg={4} xl={4} direction='column'>
                <Typography variant='h6' className={classes.whiteHeaderText}>
                    RESOURCES
                </Typography>
                <Typography variant='body2' className={classes.whiteDescText}>
                    Vrana Plan Room
                </Typography>
                <Typography variant='body2' className={classes.whiteDescText}>
                    Bidding Opportunities
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Footer;