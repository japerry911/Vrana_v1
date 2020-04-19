import React from 'react';
import { useStyles } from './CommercialStyles';
import CommonHeader from '../../../../components/CommonHeader/CommonHeader';
import Card from '../../../../components/Card/Card';
import Grid from '@material-ui/core/Grid';

const Commercial = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.whiteContainerStyle}>
            <Grid container spacing={0} justify='center'>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center'>
                    <CommonHeader
                        headerText='COMMERCIAL'
                        subHeaderText='OUR WORK'
                        headerTextColor='dark'
                        dividerColor='dark'
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='right' className={classes.gridLeftItemCardStyle}>
                    <Card 
                        alt='Ameristar Casino'
                        imageUrl='https://lh3.googleusercontent.com/BxwGpIXZ_P_nPdTjNvzGBYDZgRG_0wXg0VcwBHWLTjwx5Kn6IcdHW9kSiB6cqkOF-q_4VZVW8NrT2U5-NNIiSOzZ0M_NcdgxYixz_mw02FLnjby5-Za9UanPm4xMYflylf2JFsOJLM7fhzopBHAlTFuRsBM0Xu7R6xp3l59kuFTJthqL-lX_te05wEdPDuF5sWNTj3hA6papMtpHzzfD5M9YPdo9XFeMtCzssh5gkOquYseCGUvB90Oo_Ad-7WNDAGZRvE0WlBYb1zXlImi2bvD3S4ggR3wLK6vicK6sUC6UeqEZRaiAPoCNOXywkaXRlyX_w21N-lWuTCJB5pwDVrHEqjC60QD1ysckO_KvWPsaFbW0wIWYkL3_Knhr2oUlUHIeYyiqYeo_QNzywWmas3qw2rHUEinlBuu1_8n3EQ-bA1sLU494DXaGgfESVeetILnnEu7_KxoG8KuIgw8cunwcAivzUilNQLp8Ogguxo_wens-AqYfCd5VxD7aUluhbTWRy4SmVg0JjodZNP7e8tAEQsnMsrNMpPzmtUKYo55NV7_19DvVOjw0WQXeMY7z7HjWmtp_AB3tczz9Msljm5g_KP3AlSdHFhBhINUCJTT__Ha71o8e4godmfRRqfm02gGXnfkbqVVHn-rne2UUgtEqtzpAl1Cs8SPSFiUuumeHbMMEv1l0fZAg8mx__Q=w389-h346-no'
                        headerText='AMERISTAR'
                        headerAlign='center'
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='left' className={classes.gridRightItemCardStyle}>
                    <Card 
                        alt='Omaha Steaks building'
                        imageUrl='https://lh3.googleusercontent.com/mjxwGk4p1lOFsD0T9aPjbsj7SJAWiP-RJF6EY1WI4SeB13CJFbQu21H25pqCgemYqWKY1pDXFwwXjeCe8etdsfrXrrbQEHmGeh75x8uYmKQD4qXNFLMXmWyfrul67vXfKwQem4nXoKF8Q-11GHaoV4Clt0Woj4aTNg4C5IoqtgTuolVA-fPUEYKoeYS5_pkAUuykBbuqlVdE8_00WCqdGpQ3iSvN6cE-gczCs-wMBPXB6csTgWwoy8aXqDuk1MO9XkcPmq0-QLAU8DtShFsvs1FziBzFHdvMvrBUyit0GPX5twvPYWpQq_iUCgEhEz7blHmQ4eHu2uE5rKvLN8wp5qVT1H11Hnwm5NkyoqY9-49cFjgHORrYryYLmSpi23tEfkM-nre2qbSYzicN4oUAHEoR1nHySnYvQ3d9RPf2IOCM4fbFqmje--S9oQgss4yBST-iXsFP7VB315_VIPWnbyfhi1u-BKQYTCmEViDLUWpnbNyzu5C1Fj7yOAAe-1eIZdGU4FGqHa4EAKyJPu8r_fFpSKs6mJkXf37cQ3bs5Jm_nJkKPBO9MNlSx-23iLAIx2TRbR0WcLprXrVA2XlhfYnfU1J9TOl79dFIkFKYaL8Xm5irn2mau7rvmj4rwgtt8GKswUByIQZgXvLQhH6N8A-s47LzR_G3yzk4pSbXrHH9zYLhntpEe1RMRaDNIg=w558-h496-no'
                        headerText='OMAHA STEAKS'
                        headerAlign='center'
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='right' className={classes.gridLeftItemCardStyle}>
                    <Card 
                        alt='Steck Laboratories'
                        imageUrl='https://lh3.googleusercontent.com/EPiK7PXXNYVhhD3Tb2vzDzhICfjuSyCHVA0RJ1R36V49UMiIOboriBDxdAp1e5VHdfp4syRoysqP1rp2toJ5fupLHKLGKvMKMmBhfgHUSvmQpw6WbVrjd9uyAGdpoY05DXABbZnttV4uZN2-KDvGuqoNi5x2f-7Y0kIJY1F_t1RjHhZBw2SUp8ODayRgz5N8F9Dfaw4i5jUQHitxO6I3tRMIpANuNt5Xtq4TDgRIegEmzDbXUJuWd9ZfaOq0K9s5b9WBI4AcUvuqaiHg2LKMrz-9VfZdWhKVHtUJttMVg_xud5LSM9-VLhTaVq5z2TIUCehK0ikKKKCENxUfUMIfduC2Dh9cZtfG_4qxjrz0kvopFbvp2-0NGHDGel1x-bpMSIiW-nDlsNZ-FDhjyTuLziJ6HDRpVCHWMEdy-a3qPbiP7ctQOJ1D0WPfZYHEt21Af47eDxoaSU7Saooktap81-9_CYzA1L2Kac3iLTOwQuh64uaNr2WdHochIhTyPmxUMjYt21FLBi3hRNMIkQxC-hYN7Cpi7qjrRUr8LyRu0W-A1rcLJno7b-cf1Fh39BPZ_TOYz_gghEmdCkfQKJzeq-PhcF3Fzwh6MGnOhM1NbWhiU7KOnAuFw1bv80JBHUuNL-DK8H1_ppX9ZMI_Ynab7zfJpH0T-DXM4psOJh_2ghO9Y2PFEe6fkguPIMaa8A=w556-h500-no'
                        headerText='STECK LABORATORIES'
                        headerAlign='center'
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='left' className={classes.gridRightItemCardStyle}>
                    <Card 
                        alt="Rotella's Italian Bakery"
                        imageUrl='https://lh3.googleusercontent.com/t9jUIwgeuRaVWa5By-3sQOkaGbVkQtoguefiveFdaGeCoU7PvRoBcsz4T2HO0NRzYQ_AXbIfSBG34IOU8CfnlxlNBKdtFt6xkMk7XdLRtOOU_HauV9afbfIMZn5A5H42mBcfVrQNwVt8M9ArJ951Y7U-ZwLXYXms8Lmh_l1v0pIt-1GWdw172W_HycLpdtkc26OcJzm8W4hkc71HYAtDCRiqMZcDUUy1vArIxbz8EdG-ZF1k2A0z2l_JLadIxt70CETFk6Jr0S1WrRWITJt5LytGFSZ2zMu9nWL___dhBij1OzDozOiSlVMlZp28Gi3AcQi3_Y-shZGwAVeAV_9QaVdxFLiiIKTdU5zqt0JHQVdvD79lSjFM-HfKkPw1RoMvzHGeggByMD41novzkW9npoaegCG6zGgoJREcdZXk4PlXNmTiR-CacsGBpsxky2i1aOS08FAj3FQBa0IRNZU3LUt1xhr13N4lTIZd32crW2r0Uq-N3TbDYybS5ic4IIFo_w_A-iMovuHrURN-1O7T2hXKDR8FmS2qDcABTJ-hcu1N8Hd9xri3Y839_DMAX-PYxLaV4KmDWW_2_rJqiUMLpctqHcZkj4FJngEm_5QjCZcj6U09_vqYJamzdXN7tuajXwx-AanpaAIFs5tlc3U_QH50cBe5MHcTvbg-ABOlTepPRzAtqgVmS1sPStodFA=w552-h494-no'
                        headerText="ROTELLA'S ITALIAN BAKERY"
                        headerAlign='center'
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='right' className={classes.gridLeftItemCardStyle}>
                    <Card 
                        alt='Net Renovation & Addition'
                        imageUrl='https://lh3.googleusercontent.com/k5QWabmjBj5YXBn_McRCaE-geoPo2JthZ2_XuRxtB7HoZBT_YKSOpNzu_IKCIZt-g9eZjh4QNq7ZKnQRKqu1MtrzT98tXAdj5-V2mWhEkq-eih5qgWVQ8x3YUZtdodfh6dOO-gAtwIPW2-HTQVwxmEQSeBo9743e9xe_mNXgJgxr6-XX081JLf5FMD21sELijGBCK3_iETQ6Ip6qNZri7eLr8UQ4iFEXL7NjbhlZ8jr_9REV_e6XqHymNauPTMLjH_BBB3ZdC3e92hGcXfwTHriqrMdIXtE35r31_2pTb69ipF8iS7F9V6a__ydcd-6ml40Pc4blg5PvWftFyIpvAXCwNArT6JgZXtL6ks-l4cCSxyfWFiEIjEDJro14ULxrwabjTtn3QWmBdhnVPRUTRmEMI8IVPI4io55b9WaCO5hIhdfTWEv365A_XbkVJklC40ODT7sEHKyYvmiolpq1QTA3mnnS0Yit_8lVS295YWve2SQ0bUIjaWz5Q4D_B7a0WrIKVuJ9wGoDqYeTdRFr_9t-AV1vscUA2FvbOJBiGcXEagWiBVB5vdg3B6CVL_w2EGZxaXG0Nkbmk0RY7MbcxkrmM9Kd0uA1pLoJMjh-GkUFn_7zeVEy8igpDz8ZCMAIv3_A0IZTxiwkaVzR5inj5JWkS_vkFPUwlHNz988OgpIO9m-8iTIa5KuH_XJBPA=w358-h319-no'
                        headerText='NET RENOVATION & ADDITION'
                        headerAlign='center'
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='left' className={classes.gridRightItemCardStyle}>
                    <Card 
                        alt='Deer Creek Clubhouse'
                        imageUrl='https://lh3.googleusercontent.com/tu874-uaaJ3Rnew_a8F51uyqdQQCoh5fAoXPr2ADGHSmwjVBRr-1bKOvS-qIg5HBVdHUFNBpxqBmDkR9FlLhgdZAPgmxb66c28tGDZQO7LgkKVhS3s2gsp0BElQUG77K2oKiG-eiZcEjqWkd6tFoywiI73gnKwvU5Zo56RlxpCvy0L9iz5TxigDdLyceCsLg9VTJ5C7Tds2mk5416_YFICRCMW7pFM7EdeSupfCQnXyUyEg7C04lVJSz-GtjUEellOWlLBzef2LQ_rafmO2iLlWyOztaAvLGeQQcJPxHSW2fBhbAV5_YgZx5KkZmVWRYD-bvRaHp-vqOk41sAmx4u4dGp5CwHHfRkdnDQpU8OPPenlG_BPLlUvSfaulGon4xnB4M1V2ittn8ZWPU6wh9uGCJztXUY4n3aX9xVBJc9ZAvVxdKAk5hvk3l9Euj2N_aPwWxeOEBTzvmCKebPcpVEPpilZTULtS9cyNbGtl2sIIPAbyx0hAqL2veyoH6Ti0N0ke-99rUeEpO5N4zS1-o42iy3jmfe_X3mivzb2PlXzLdU3Ahape90iXW-PiVuwZg093TNSDh5aRVxY2I69K44AYdlFEiJLfIp7l_WiFXd7vVcFJqCxwEMk6Uw_YnJfa99vbWkrEZXBB6f66Qd_kOL82HLYIEPZtIaleVTa3XWcGQ25e_2iXOGvI0RmXxNg=w558-h498-no'
                        headerText='DEER CREEK CLUBHOUSE'
                        headerAlign='center'
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='right' className={classes.gridLeftItemCardStyle}>
                    <Card 
                        alt='Cassling Diagnostic Imaging'
                        imageUrl='https://lh3.googleusercontent.com/ywkW9F0SFMuJ7Qm8QGWkgPxqj5oFtlyyo0sT3lka3Fu9JDp6B3aunZGty_e5MvkCVAX6GlWmOqumNcFHuqInPoK46N3AyI3WrW3F2xXj37p0o8yidwyD9zfr8K9bZIs2rwQ_TYRWHYotoz9pXIlh5JtnWSP_TMDW97eAIYeyDDOheszCWAUqeYDOgfhfDjSPuZURjlBOrfSV3rikd3J1SApl7IPWXsvdPmCAZVbt7AbTqOqM93uh4zY5PUtmu_ENXV-IAd-KqGpHyRcmjvsUOqxXUP3wbncoBzcX1OGKEAnUVFRFmXOC3U4Log_Up3TYRTC18q3Y9NDjsThTeTiRqBLdUCQyQpv457LEbVhgX1iwbbew5t7LFpbz49VmzxnCcVz-nm1VZMpuB_2_uDBHMWArLmbK_G2vOD2myWuj1cvUM3WIT3qqrrr2G3xbaMGItlvMIf5v9GxMjbOTiS1KQH8zlw5D9Z_F6mCpqdcIIQlJgAzp0clKr73IPrx2Pb-pEloFVJoXq0lTBeicSGS0q5TJTLSlK3pibkfKqzlDPCeoXF961WoSyxaTxM8TgRlGlZxk0wKmuUfBJT9R63reCRiP0Q9mIGGK1TNtLHy8Rjos3DvHux4GsCOvOum1HCoB1cXC419zczuHRDbbRMsH5NzNrkuEB86Ew9ADtxHgfwGaC4oiKT3gEog5eBZc9w=w558-h496-no'
                        headerText='CASSLING DIAGNOSTIC IMAGING'
                        headerAlign='center'
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='left' className={classes.gridRightItemCardStyle}>
                    <Card 
                        alt='Morgan Place'
                        imageUrl='https://lh3.googleusercontent.com/bi3V0NW2OD-_e-FMrw_9UsZ_QCs9PpBSHW-EnzK4MAv-Bof2gAF8HBJJPgKCjPRKQh7IjIapavU7_kGGEkw4VvMR6OaVSoKVG7PZSo-cdY9-TqGjo2GyuqRUHEKsMAdasmvpdaHYriOcfGbsReKLxdTCy_2HXY15yj5KDzmf3WOTXDF2q_hsQY_eYlXFt7iedHCjvVExHK1IK73wZMFUYfvBrl32IWvfz2gZ2nrYwqR8SKzjnNWMgKpR2b6TBGVWR67aj-Zob77bPliQaxAlKNvZcRZYyFtrOdl90YwG2JCmxMcFNCctapq0-_wrK6vG6QO9773u4Dyn5BcIE71WyFVHCkOwhp9O_alt9GXXHvdH3yFGUFPBL2OkqmhE-0193pUfe89bbYQtlWkFQ6wFfMHFPwTUglVWGZi-VA4zfAdFks7FrRLC2FUfCRCEVqj9ApRJx2uP-WXG0irmrCoCmGX7m2s68oTfbjb_WoeED8tatZioRBhsVUMzLDkRG7t5fc6YGYMmcxTv-9Y4Q5P7_-FAO0CldAAzxefJo7jwMmaca5P31v5hxPOZFHQn8TwuqOgHzrAVLgYy-jio689SyxYTSIntZa117JjCAvE6Y3ertZeaY7sG35_8SZojuid2T8XgwtsZMP_HpXr8ZYc_VFwmQgzUNchFcBGplFL3jm9E6piIpRQsAZOQYHIscw=w558-h494-no'
                        headerText='MORGAN PLACE'
                        headerAlign='center'
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='right' className={classes.gridLeftItemCardStyle}>
                    <Card 
                        alt='Mud Florence Water Plant'
                        imageUrl='https://lh3.googleusercontent.com/UmzsTeKIbnGqGtNGGUJYXMLPwd2k8gXcE1qdRDk9I_lqsOyw0V3B4-gP0qtIo7aOOWoHeLeVooNsfj8J3IjsIpllRgrsrR2TZhkp0uT8aauo9lsgv0sLQ-XgS_W8VxEVXZ3qsWCknUun5q28XcMWMNn1zzkb5yQf-i-8oAN5PJtz458C2vN9Wgm96Qd3_wv49eU5RATR0otKxG305IlP9OOOhj4hzfmWqy3dvShNQ5Z84Hj8MWcvjtIYTkJenogL4M2wsbmlabVQWeGakKUW2KPyggz6ls_q-7lAmXa1HgfWzly8XKVFn3u_K1fEYg21gvu8sfoHuJmxNPSR18L4f3JSsIHuUDqJv1fnHCjULk58Zv4S6xCYMmHJQwx-2FbdOVVWMBCfL291rqavJBL0RfFpFhEnbd_z41rBUsQdqyv-BX1xEuWA6Xc_muSuGVNOmtaeTL8Ibkyw6oTrOW3WhKnU9h34CXxnqQW_mCig-B-0B9POWUzgTcyCoD9ir2_0zsGlZFwDm8I4vKkKx66aRX1JNL9-LKoBSP7Ayus1uN25tdjNflq0dHY4Cil8g8vrk9TZUvqZPulGzR5ccLbyMSIjwATBYFrrzFTDd56ucG2bC3grwRtMQLEG27N9B_zyBVDH7xJkclicF_ngpnUlSxlvZTurOlq1MH5IfUc5a2SA9lCsDQor6DpBsXQjbA=w357-h316-no'
                        headerText='MUD FLORENCE WATER PLANT'
                        headerAlign='center'
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='left' className={classes.gridRightItemCardStyle}>
                    <Card 
                        alt='Douglas County Hospital'
                        imageUrl='https://lh3.googleusercontent.com/LcNxSr18vtQ6G_vqMTW3XDqKT2SgZC-2zHvH1-RrfejglgzJMKj21N78Hv4ExQDuRq1VHM1tLoM2DWB01Uuc_QHqulZv_yzK55621dqr0GmwyRjsf0QbhvAI6bH6dN8kqRfq3J9U3DTfUzbRvTeo46n9gvAv97cpfruxKRlrcfsRAs1KHBFVskYZr5yauZ1MWKaOd5oNLG5tQZNJow2xWwsJgtnDVgHsfomQgeBzhN891wL8cOysohdgF2AwrB4gCY7JaRWzphL_XBjCSXhmIUv1V5u5omEYY12MueVOMcL-GhrGixBlIdDgBjG3Ofakr-jHZ0xVbz2yTMcZF_ASKGghp6LTMNLke-HOxUSq8oSI3pn4JdnMBjhwCzwoplbNYYML8ygGskBsxxPDyi_UkYbpbLXqqkdM68EE2j1Jw_sUJsnkOmbGpuHC-YPbInPhCEVVz9Rn-0PL34pDaBbqUjxkv5DUWUaWBPY4Vb8_1xBd-B-K8u6X0tEwYQOHZwW95_LCntr5R4Nx7lmLfCH6jVqGPmXNonQgfGHuYTmFkDYxIc-imwDNWDm3_wMa7nj2KaKkkUaIse8BBLDK9T9FFS11leWnLv9A7MzGkcehEN1_DOpNP6m1HfD0yeGI9OaecP8bJ8uA7dX_kuImMAbvv66Yp4VhTP1FP0OxPlZDRHBCEa-OXuhoS2tr9Fthdg=w560-h494-no'
                        headerText='DOUGLAS COUNTY HOSPITAL'
                        headerAlign='center'
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default Commercial;