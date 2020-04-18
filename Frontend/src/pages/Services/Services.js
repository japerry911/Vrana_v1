import React from 'react'
import { useStyles } from './ServicesStyles';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';

const Services = () => {
    const classes = useStyles();

    return (
        <div>
            <HeroHeader headerText='WHAT WE DO' />
            <Grid container spacing={0} className={classes.whiteContainerStyle}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center'>
                    <Typography variant='h5' className={classes.darkGreyHeaderStyle}>
                        Quality Construction.&nbsp;
                        <div className={classes.redHeaderTextStyle}>
                            Exceptional Results.
                        </div>
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='center' className={classes.gridItemCardStyle}>
                    <img
                        alt='Pencil on Paper'
                        src='https://lh3.googleusercontent.com/_5Kdzmfs3xonjl8p9gtVZhbZjmYRSH9_fNU3dSe4_NssWlp_76nSJQr1vPH9scXGy6Um01jqIaqsWi8WT5XINa6_97UCvkeXem4Nuf7eRiznQYE3sL7n8YCkHL6z9XzP_X7i0cEEuMw-bRb1FLAEuro2pAl8WvotWZ4eXoDLRB5ieTyw4fpK50xQ-zj3hB0zBNkST5pgDVNln4o3Ic-hZt3qGPMBFSUl8d0jl-BYCNwprDAo7tA_8z7nkix-RU2dEh3j9oJMLQdemDgRF14j4ju9pjLh1_U_S6um9bDqUYybFDzjBzzsRvb14esW6Xq87H4Qa-1dnkW7Jj55qA0Ghv36-rNBUEYyM-o1TBQzNebSVgkXwirZW-Mm4sbmMAg9jLjCQPGvS1QFDPBt5ONxxe5JodBAeyP2UTTICWUxKOAYLuK-ssQZ23TQwkrPTWWPxgIyPUFTNO0rxD1CV4eRWL2IbUQjftW9eqsj36WgiAVlkGzjGOHxt06NpC7Lt9mbUrbnUnAzsdfyO0KBOwkYozwqylV7WpT_zZAcZyNxHBqq92jiV-MQLBReO7c0sWeJRCbL4VuqjJOt8JYHJLM_oRCIi1CURag-7I-dOtpby2onalpV4JGvbRBYHmppC_V4SXj5FlVpXk0gUov1VczH66JmetWf1zmOl7aJicz4GXSjO4hDtdXNWUgbVL3wYw=w400-h316-no'
                        className={classes.snapshotImageStyle}
                    />
                    <Typography variant='h6' className={classes.medGreyHeaderStyle}>
                        PRECONSTRUCTION
                    </Typography>
                    <div className={classes.cardTextDivStyle}>
                        <Typography paragraph variant='body2' className={classes.darkGreyBodyStyle}>
                            Vrana's stragetic approach to preconstruction an project management ensures a seamless
                            and successful project delivery. Our experienced leadership team will guide you through
                            project objectives and constraints.
                        </Typography>
                        <Typography variant='body2' className={classes.redBodyStyle}>
                            Read More >>
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='center' className={classes.gridItemCardStyle}>
                    <img
                        alt='Pencil on Paper'
                        src='https://lh3.googleusercontent.com/kU2qen6Lf2_w3709VuSQhzSNYRIB-8ba4F7ZAXTZdMeA9MJQf_l0XxiUnpJSPQbcMMqRTTNahcR9haTxAvoaTKAsjE-CuxrTv9GDUNNDAFHOC6i2cu0AS9Xugg7mP7niD3t0rCVZnl-q8eMWeBS0OgfaFRct4cSH_bUy34DNPHtU5bRZsBup9WRfUioeV9dXsswWYrQM-XL60dcOVn-7LDTB6oP5Q3FKJkT2mJmryFNQ37d1JHADYIOwsUJIXD1Kd-cuMCZ8Ogk58b3y6ToZioHQ6SgjLrD76vdBq4yvigm53lEaACkuOUh5oH7sRYk7h5oD-dam_-RDf3RdvuKvrah_Ko24Bu28Lv4At_yGsi2eqIRajGQQlSCH-tTpB-Q6ShGZfiAO5xcUBcXlXTr5kzWw0t7fiTIgELkSoqYc14DGtK7Dm7Kkp2KSABr53efZ5Bf3kJwS6BUf2oVkfelk1fNlHOGr87bwaAWR_g0nfrVsVhavZXAy3SpEMM2zGrjRkZWZ39OvPKa_7eGRGsYVFnqJtsWjgmNDPQwFInJwBX4Tr2O0rZvDIL5lIsPssmTnzr1_AEwX7WlmiuyT-9gUCD7gwUEsISYwF00huq7-4OPHRsKmeUm8RPtWtASIU-ObQ_Dgvf62Zc-Y7VBhzHage8yWMN_hAGvKs6kPqSwEX1xi8hOTxvXJTSV7HzgavA=w400-h314-no'
                        className={classes.snapshotImageStyle}
                    />
                    <Typography variant='h6' className={classes.medGreyHeaderStyle}>
                        COMMERCIAL CONSTRUCTION
                    </Typography>
                    <div className={classes.cardTextDivStyle}>
                        <Typography paragraph variant='body2' className={classes.darkGreyBodyStyle}>
                            Whether you are planning a large industrial or commercial building, or a small renovation.
                            Vrana clients always enjoy the best of both large and small contractor worlds.
                        </Typography>
                        <Typography variant='body2' className={classes.redBodyStyle}>
                            Read More >>
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='center' className={classes.gridItemCardStyle}>
                    <img
                        alt='Pencil on Paper'
                        src='https://lh3.googleusercontent.com/kpAzfIU3-UO2WIEGNQFL8rTuS0rCP-z0O5tzwWveutRm6Z3KDazznWBdkZrsqSmyZ5nBfhOunR5jvC4Vg_YjPwc4t2o45URwghu27DafHGzB4avX4rwEFtJRSdUSg5lLkMyj_zd8f9KHBpaYPhzwBSpVnIu2o47uErCFZ3WlJbquii4_4ulCVUWMG5eYTqHIpHSZPRu2qgir2UWF1tlFZ9kDpd12WgtUeAMmNjxATHsx1UwsUNug8TaJC2RTYq1DAhhL0Nl6_S0qeGiA1N_z4CkTXnJ4Bbjp5QeIzJM9JxguUNRMIE54CmSixe9JeT5kIYemjcirwHRK0eHfobnrC7KKEJwG6_t2KqOzcakPUlWEe5GSGka8poV9JEHHpPFm3PNBufe2jtUCC3-lHgyGRK6KLdhn3l-RbxMw7KVdUXToi8A_edmJRaYzt4ljkkMdd_XqcG2Z2YBPt5219k-32vtt7Wjmqb5flH0UoybtZ-NP-8QJwpTCpoQo72zYoPoh5sDS54IXPIJ_50KSuOoj2RSU8Uph3utqgFB4CrRPRs3YNmdiBz6bzvGG3IWSYxaPdBFzaXnGDijoZp4lbhh6D_K6lpzEklYNURQzBnBvOLBJPoJ9G6RYgJUF0UiafLhAClsv6nC1MEF8JdSrZa28phZ4WPiCVsmX8aE0_TvRWQgKiU-qiNEUqsGJE_tdjA=w400-h318-no'
                        className={classes.snapshotImageStyle}
                    />
                    <Typography variant='h6' className={classes.medGreyHeaderStyle}>
                        GENERAL CONTRACTING
                    </Typography>
                    <div className={classes.cardTextDivStyle}>
                        <Typography paragraph variant='body2' className={classes.darkGreyBodyStyle}>
                            Vrana's sophisicated approach to general contracting allows us to take on projects of any scale.
                            Our experienced field supervision and labor can fully execute projects of all sizes.
                        </Typography>
                        <Typography variant='body2' className={classes.redBodyStyle}>
                            Read More >>
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='center' className={classes.gridItemCardStyle}>
                    <img
                        alt='Pencil on Paper'
                        src='https://lh3.googleusercontent.com/ytIBnElcbyXYQGt_K1HAmkQomtGiVjdvde5mnzNZbJaYfi9Sp6QVyA5WB_deACmw4craH4oBepLCZ0MTk-dP08vDLahbHDIe6Vtqlm6ic8BbSooza1sHL7ARFd-HGh7EuNMhVCFPH7w2XQIJ2I1hhBQdjGRnNG_YLiAdz6ay2RsRFuQITEr_9nyzkkDCj2BNr7slacAvNK3Vt0MOVv80OfHehS1EsrbyWIv04pVLBChpnjG87_WECjXdUIsxo4hP1kvkFhNBuQEjEG2jXNH_osE9aRwfX6QFOp27ivFCIsILhtHG3WCu3eDN7kE4h2J8jD3WXeACHXVi5Fd0vF8MT8s22cwyotSfvVlmzJyxt80OkBQq05xt0_0oCITaEHRiZKRO9rxbuspTejI0B_6XJQDy4SyPLgVt5npX3Xr-0HLyXXRUM7VVj1rObr-DXJZU5jRiVQoX3-uu1m4fEw0yyiaLbF6rVBnRmv8OpOtlPR5mSBKPm0LUZddrFMkrl1ZMrJF4gBfeKE9oSD1XZ2lNvVn2Ta1KCeSYeDn1wqviP0-VAhgqLBTPtqLcbinGtpVCayp0pP3zjCINLMkno45qkFH8m98WSOxLpvtXJiNxtvXGp-SpW1Fp3yiXTzYY5UVCj-j_A0Edg0eB53I0t55rbf0lHsBd4TTxpeIAMN1qyrID7-ZxGAtastusYpBTBQ=w398-h314-no'
                        className={classes.snapshotImageStyle}
                    />
                    <Typography variant='h6' className={classes.medGreyHeaderStyle}>
                        EQUIPMENT SALES
                    </Typography>
                    <div className={classes.cardTextDivStyle}>
                        <Typography paragraph variant='body2' className={classes.darkGreyBodyStyle}>
                            With a vast selection of construction equipment for sale, Vrana can help you build your realities
                            from your dreams. Check out our full list of eqipment for sale.
                        </Typography>
                        <Typography variant='body2' className={classes.redBodyStyle}>
                            Read More >>
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Services;