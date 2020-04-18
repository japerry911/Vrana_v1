import React from 'react';
import { useStyles } from './AboutStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const About = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={0} item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className={classes.aboutUsHeaderDiv}>
                    <Typography variant='h3' className={classes.aboutUsHeaderTextStyle}>
                        ABOUT US
                    </Typography>
                </div>
            </Grid>
            <Grid container spacing={0} className={classes.whiteContainerStyle} alignItems='center' justify='center'>
                <Grid item xs={8} sm={8} md={8} lg={8} xl={8} className={classes.aboutUsGreetingContentGridStyle}>
                    <div className={classes.charIntComHeaderDivStyle}>
                        <Typography variant='h5' className={classes.blackHeaderTextStyle}>
                            CHARACTER.
                            <Typography variant='h5' className={classes.redHeaderTextStyle} display='inline'>
                                INTEGRITY.
                            </Typography>
                            COMMITMENT.
                        </Typography>
                    </div>
                    <Typography paragraph variant='body1' className={classes.aboutUsDescStyle}>
                        Since 1909, Charles Vrana & Son Construction Company has been building confidence for its clients,
                        large and small, by providing an exclusive blend of the advantages of both the large and small contractor.
                    </Typography>
                    <Typography paragraph variant='body1' className={classes.aboutUsDescStyle}>
                        We combine the strength of one of the Midwest's largest and most successful general construction firms with the
                        responsiveness and economy of a closely held family business.
                    </Typography>
                    <Typography paragraph variant='body1' className={classes.aboutUsDescStyle}>
                        Whether you are planning a large industrial or commercial building, or a small renovation, Vrana clients ejoy the benefits
                        of quality construction and economy. 
                    </Typography>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <img
                        alt='Charles Vrana and Troy Perry'
                        src='https://lh3.googleusercontent.com/aC8aKYfS1Gs7Cz8EDHqK4ZT6lreS1I6NiahDYQyFds85aGCmLd4YGIdSQXdyIPOAdy3mLMfaK0iu86j0o2XirJVoGJyKE_mIWN1-geEBOtN9yNrAeO08md7TQTKN9vs7bjP8GrhJ_BrLy1QWAZTqclc8dpDif0S_cTh0pIOTCziNoFAqsIVlz1uOJgdCdeHxC7gPguXGrq9BAJ9sCv88pVxvzmGV60DTuYJmmBMe-XyRva3e6EQzaFAmYzjQgV8XQK6nreIcQcaHcIxL3RWygN0T7_ls5C5n73NSfanSzl2w94oDHF9Ed5pvqA0PWELp5T7ioh7j6GvidqfuGAO11TZdndXIAte2Yxt0DYK9K82Ew5V8EeMfoewpnKBL0dATruK3UlOZQw3zsW9xzcADAhzZ60ysOmgqp1ImVngmSZfRVtES3fFfauQ7Kf3HkWeUczJc-CPNfSKFaHePatc-hAh_CvHl_csHFnGJtDrH3IKFppLbLBf7gMUoHwS9xH_Q1KwM5gefPRXZW24tWNGyqDj3AaD-4by2G7PvjSh7Fi8Kove_RxmWIvD9awB9FdNpBq_Vjo1_AZBfTmKHtR7NEkM6G2tHuvAvk0Mb71w2CQGnF1ErRIueDRkym5Ns4KjwiP-7ECbD4l83rSZ-ldh7qUwSD-q5AepkhhYTFxAN9V1zuwMZwyuByXS4Iai6NQ=w392-h371-no'
                        className={classes.charlesAndTroyImageStyle}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default About;