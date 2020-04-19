import React from 'react'
import { useStyles } from './ServicesStyles';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ServicesCard from '../../components/ServicesCard/ServicesCard';
import ImageBannerSection from '../../components/ImageBannerSection/ImageBannerSection';
import Footer from '../../components/Footer/Footer';

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
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='right' className={classes.gridLeftItemCardStyle}>
                    <ServicesCard 
                        alt='Pencil on Paper'
                        imageUrl='https://lh3.googleusercontent.com/_5Kdzmfs3xonjl8p9gtVZhbZjmYRSH9_fNU3dSe4_NssWlp_76nSJQr1vPH9scXGy6Um01jqIaqsWi8WT5XINa6_97UCvkeXem4Nuf7eRiznQYE3sL7n8YCkHL6z9XzP_X7i0cEEuMw-bRb1FLAEuro2pAl8WvotWZ4eXoDLRB5ieTyw4fpK50xQ-zj3hB0zBNkST5pgDVNln4o3Ic-hZt3qGPMBFSUl8d0jl-BYCNwprDAo7tA_8z7nkix-RU2dEh3j9oJMLQdemDgRF14j4ju9pjLh1_U_S6um9bDqUYybFDzjBzzsRvb14esW6Xq87H4Qa-1dnkW7Jj55qA0Ghv36-rNBUEYyM-o1TBQzNebSVgkXwirZW-Mm4sbmMAg9jLjCQPGvS1QFDPBt5ONxxe5JodBAeyP2UTTICWUxKOAYLuK-ssQZ23TQwkrPTWWPxgIyPUFTNO0rxD1CV4eRWL2IbUQjftW9eqsj36WgiAVlkGzjGOHxt06NpC7Lt9mbUrbnUnAzsdfyO0KBOwkYozwqylV7WpT_zZAcZyNxHBqq92jiV-MQLBReO7c0sWeJRCbL4VuqjJOt8JYHJLM_oRCIi1CURag-7I-dOtpby2onalpV4JGvbRBYHmppC_V4SXj5FlVpXk0gUov1VczH66JmetWf1zmOl7aJicz4GXSjO4hDtdXNWUgbVL3wYw=w400-h316-no'
                        headerText='PRECONSTRUCTION'
                        bodyText="Vrana's stragetic approach to preconstruction an project management ensures a seamless
                        and successful project delivery. Our experienced leadership team will guide you through
                        project objectives and constraints."
                        readBool
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='left' className={classes.gridRightItemCardStyle}>
                    <ServicesCard 
                        alt='Pencil on Paper'
                        imageUrl='https://lh3.googleusercontent.com/kU2qen6Lf2_w3709VuSQhzSNYRIB-8ba4F7ZAXTZdMeA9MJQf_l0XxiUnpJSPQbcMMqRTTNahcR9haTxAvoaTKAsjE-CuxrTv9GDUNNDAFHOC6i2cu0AS9Xugg7mP7niD3t0rCVZnl-q8eMWeBS0OgfaFRct4cSH_bUy34DNPHtU5bRZsBup9WRfUioeV9dXsswWYrQM-XL60dcOVn-7LDTB6oP5Q3FKJkT2mJmryFNQ37d1JHADYIOwsUJIXD1Kd-cuMCZ8Ogk58b3y6ToZioHQ6SgjLrD76vdBq4yvigm53lEaACkuOUh5oH7sRYk7h5oD-dam_-RDf3RdvuKvrah_Ko24Bu28Lv4At_yGsi2eqIRajGQQlSCH-tTpB-Q6ShGZfiAO5xcUBcXlXTr5kzWw0t7fiTIgELkSoqYc14DGtK7Dm7Kkp2KSABr53efZ5Bf3kJwS6BUf2oVkfelk1fNlHOGr87bwaAWR_g0nfrVsVhavZXAy3SpEMM2zGrjRkZWZ39OvPKa_7eGRGsYVFnqJtsWjgmNDPQwFInJwBX4Tr2O0rZvDIL5lIsPssmTnzr1_AEwX7WlmiuyT-9gUCD7gwUEsISYwF00huq7-4OPHRsKmeUm8RPtWtASIU-ObQ_Dgvf62Zc-Y7VBhzHage8yWMN_hAGvKs6kPqSwEX1xi8hOTxvXJTSV7HzgavA=w400-h314-no'
                        headerText='QUALITY CONSTRUCTION'
                        bodyText="Whether you are planning a large industrial or commercial building, or a small renovation,
                        Vrana clients always enjoy the best of both large and small contractor worlds."
                        readBool
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='right' className={classes.gridLeftItemCardStyle}>
                    <ServicesCard 
                        alt='Constructions workers working'
                        imageUrl='https://lh3.googleusercontent.com/kpAzfIU3-UO2WIEGNQFL8rTuS0rCP-z0O5tzwWveutRm6Z3KDazznWBdkZrsqSmyZ5nBfhOunR5jvC4Vg_YjPwc4t2o45URwghu27DafHGzB4avX4rwEFtJRSdUSg5lLkMyj_zd8f9KHBpaYPhzwBSpVnIu2o47uErCFZ3WlJbquii4_4ulCVUWMG5eYTqHIpHSZPRu2qgir2UWF1tlFZ9kDpd12WgtUeAMmNjxATHsx1UwsUNug8TaJC2RTYq1DAhhL0Nl6_S0qeGiA1N_z4CkTXnJ4Bbjp5QeIzJM9JxguUNRMIE54CmSixe9JeT5kIYemjcirwHRK0eHfobnrC7KKEJwG6_t2KqOzcakPUlWEe5GSGka8poV9JEHHpPFm3PNBufe2jtUCC3-lHgyGRK6KLdhn3l-RbxMw7KVdUXToi8A_edmJRaYzt4ljkkMdd_XqcG2Z2YBPt5219k-32vtt7Wjmqb5flH0UoybtZ-NP-8QJwpTCpoQo72zYoPoh5sDS54IXPIJ_50KSuOoj2RSU8Uph3utqgFB4CrRPRs3YNmdiBz6bzvGG3IWSYxaPdBFzaXnGDijoZp4lbhh6D_K6lpzEklYNURQzBnBvOLBJPoJ9G6RYgJUF0UiafLhAClsv6nC1MEF8JdSrZa28phZ4WPiCVsmX8aE0_TvRWQgKiU-qiNEUqsGJE_tdjA=w400-h318-no'
                        headerText='GENERAL CONTRACTING'
                        bodyText="Vrana's sophisicated approach to general contracting allows us to take on projects of any scale.
                        Our experienced field supervision and labor can fully execute projects of all sizes."
                        readBool
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='left' className={classes.gridRightItemCardStyle}>
                    <ServicesCard 
                        alt='Excavator shoveling dirt'
                        imageUrl='https://lh3.googleusercontent.com/ytIBnElcbyXYQGt_K1HAmkQomtGiVjdvde5mnzNZbJaYfi9Sp6QVyA5WB_deACmw4craH4oBepLCZ0MTk-dP08vDLahbHDIe6Vtqlm6ic8BbSooza1sHL7ARFd-HGh7EuNMhVCFPH7w2XQIJ2I1hhBQdjGRnNG_YLiAdz6ay2RsRFuQITEr_9nyzkkDCj2BNr7slacAvNK3Vt0MOVv80OfHehS1EsrbyWIv04pVLBChpnjG87_WECjXdUIsxo4hP1kvkFhNBuQEjEG2jXNH_osE9aRwfX6QFOp27ivFCIsILhtHG3WCu3eDN7kE4h2J8jD3WXeACHXVi5Fd0vF8MT8s22cwyotSfvVlmzJyxt80OkBQq05xt0_0oCITaEHRiZKRO9rxbuspTejI0B_6XJQDy4SyPLgVt5npX3Xr-0HLyXXRUM7VVj1rObr-DXJZU5jRiVQoX3-uu1m4fEw0yyiaLbF6rVBnRmv8OpOtlPR5mSBKPm0LUZddrFMkrl1ZMrJF4gBfeKE9oSD1XZ2lNvVn2Ta1KCeSYeDn1wqviP0-VAhgqLBTPtqLcbinGtpVCayp0pP3zjCINLMkno45qkFH8m98WSOxLpvtXJiNxtvXGp-SpW1Fp3yiXTzYY5UVCj-j_A0Edg0eB53I0t55rbf0lHsBd4TTxpeIAMN1qyrID7-ZxGAtastusYpBTBQ=w398-h314-no'
                        headerText='EQUIPMENT SALES'
                        bodyText="With a vast selection of construction equipment for sale, Vrana can help you build your realities
                        from your dreams. Check out our full list of equipment for sale."
                        readBool
                    />
                </Grid>
            </Grid>
            <Grid container spacing={0} item xs={12} sm={12} md={12} lg={12} xl={12}>
                <ImageBannerSection
                    imageUrl='https://lh3.googleusercontent.com/aZpbgePHG7bN05f0ukjNQi4iFgH2kMIGzja0lOxF3dAXnYvMgQ0Zswy1ELjsil-S6xNQFVBql7S7ASMTeYflO6BdYG68yHUg1MwtCEdj6ENheI05e6xY2317cUlXq3AiJIOjVsenOx4dKKBuF0MuiVtbGH0LfwEGbYqamQhIUweCo4alqV1MC5DDpb3uAxg7mwt6PYTywfk_bd7M4W_KfOrXEyypx0sW8ZJ7vei-jNGdPY9xvEtCTuoSnpp2rQHN_sYPio0DSn4Ar1BkBzBxXL6a87GCkPKIpB5a0yc95j3DII3uBGOgSvGi8-AwddPkv0y2XJznpLnfUH3tQv4_kHyU-n1l6ig-n7vC5FIaJryp3ocLRrCXTB6oGYFWwAs2MCcsXh_db2m6EWbaTmnZSkQmrLErg4-UzaZJUN3Tow88gJhk_byhxWqGHbaneX7rTjjV9GcBSSKTSMsX060gZZqA3g_65KMBPb9gQuCyYha21b_ybZZIqd_B69_dJz4Xs8nqhD8QFGpOL2z1CFc7lctYJTQFQFP7PhxQ0OJwn-ZW48Vv676xdDuxPKUtEUbt7OJTTkhpnQMOOI0I9-KSZbph7cNqQagePSUwIXpc1KlYmq3L_oqgQUkGSVlMkwdFuCAVhKUZDMtQoUVwMVUvMitVxr08EC7XdO0RGbWEJWKwFw2G1Qw2f_qocc72Rg=w980-h358-no'
                />
            </Grid>
            <Grid container spacing={0} className={classes.whiteContainerStyle}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center' className={classes.gridTopPaddingStyle}>
                    <Typography variant='body1' className={classes.redHeaderTextStyle}>
                        INDUSTRY SPECIALIZATION
                    </Typography>
                    <Typography variant='h3' className={classes.darkGreyTitleStyle}>
                        OUR MARKETS
                    </Typography>
                    <img 
                        alt='Divider lines'
                        src='https://lh3.googleusercontent.com/gmytRK2DIFcOtamUdqqi0OLx3Imupz7T7WFglOAyKd39DujVhnfoJBAIvVQ7eJRNhs_XTuYWCT9dl7rDj7LZtxri88xBWBD5Hbe56IyXadXG4rNZzhdRN9NPkjLqA174-VY8NVVQoPpOFJfMiBCW-KkMNexGJkoX89wNF9t4W_97N4E-rugk2AkKfh3xbhD8qfuvCbzs5sIYwk8Tia6MGjG0CzsuFJfBsfOWvDcryK39oBmzg5ZCq2M5jDD_Dy0hmAiQz76pjU8tABFoZr9g9dakw912JG4qFvP0hXE7MKDf5pGDMuovTFkk6p4GWJredE27Hpz4JkcJOv2J3Hr7HUC3bvYm9EwtpifHstj3GyPg58kCdJEVlckbJEq62W_V2sm6EHDeQAJhv-78HcQVeOFaMPnsj0Yc4c_ffuTlFJqmNy9xOIWMaYQxmzICOXeoXEhkamN2Bp94eg2sgnIHFWjLVA4A3iFg_UaLJIsKi8fie-r5BL_yg09B0ywUnZY3X4JlFlxcyJP9DzzmePXFRcYktYWI9NvtXbibEDH6YXcDtEdcmoSLvmHd-10VNMg6PK5-55ZOWJHMOrUotjJxqX3I8ZHCF7f4Ij4gMTQlbWic98OFXwewGfdEYgvEBlljAPeKc2U6KH6r4QEBiUxHvmTbocffXnruUU6mh5SRaR1qVjIUKPMjGCPdwA6DTg=w78-h6-no'
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='right' className={classes.gridLeftItemCardStyle}>
                    <ServicesCard 
                        alt='Omaha Steaks building'
                        imageUrl='https://lh3.googleusercontent.com/TlZEb4iZiwmSMA2p2pVEjcv1yXCngEsR_xRZ6jSJhCvY06mxQOxOLCP-EAtW-RLALSARpKeVbuma6de-AerQs_grYMeO2QZyMFvrZswrFU-9wrqQtxJlFU4V-aNWETi3kbilHVe_1e_nvYUuNHxijTQ85lNQdxJc7mzLzrDUxx-oEA8sRrzj5QvRv7pEDxDSeorshYKgSXB9siyGCQnt6vlczpeWW8l4gfiE0fiamIk1RnONE1uXxx2S4ZGSl7h-RMxVL5ev1oPMLVfhm4xZrkoWtAkGGuaf04WbkUmY4Q67nU_dA2EHfkcqHpmzO2FuZtGYM_8LSZKW5uUsQRzw0CMqk4_DcchuBOHEg4JKiTrjjzgJu59mKk-6hStXL6ZGbg8qhXzDZgeVM-LzpEweQItS3dgh7uBabRsfbunPx4npLF_cMn8grfIxG2V5Hv81hKcnwwRfQshIjt7eFWmjSJ093mUv2eraddgdzUvehgjBc_wP-tiGpiYwhv6nyNS6J6u7VcMycrgYQkVTmHJEKlCtMAI0d0fhgeuBpQEhy73B_LkWRw6hA0_FJjZKaHc4nhDkBCtLfoYspHBifa92-Sz_ZkxRkurKAuLc0gvWqAhVn5MXJrsLmMvyS4a1ZRfYh73_LW0VhGYh6TJMG-jmvdMWgWKDEUzb2FmItXTwzVlEFeQMqEPCIqLALZx6WQ=w398-h314-no'
                        headerText='COMMERCIAL'
                        bodyText="From large-scale tenant improvements to ground up construction, we have the experience to execute commercial projects of all sizes."
                        readBool={false}
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='left' className={classes.gridRightItemCardStyle}>
                    <ServicesCard 
                        alt="Baker's Grocery Store"
                        imageUrl='https://lh3.googleusercontent.com/xcdppAZkTFkiojqaCHzC2pH_1htHwDCo0P0GVhA1e8SFO1y9Za1Yvcx3iKRKmHwMslIg9peijPm9gngL1dK5vCYos2pYKw8YTlhFexS2Z5e0tsh_RVTj6zZVbQMtPPoh6FdrduKLrawlH0E2XVy8AMU363QTjJIGOhRkFeSK_yvhldEfTiVqTQtoR_u1EjXUmAl3rrqizpi3iGXKbcfooYss7v6Ww-UaXkq5DkzLsn1MKKU32KTfKPgIdPZk-b6DBHXWO3dFqn9aU_l7uaORPrv137Jw6hqZbcUvCQctGrJXxiB_VL2vJK2XQ3L-hhzJ_y0zjYJTWqLvfLP6ULZe-kX4QCDI1TGuNGhosR3VTPP0U_Thv22bQnTJ1rhL4T4uGlPAfcukQrKhnbxZwxenQfEFAWOs7l2KONFoF5o7uf7EN1iPf7mgepeIlXKpUT8SSUlbvu3ZdQ7_MVpqldd6flMQGjwe_T28YWC2RALzn6ay7yoo0gsLqJYIGOZWjch6HLPzwSCfUz6o-Yow_y1aZdrvkM-coAyP7wZlSMJTlxf9EwzG8kuPKZGdnxhwfvOq9k9gAazEtntiQ5QAiIxqpxywDajhCVJrxUqeUOucByUj4WJQhdPENz4JScQ0JjPpkzYja6he_TkNfZFkrmSQNEmGHIIy-s83CdFZbD4heWcOa_Ralg-zURp55NVYkA=w398-h314-no'
                        headerText='RETAIL'
                        bodyText="From large-scale tenant improvements to ground up construction, we have the experience to execute commercial projects of all sizes."
                        readBool={false}
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='right' className={classes.gridLeftItemCardStyle}>
                    <ServicesCard 
                        alt='Apartment building'
                        imageUrl='https://lh3.googleusercontent.com/caRfdcOja9pWyke38GWvvna_8GsKGXW-Ei86F37jpkwf47Q7kkMTx960O18BZnwq8PKGsN8qd0ZHpbFtyxPBEXgccI_YRN25YKp9SFhJ-HvxP_HFQgVmmIYNF9Ge9Npt7qg37qDSTf6aSYDkc4SlFPKf7UlLAmAa_940liNULaFcOq1xmoAe4P7_lM-TuntoPQ2sy6PdigfQcTyhRmA_TZfeqGusQZI6LADTT91WpP6pxwRQpgpXsW0SXiNTgS2WW5p_IyYUSjgZ5vpy_CG2GAo6I21cftuPSbZVEMRZ1U2O06ErSlYoK5mcDZSiuVoJsz38c9VfPU34L49tBqc2U6cutQrMEW0u8QnliCFDuQ9JOQGH0NLI4w7c9tzAPEjvt7LpYbtZ8slpuWYtSXqY4Q_CekXKZddF_lIkv3ltIoMhO343uoTw-44n3Lffco0KeGPVapyKduR0gCCcfCV9YqLVh8lZ47fWbd_zmUCHo_AxQr4GqiuW4dUIF1v4s-ZY61eH3nH8EMBNOvaS19onXcIsDEm6C0-cs5l9vwBAO4HE5I0e9pJ4ffKveKyJQ-43YS8o2UIgg9NoebySJlZVYaGgV9tQi2si4VsGVKRi-eXVFmlNgsKO_jSMZJ1RKZAAzCgeIqfEXon2GLGVVpsyBaOK3piUPHrWIArWuzhum_EuAwx3S2c42sVD9HEnSQ=w398-h312-no'
                        headerText='HOUSING'
                        bodyText="From large-scale tenant improvements to ground up construction, we have the experience to execute commercial projects of all sizes."
                        readBool={false}
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='left' className={classes.gridRightItemCardStyle}>
                    <ServicesCard 
                        alt='Office building'
                        imageUrl='https://lh3.googleusercontent.com/4ktqFj_o9VlAgbNDf-QDhkt27PYBYYWNv5tnsNgkjeZx-K8ALLa7Mtuw2Q_XqRMTJDBb0EHU-elxS40MVJTKwLf33EfMJDQW28iJvXZ8u-BQazk7Q2W68_qKiPrnvg-0x4_zn2u-RYKx7hZo0AJJCuggsGPm6boghkRvPPLDau-RMGm7aCTFL83sypBEQp7FHjyuHE5fcEWubQ9iHePr7rwIhYmQ0kV9gFhjBkFBejsFNbNU5U_mtlnERE6ByuOFiPZyi7kKL_MUh1y9HJKoVvQubYSY9ghi9Y0GE_MQzvvIf8yu6-H95psxEfHtwe33rEmB7chLWxaT9Ib9AYLX6hMqHe1KGjMu8an8tpn3mX1_AyxS5K3fJaOVFVGDsPTiaLeZvC5TXYd79VOrSOKbDd11OBHgx8gBfNz6-P418UGWOhQW9OAR8sAem8A7WptEVy9sZNxAHMaedthlcjCz4C3YhdmkcLtMAVyGomPeO7W1yV_1pq7ngL9NmI3tFr-3IauOzE-86X4mIw_uQooMms2MpCY_8Mo3xYDUBGNnruVZpLnhvHlJTymIsWEtkGdTaABKMIe7c7zaBty0G_iFC-G7o9FFVCC7pr-vKcsFqlfixHwndF_-tNJAjqQXTPryr0zVaBwEkpEKYvo44B4iuuN4emppiASRs8v_Yx2BfXhAv1kpdsFNq0bxPAOgKw=w396-h306-no'
                        headerText='RELIGIOUS/EDUCATIONAL'
                        bodyText="From large-scale tenant improvements to ground up construction, we have the experience to execute commercial projects of all sizes."
                        readBool={false}
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='right' className={classes.gridLeftItemCardStyle}>
                    <ServicesCard 
                        alt='Parking garage'
                        imageUrl='https://lh3.googleusercontent.com/caRfdcOja9pWyke38GWvvna_8GsKGXW-Ei86F37jpkwf47Q7kkMTx960O18BZnwq8PKGsN8qd0ZHpbFtyxPBEXgccI_YRN25YKp9SFhJ-HvxP_HFQgVmmIYNF9Ge9Npt7qg37qDSTf6aSYDkc4SlFPKf7UlLAmAa_940liNULaFcOq1xmoAe4P7_lM-TuntoPQ2sy6PdigfQcTyhRmA_TZfeqGusQZI6LADTT91WpP6pxwRQpgpXsW0SXiNTgS2WW5p_IyYUSjgZ5vpy_CG2GAo6I21cftuPSbZVEMRZ1U2O06ErSlYoK5mcDZSiuVoJsz38c9VfPU34L49tBqc2U6cutQrMEW0u8QnliCFDuQ9JOQGH0NLI4w7c9tzAPEjvt7LpYbtZ8slpuWYtSXqY4Q_CekXKZddF_lIkv3ltIoMhO343uoTw-44n3Lffco0KeGPVapyKduR0gCCcfCV9YqLVh8lZ47fWbd_zmUCHo_AxQr4GqiuW4dUIF1v4s-ZY61eH3nH8EMBNOvaS19onXcIsDEm6C0-cs5l9vwBAO4HE5I0e9pJ4ffKveKyJQ-43YS8o2UIgg9NoebySJlZVYaGgV9tQi2si4VsGVKRi-eXVFmlNgsKO_jSMZJ1RKZAAzCgeIqfEXon2GLGVVpsyBaOK3piUPHrWIArWuzhum_EuAwx3S2c42sVD9HEnSQ=w398-h312-no'
                        headerText='PARKING STRUCTURE'
                        bodyText="From large-scale tenant improvements to ground up construction, we have the experience to execute commercial projects of all sizes."
                        readBool={false}
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='left' className={classes.gridRightItemCardStyle}>
                    <ServicesCard 
                        alt='Highway/Interstate'
                        imageUrl='https://lh3.googleusercontent.com/FpSWl_vr0WPK9-0WzCHSbX0gjanPuHzmWsKDDe2bGSyH7QCdRrvYxLLCjLE5aLpGnNl85fpPH3C62XaNaqZ3weZSdHwh_UzGWOfRHdcXm9yjxN6l73QueEupshzYcmsCciSneeoEulLPKhaP7a2PpAKzs1XijBSOKj3JApeGdco9JvvsQVjisjubBU5wfVJoMD1N2UgUEBqxC1aXGsTBc6UyI1Iii0pA-Itsd_VkIPDinYWdesCqq3LyaKyfJugsj35RCECf5lvPBcEH5qnVIAT2gDDBt4f_sDUUzw5b4Cs_oVHJZFk2uh2HivtVXb1Gbp_n81jreQewXQWkhl8Gb1kgZ69o-nl7r2qdejT4irp59noetZdO52WGiW7MI5KCIn0sYWLz-weLZRdBdgjSqIoukX-S0qH-mpMXjHx9C_45_WfztWwTJpoogL8LM7FhHU80fjowxrc6TTKjbLsggngzvg2cStm0xmgGTouZNAMtdPP-mE4j9R-kEjsU-WF3kam8vm9W6iD9tknrfDCDugnJ9FaKi2xEMhAxKIuKUjB-My2_nBjf87X9KOea7S3Znq4RT61UOpj0ChPGLSKQ9kWrHQX0cquzfvDPv15GR8UscDjc12SF-3_s0O_yLephJe8cvQE5cjmT6sp8pmtvynbpQG3P4mUDAN0l253woZnvnLvgD5V2JU8Zwo-ZLA=w400-h314-no'
                        headerText='CIVIL/HEAVY HIGHWAY'
                        bodyText="From large-scale tenant improvements to ground up construction, we have the experience to execute commercial projects of all sizes."
                        readBool={false}
                    />
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
};

export default Services;