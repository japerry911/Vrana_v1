import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './FooterStyles';

const Footer = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.greyContainerStyle} align='center'>
            <Grid container item xs={4} sm={4} md={4} lg={4} xl={4} direction='column'>
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
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <img 
                    alt='Vrana logo'
                    src='https://lh3.googleusercontent.com/HNoSmx6mXB4EW0WGqJcwa28mzTRztdSrvLak0k1dylHyFz4mQSx8F4fWqfloQicE2BNeHRml3q5ilSrVt-SbJy0Llcc1570MYA7rmWIctIrtJHovRsPfDfgEyuLHoDMyeBdCNdMKpmRldcedCJTSyhSubWVRjUpNbu0wjbw-hh90DEPpRFCAVOQy__uLKIfvuKsJwYA1iHln8HpNPnowPClfwcmT1lqSvKiNhecFU_M4TvR0x4NePWkKUo911zNDtffu37Fu7cN_J5G6XKvHMXQ1EnSMuqHHyJVvvhlkJAiV1HxTcEptuZ463YtDGhVaWudvws7uy0aWk-najBJHqBEbaq2ChqfGtkpicU5HLQ0ns-2Lo5-LNkQFAj1HpFexG1bd9kts--QD0Uh9_uVbJ7vNSBO-BCCI-GkkNGMrkJpmZ8hgCo3hTF4RzJtphtxLySw3KxlyUW3Hk2N7zdADewfVpA1UEvGgu8Bxnhdij2Zg-MeVDHs72Y07KZXqbe1-8vpEuJo5HuSmwRpHO-ldeEKNS6GDlD9ztuI3mXF17l8rck--M0LTBtIGbeAwNqcihDMGr6HPsN7q_1bM_OSfc7fhgBrLL3csu1uvSrDemyz7uqP5OCiDZCPhxg3BA5u-Hf8jWzFjlhZiGa4fSOUzBqkOVeWqSaMrXACA0nJaM9qKWCCHkWn_DABV-4sH8g=w988-h396-no'
                    className={classes.vranaLogoStyle}
                />
            </Grid>
            <Grid container item xs={4} sm={4} md={4} lg={4} xl={4} direction='column'>
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