import React from 'react';
import { useStyles } from './AboutStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Footer from '../../components/Footer/Footer';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import ImageBannerSection from '../../components/ImageBannerSection/ImageBannerSection';

const About = () => {
    const classes = useStyles();

    return (
        <div>
            <HeroHeader headerText='ABOUT US' />
            <Grid container spacing={0} className={classes.whiteContainerStyle} alignItems='center' justify='center'>
                <Grid item xs={8} sm={8} md={8} lg={8} xl={8} className={classes.aboutUsGreetingContentGridStyle}>
                    <div className={classes.charIntComHeaderDivStyle}>
                        <Typography variant='h5' className={classes.blackHeaderTextStyle}>
                            CHARACTER.&nbsp;
                            <div className={classes.redHeaderTextStyle}>
                                INTEGRITY.&nbsp;
                            </div>
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
            <Grid container spacing={0} item xs={12} sm={12} md={12} lg={12} xl={12}>
                <ImageBannerSection
                    headerText='MEET OUR TEAM'
                    imageUrl='https://lh3.googleusercontent.com/MoIQkutz9Z3g388yoD6kZLhFFvthDvd7JiIGibptxXTYgD1GCFqxSGHwvakaQUVIjphC42YwUfGot-uzLSWlvaSx3QOx8wmIuM0j9qcdwoymOWZyLqVlaacJ6t7eews2WzBzva__NDHZFYaTzWvqL79bXvdLTIL-0JcC-qqQo4h5pjV8BvhMFh3Km4kjqzFPdDZS7_AbJE736O8j-kiVJBwver2s8b61WxTd5U0jediy_xFFxucVI7M9QnU_Z_-01aFuUc7j8M3stAZiGjyoCLH8BUROZ6LaGmZzpsftmIWFXO4u1Cj8HqlAHax5YIGKTwbiMRriQB-JG4k0sIkGTzTeolLKUL7pbhvV5faaLcQ5sMQCFjWSCjvtPFqlMOuqMPK_-SzG04Zz1V1JodPbzXGNzpIgDIW1LUZKNmzshYOWZU36doCVs2ezBqqZyj4Uyzojwrlh8YnpJptoSoR50db9QdHfXI-gJhjIXIzeXj1BlmombmTaSHhEa4r-2ntFfil69oVxQ5pvXVz-HTetkRFTTDVmTE7GgTQPTfZCt7oMvmTgypbxDiy_Bfa_637mpp3Ft94n9g3Uc7M2rLNWzvtyZzIXCwM-P8G2aBe6aY_D6QOJ1fFP-LeEWGiDywAdwyqCTSuzuRn2bwZylVPuFflBSq9I55W_V6PqMMM99t_dqiqGRHU3MQLEXs4SDw=w512-h240-no'
                />
            </Grid>
            <Grid container spacing={0} className={classes.whiteContainerStyle}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center' className={classes.ourLeadershipHeaderGridStyle}>
                    <Typography variant='body1' className={classes.vranaRedSubtitleTextStyle}>
                        TEAM BUILDING
                    </Typography>
                    <Typography variant='h3' className={classes.darkGreyTitleStyle}>
                        OUR LEADERSHIP
                    </Typography>
                    <img
                        alt='Divider lines'
                        src='https://lh3.googleusercontent.com/uJ0jIQxTAVM1_61xju7n-z0LVVvkFcOaYKW3uX-ikc9rLilUEy7KJ2bQp1Eif8oga0qR69tnp_IW_jCRfgFKGEm8kvhASMqxGWHVX8skyNtszomzQfYXhKMg2NRa-mHnK8DLjU0bj2aG8MTVgH7iGTEfpT1kWDnRLnKvTsDLMv44mMk6N_7h3rRP-ubsnMYTgbVN1cwJV-lXE_ECSDbSRgRtcN4mbge3hONerSKsgv2VG-vEoqjgOgTozOimAGtDVgZrxXhNblk2YSDU-bqQeQeCR0Y0bn1JgWQ5OEoBN13iN2pEFd-zCbFQn-y5DqKJVry9VO0LTWN4mohaYXHlCKBy-IrrwbJDLm0ePjrRHKZhOvgDNh1fOqzpcRnl2FM9-AwqoFoACVvQ5MTOxd55YWPRd50gqAGLl_hjKZ0jidzZQST7Ol1jo7nYr6SmK6uFOjqvbAWCSg3xwlbJJyqtFiy-KXmvNaChRVbCOXDnL51VbDEGrKiP1mNv92BfDp0mJeFtkxwDc_bmMy6g50sx9F9Gtg9xRBinsaD4vK1_KTJ6-mv4OR1B4V2ZjqrAs4ucLv6hiDnEnZYtDemxVynl7nNHaPU-13ieGqqjZX6n-lc8DvyFJAK75m2QzaFahYUwwSJ4axOoBOKwIX1TTS01hsvjI22-EhydDjVxlwzZ9fflmH8KPsiGA7fXekHDyw=w78-h6-no'
                    />
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3} align='center'>
                    <img
                        alt='Troy - CEO & President'
                        src='https://lh3.googleusercontent.com/qyYy8GHpPWDOenus9QtzBCqRhXmalwkCpi7rUgOxVwFIOwyAcAn0HvL2xMTkocp4aTqBta-LHLYDYPxv3dqbMViv60ueZ60RHH0q3Tc_MVbbn3hplplqNrKLpEFxPevgzmclky0yge0RTDFUeynEfHQ2PWCNvQFYq9987dDboiEhVj_VTWCjg9q5o_6JVcYQ2qZkb6MIU1wKANhflnPxHw1MVDKpvvmSceJcsaC1cS-NLgcUypbLMyLAyCCgL-5Z5rUfFqAEwbYtuMqBmKDZOgitY7CFNaYsw6Xh_3QLYC7SHwko5_Y9IlHfUvn-6Qx9dEuUPEo3d8a6E4slPTlVIaYB1C8INbTcmCmvlgfxD_r6FIbLlzF3dzdRheqFXepew8Kii4kkFIIo0IKEDsU5Mvqznr1iTkFq8FbpEnqHKphnik9GdKF6KaP3Ajs74ZcVi-K3BSN1AvT35VY3oTqtxaOV41wPAprrQDeKVhte_mOC4c9lNHBE5PRoml1wHHFyN-sWgQiCJVyk8dnne4mWvg6mt9kjGA6YBjFEZ3Vu7DBLkoM6moPeJQgURehKn1pAZSLeZyUVSowdk_GRZDzyO77IYAcDAPND-AkoOo669S4Oz00VSQ7Qar78LqhDiIaz8WvB1nONiiADQ73FkQxmybKyMtAETLOjZXzcn7dMQLLmk64zJ7oXM_mzbzC93A=w248-h302-no'
                        className={classes.profileImageStyle}
                    />
                    <Typography variant='subtitle1' className={classes.profileTitleStyle}>
                        TROY PERRY
                    </Typography>
                    <Typography variant='subtitle1' className={classes.profileDescStyle}>
                        CEO & President 
                    </Typography>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3} align='center'>
                    <img
                        alt='Charles Vrana - President'
                        src='https://lh3.googleusercontent.com/NX82slMNqB8xGZovCh8aA7bymqHJBp_YQd82e6MdI2v943jU8zk8wY-g0JSuzQOQaIAR6yUSp3WpGqcd-RTYHZeUUO10e_lg0Pj8tXDa356joLKEtDLEj1wkY_Hkd3MWv-tGIg0kqUAjpR8aX8Hgo999No6ku0KqlEfxU2NPUp9DXwfHOGBp97vuzocEGoYsEKyw2BylvAAIw_vP4UZ_CA5EQ9RAI2JEZPLUvLNQvPwCRkqIiCdQC-Ahx0fk--OWhdgHQjmD2s2xtOmHjb_9M2msU4x0-Cua1v1zqrCqjfgOY8CzIaVlAgoUzKMO0DNqPUuDibXYXhzAZw7xg1AWMetKqGHeBTnqFRpYGkutBO_ia1YCvSinorOmNHmCdaTKe3N79gq_fLl2Dp94HP8lKJ_a2vykaLbNcEUAxB70ibFXoJtUabfL8Ub6Aigec2JDOP5nXqc-bFDXsjGd74X_p2w1gCt4W_d4r_JgWDC4XBP1il5KH4NqFY3GSs5vJMsbHfVTVjDH4DZVWsnINtIUyWmvefZHJ1X3bx-LY47ehz44x4Z01pKM_h_zv5Y4347a9AoaoPXpPhaBxVQ5aHa9h67psfdOgqvyu0gZcn231mTQ4bxT_HXxh4jq5Vz5kcqmhKuzN2s9bJm_pB6e_4CKDtUqZOHBI931oCAdHETk_nGywgU4M_aTR2-wKKW9xg=w246-h298-no'
                        className={classes.profileImageStyle}
                    />
                    <Typography variant='subtitle1' className={classes.profileTitleStyle}>
                        CHARLES VRANA
                    </Typography>
                    <Typography variant='subtitle1' className={classes.profileDescStyle}>
                        President 
                    </Typography>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3} align='center'>
                    <img
                        alt='Jeff - Controller'
                        src='https://lh3.googleusercontent.com/7XaDooSTY1CC6DS9datibTG-IAMA9UXXcOgmWxNzof2AX0IUvXzuitZM4Z6VUGxn8zJkGNI0PuZOSGZ-Y99r3FXvUJghzA9x6jjLfwQaP7C-9kgG8hywUdrvK7lbyx_SnMegUjdXMyN_RpeYqtOAp7dyRac7iqG3nQMvuUozQ1Ftdd-n6-ByxaM3Lnz7wP4yhn7F_nMu_gRFpF36aWraDRoEwhZb6Oc9L46OW0TBWxyffX0gUF_sLMI0vVVM9CN3m_Oi6vEusmlPr_X6BjG1-K275b8OGKMs7FREc1PhcMmAQoecTuMfdyTMjigXulpjHkMOHLY7CbNo165QDRmcnviamRjjlCMAuJlp91ZgSx3zexcn09s0GQXFQrWfBR5jjqm0acHu6yPmIlw8Je90dioRbakI7ifomEVsycgOldZB60lQTi8Xbh6Vb2JlAyhmBq9hB7RUaCojy74QtA56g1--8pSDOe_pF1aB6NGjKU2w1zQ_whFDo-zzg7ZOtlhqY3vPXv-UpR-qcbDHurFekFQbk0HD4cp30OTqITkvs33DAH9jzkvRX6wjlt-Io0md-k18S7lsrX2fR2pc-MQRHY06vvfsNwaux2nNncxkG8D9rRsZmFVN7EZpO1npaD7HpEAfA7Kwe-L-R2O5cq6i-p9utK3GAh9SyESYYBQ4E26c10N5M8hiMAnt7eXGJw=w244-h298-no'
                        className={classes.profileImageStyle}
                    />
                    <Typography variant='subtitle1' className={classes.profileTitleStyle}>
                        JEFF JEZEWSKI
                    </Typography>
                    <Typography variant='subtitle1' className={classes.profileDescStyle}>
                        Controller
                    </Typography>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3} align='center'>
                    <img
                        alt='John - Director of Preconstruction'
                        src='https://lh3.googleusercontent.com/fkrZC-DcDr_XB8xueLl5k6FkzHuRToLFbuxp9BCBNt2oDeCcCkm6sRkrDpq_jk_z3iujW_x1FqxaOPNNAlVl1ChIDNd2i-N_-0Q_XVoF-1kRHA5o489xWweDv41I0YWfXwQD4vnjOOYHvtgoVlH1lypCa1DRJQibIFA5ehHTu9x3pBDN32hFia9zgVVgMkOQnHSuhilzgWPEU7HDGgnQojJxRjd9xOsrvVmN3ZEDyRFENWzIuCqsCdFfaAIa4_UOSuekXEw0sZUbLWK2iljCGszkOhxv8UtAaKVDRZEythd_kplii83JCQc7ZLn8geLc13HKVz6K-4-x_hSKAfiiF0Bz32Tc8lR7k75aKCJVp2yt8jN5ucANtRndi0_YwKQm4dY3KGa7Y6N3oSmK9YKw98BpN1iL3TuNFlHIBpHtsTYg0zJVXG3F9h1K39QDL75JutXs6VnwSlevexcrxzUBSGaC2odg9XOJH5-4gtlwPxj25cKaeygTrhO5keF3jjHHTAzsBbPr3UYohPRKg_Ctn66Q4Hu1vqJF-0Tbwdv4sSQ0MLkqUy2u_Q9yTXsFADNigSu0A9NKL9lEA8RDhb1H0DC1wuPWAy4v4S6Q8XppC6_JrIRujK3AY2Z76o9y9s7buSmsrvCtmkfMkU_HRZXRBp4lWs4UTZEwMNykQ78g4yIJMG8E3MukCTHcT4rv1Q=w246-h300-no'
                        className={classes.profileImageStyle}
                    />
                    <Typography variant='subtitle1' className={classes.profileTitleStyle}>
                        JOHN FARSON
                    </Typography>
                    <Typography variant='subtitle1' className={classes.profileDescStyle}>
                        Director of Preconstruction
                    </Typography>
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
};

export default About;