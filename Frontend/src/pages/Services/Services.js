import React from 'react'
import { useStyles } from './ServicesStyles';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '../../components/Card/Card';
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
                    <Card 
                        alt='Pencil on Paper'
                        imageUrl='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/image(18).png'
                        headerText='PRECONSTRUCTION'
                        bodyText="Vrana's stragetic approach to preconstruction an project management ensures a seamless
                        and successful project delivery. Our experienced leadership team will guide you through
                        project objectives and constraints."
                        ctaText={'Read More > >'}
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='left' className={classes.gridRightItemCardStyle}>
                    <Card 
                        alt='Cranes'
                        imageUrl='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/Screen+Shot+2020-04-18+at+2.05.49+PM.jpg'
                        headerText='QUALITY CONSTRUCTION'
                        bodyText="Whether you are planning a large industrial or commercial building, or a small renovation,
                        Vrana clients always enjoy the best of both large and small contractor worlds."
                        ctaText={'Read More > >'}
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='right' className={classes.gridLeftItemCardStyle}>
                    <Card 
                        alt='Constructions workers working'
                        imageUrl='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/image(17).png'
                        headerText='GENERAL CONTRACTING'
                        bodyText="Vrana's sophisicated approach to general contracting allows us to take on projects of any scale.
                        Our experienced field supervision and labor can fully execute projects of all sizes."
                        ctaText={'Read More > >'}
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='left' className={classes.gridRightItemCardStyle}>
                    <Card 
                        alt='Excavator shoveling dirt'
                        imageUrl='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/image(16).png'
                        headerText='EQUIPMENT SALES'
                        bodyText="With a vast selection of construction equipment for sale, Vrana can help you build your realities
                        from your dreams. Check out our full list of equipment for sale."
                        ctaText={'Read More > >'}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={0} item xs={12} sm={12} md={12} lg={12} xl={12}>
                <ImageBannerSection
                    justify='center'
                    imageUrl='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/image(15).png'
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
                    <Card 
                        alt='Omaha Steaks building'
                        imageUrl='https://lh3.googleusercontent.com/TlZEb4iZiwmSMA2p2pVEjcv1yXCngEsR_xRZ6jSJhCvY06mxQOxOLCP-EAtW-RLALSARpKeVbuma6de-AerQs_grYMeO2QZyMFvrZswrFU-9wrqQtxJlFU4V-aNWETi3kbilHVe_1e_nvYUuNHxijTQ85lNQdxJc7mzLzrDUxx-oEA8sRrzj5QvRv7pEDxDSeorshYKgSXB9siyGCQnt6vlczpeWW8l4gfiE0fiamIk1RnONE1uXxx2S4ZGSl7h-RMxVL5ev1oPMLVfhm4xZrkoWtAkGGuaf04WbkUmY4Q67nU_dA2EHfkcqHpmzO2FuZtGYM_8LSZKW5uUsQRzw0CMqk4_DcchuBOHEg4JKiTrjjzgJu59mKk-6hStXL6ZGbg8qhXzDZgeVM-LzpEweQItS3dgh7uBabRsfbunPx4npLF_cMn8grfIxG2V5Hv81hKcnwwRfQshIjt7eFWmjSJ093mUv2eraddgdzUvehgjBc_wP-tiGpiYwhv6nyNS6J6u7VcMycrgYQkVTmHJEKlCtMAI0d0fhgeuBpQEhy73B_LkWRw6hA0_FJjZKaHc4nhDkBCtLfoYspHBifa92-Sz_ZkxRkurKAuLc0gvWqAhVn5MXJrsLmMvyS4a1ZRfYh73_LW0VhGYh6TJMG-jmvdMWgWKDEUzb2FmItXTwzVlEFeQMqEPCIqLALZx6WQ=w398-h314-no'
                        headerText='COMMERCIAL'
                        bodyText="From large-scale tenant improvements to ground up construction, we have the experience to execute commercial projects of all sizes."
                        ctaText={'Our Work > >'}
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='left' className={classes.gridRightItemCardStyle}>
                    <Card 
                        alt="Baker's Grocery Store"
                        imageUrl='https://lh3.googleusercontent.com/xcdppAZkTFkiojqaCHzC2pH_1htHwDCo0P0GVhA1e8SFO1y9Za1Yvcx3iKRKmHwMslIg9peijPm9gngL1dK5vCYos2pYKw8YTlhFexS2Z5e0tsh_RVTj6zZVbQMtPPoh6FdrduKLrawlH0E2XVy8AMU363QTjJIGOhRkFeSK_yvhldEfTiVqTQtoR_u1EjXUmAl3rrqizpi3iGXKbcfooYss7v6Ww-UaXkq5DkzLsn1MKKU32KTfKPgIdPZk-b6DBHXWO3dFqn9aU_l7uaORPrv137Jw6hqZbcUvCQctGrJXxiB_VL2vJK2XQ3L-hhzJ_y0zjYJTWqLvfLP6ULZe-kX4QCDI1TGuNGhosR3VTPP0U_Thv22bQnTJ1rhL4T4uGlPAfcukQrKhnbxZwxenQfEFAWOs7l2KONFoF5o7uf7EN1iPf7mgepeIlXKpUT8SSUlbvu3ZdQ7_MVpqldd6flMQGjwe_T28YWC2RALzn6ay7yoo0gsLqJYIGOZWjch6HLPzwSCfUz6o-Yow_y1aZdrvkM-coAyP7wZlSMJTlxf9EwzG8kuPKZGdnxhwfvOq9k9gAazEtntiQ5QAiIxqpxywDajhCVJrxUqeUOucByUj4WJQhdPENz4JScQ0JjPpkzYja6he_TkNfZFkrmSQNEmGHIIy-s83CdFZbD4heWcOa_Ralg-zURp55NVYkA=w398-h314-no'
                        headerText='RETAIL'
                        bodyText="From large-scale tenant improvements to ground up construction, we have the experience to execute commercial projects of all sizes."
                        ctaText={'Our Work > >'}
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='right' className={classes.gridLeftItemCardStyle}>
                    <Card 
                        alt='Apartment building'
                        imageUrl='https://lh3.googleusercontent.com/caRfdcOja9pWyke38GWvvna_8GsKGXW-Ei86F37jpkwf47Q7kkMTx960O18BZnwq8PKGsN8qd0ZHpbFtyxPBEXgccI_YRN25YKp9SFhJ-HvxP_HFQgVmmIYNF9Ge9Npt7qg37qDSTf6aSYDkc4SlFPKf7UlLAmAa_940liNULaFcOq1xmoAe4P7_lM-TuntoPQ2sy6PdigfQcTyhRmA_TZfeqGusQZI6LADTT91WpP6pxwRQpgpXsW0SXiNTgS2WW5p_IyYUSjgZ5vpy_CG2GAo6I21cftuPSbZVEMRZ1U2O06ErSlYoK5mcDZSiuVoJsz38c9VfPU34L49tBqc2U6cutQrMEW0u8QnliCFDuQ9JOQGH0NLI4w7c9tzAPEjvt7LpYbtZ8slpuWYtSXqY4Q_CekXKZddF_lIkv3ltIoMhO343uoTw-44n3Lffco0KeGPVapyKduR0gCCcfCV9YqLVh8lZ47fWbd_zmUCHo_AxQr4GqiuW4dUIF1v4s-ZY61eH3nH8EMBNOvaS19onXcIsDEm6C0-cs5l9vwBAO4HE5I0e9pJ4ffKveKyJQ-43YS8o2UIgg9NoebySJlZVYaGgV9tQi2si4VsGVKRi-eXVFmlNgsKO_jSMZJ1RKZAAzCgeIqfEXon2GLGVVpsyBaOK3piUPHrWIArWuzhum_EuAwx3S2c42sVD9HEnSQ=w398-h312-no'
                        headerText='HOUSING'
                        bodyText="From large-scale tenant improvements to ground up construction, we have the experience to execute commercial projects of all sizes."
                        ctaText={'Our Work > >'}
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='left' className={classes.gridRightItemCardStyle}>
                    <Card 
                        alt='Office building'
                        imageUrl='https://lh3.googleusercontent.com/4ktqFj_o9VlAgbNDf-QDhkt27PYBYYWNv5tnsNgkjeZx-K8ALLa7Mtuw2Q_XqRMTJDBb0EHU-elxS40MVJTKwLf33EfMJDQW28iJvXZ8u-BQazk7Q2W68_qKiPrnvg-0x4_zn2u-RYKx7hZo0AJJCuggsGPm6boghkRvPPLDau-RMGm7aCTFL83sypBEQp7FHjyuHE5fcEWubQ9iHePr7rwIhYmQ0kV9gFhjBkFBejsFNbNU5U_mtlnERE6ByuOFiPZyi7kKL_MUh1y9HJKoVvQubYSY9ghi9Y0GE_MQzvvIf8yu6-H95psxEfHtwe33rEmB7chLWxaT9Ib9AYLX6hMqHe1KGjMu8an8tpn3mX1_AyxS5K3fJaOVFVGDsPTiaLeZvC5TXYd79VOrSOKbDd11OBHgx8gBfNz6-P418UGWOhQW9OAR8sAem8A7WptEVy9sZNxAHMaedthlcjCz4C3YhdmkcLtMAVyGomPeO7W1yV_1pq7ngL9NmI3tFr-3IauOzE-86X4mIw_uQooMms2MpCY_8Mo3xYDUBGNnruVZpLnhvHlJTymIsWEtkGdTaABKMIe7c7zaBty0G_iFC-G7o9FFVCC7pr-vKcsFqlfixHwndF_-tNJAjqQXTPryr0zVaBwEkpEKYvo44B4iuuN4emppiASRs8v_Yx2BfXhAv1kpdsFNq0bxPAOgKw=w396-h306-no'
                        headerText='RELIGIOUS/EDUCATIONAL'
                        bodyText="From large-scale tenant improvements to ground up construction, we have the experience to execute commercial projects of all sizes."
                        ctaText={'Our Work > >'}
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='right' className={classes.gridLeftItemCardStyle}>
                    <Card 
                        alt='Parking garage'
                        imageUrl='https://lh3.googleusercontent.com/caRfdcOja9pWyke38GWvvna_8GsKGXW-Ei86F37jpkwf47Q7kkMTx960O18BZnwq8PKGsN8qd0ZHpbFtyxPBEXgccI_YRN25YKp9SFhJ-HvxP_HFQgVmmIYNF9Ge9Npt7qg37qDSTf6aSYDkc4SlFPKf7UlLAmAa_940liNULaFcOq1xmoAe4P7_lM-TuntoPQ2sy6PdigfQcTyhRmA_TZfeqGusQZI6LADTT91WpP6pxwRQpgpXsW0SXiNTgS2WW5p_IyYUSjgZ5vpy_CG2GAo6I21cftuPSbZVEMRZ1U2O06ErSlYoK5mcDZSiuVoJsz38c9VfPU34L49tBqc2U6cutQrMEW0u8QnliCFDuQ9JOQGH0NLI4w7c9tzAPEjvt7LpYbtZ8slpuWYtSXqY4Q_CekXKZddF_lIkv3ltIoMhO343uoTw-44n3Lffco0KeGPVapyKduR0gCCcfCV9YqLVh8lZ47fWbd_zmUCHo_AxQr4GqiuW4dUIF1v4s-ZY61eH3nH8EMBNOvaS19onXcIsDEm6C0-cs5l9vwBAO4HE5I0e9pJ4ffKveKyJQ-43YS8o2UIgg9NoebySJlZVYaGgV9tQi2si4VsGVKRi-eXVFmlNgsKO_jSMZJ1RKZAAzCgeIqfEXon2GLGVVpsyBaOK3piUPHrWIArWuzhum_EuAwx3S2c42sVD9HEnSQ=w398-h312-no'
                        headerText='PARKING STRUCTURE'
                        bodyText="From large-scale tenant improvements to ground up construction, we have the experience to execute commercial projects of all sizes."
                        ctaText={'Our Work > >'}
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='left' className={classes.gridRightItemCardStyle}>
                    <Card 
                        alt='Highway/Interstate'
                        imageUrl='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/image(19).png'
                        headerText='CIVIL/HEAVY HIGHWAY'
                        bodyText="From large-scale tenant improvements to ground up construction, we have the experience to execute commercial projects of all sizes."
                        ctaText={'Our Work > >'}
                    />
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
};

export default Services;