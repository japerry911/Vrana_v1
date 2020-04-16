import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useStyles } from './HomeStyles';

const Home = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={0}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <div className={classes.greetingDiv}>
                            <Typography variant='h2' className={classes.greetingHeaderTextStyle}>
                                BUILDING CONFIDENCE SINCE 1909
                            </Typography>
                            <Typography variant='h4' className={classes.greetingSubtitleTextStyle}>
                                We combine the strength of a large general contractor with the responsiveness
                                and economic advantages of a closely held family business.
                            </Typography>
                            <div className={classes.buttonsDivStyle}>
                                <Button className={classes.learnMoreButtonStyle}>LEARN MORE</Button>
                                <Button className={classes.ourProjectsButtonStyle}>OUR PROJECTS</Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center'>
                        <Typography variant='body1' className={classes.redSubtitleTextStyle}>
                            QUALITY CONSTRUCTION
                        </Typography>
                        <Typography variant='h3' className={classes.greyTitleTextStyle}>
                            WHAT WE OFFER
                        </Typography>
                        <img
                            alt='Divider Lines'
                            src='https://lh3.googleusercontent.com/INjEAK2y6tTD1E6E13RpomffqWM3yBCDBWDeyIjm4U640N-PYM61BIm4yEbirqMApY6LEmKx67KxUs4MRK85n-lTdEDBozsf-kz8fl1VmMoAx8wyTwClvjmpgNTiGL7vW0VhuADOluj3HDEo_vMH6b-Vu8r7cJvgRsayIJn_l3L63FNdCY0GylJghT-gx21XNWoWt_vmk8yEGue3ImIo2bBRItqss3lWuDzDdSxvwp-DC1jN5drWuCKvEhpkDkBYhc7k8BA2ScWFMKwBHo_qz0bWcGnuggM5JrqQtaFZ8A5giI3hkBUQb1L_rJeFbZxWs_HruFP5b3rz4a7yk5Sc12rm5WAEmNt017f056LOvre6TayvRpsfQelaB-gq2mtXdkIOmSfqNWuoNIOTAhNy2d1JGHnF93SmrIreXZJUtX1SyAtGEDQmCEmLuUCWlo4yM3uiDIPLmFHCnEfZPXuqQd_UQ2SbIcFO-UYbUQGcg4keJMABfxHjgjnDSx8YPaZaetSvbZDbnjSfJzg7gBAr9MIup3_9BwPdqVNyu5VgFTUndEQ2okVeQDHB_GjqjiBLylLh114ILB5YsATvU_I2Su8XxbaK-OCqrZ-kw0kFWd81F5h6cmoxt3ThL_fd27rQUO34fzXCPBsqXAoWoyFVgxgmC-BsvrUVyP0ilrqhY9H4Yy_si7favNitK_wWBg=w78-h6-no'
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1} className={classes.offerContainerStyle}>
                    <Grid item xs={4} sm={4} md={4} lg={4} xl={4} align='center'>
                        <img
                            alt='Finished building'
                            className={classes.offerImageStyle}
                            src='https://lh3.googleusercontent.com/Up28m-Krvje8BjxVjM9rbwg7xO68f7wv1iQsFYQf9bPRpYJ1k8EwlpWU3iKkQfMgsc-2S9OFTEL_V_k6AkoRlELny5JPThu4NRv3WtFMAbHiWP6gxkwmW3NOWhB2WGjEDhiw_vWO7GzTBWjwQS3ZEDEZ9UCql3IfFkh9tNQJTguwLcSEmYxI0rkq8ZfdggjMEqcGwXdt0Hgawx2lmk33olI3IvphVWCN85P1s_msuGcW9k6Sr_o7k-OlRC33vc5h0S4m6bO6F401z6Y_vpNIDfrORaFjmvtbjuVtzFGSvntzkxj11xpaSloa_SqwQ9iTUan9zxxZ0kq_DLpm8cl_cpyAOeCaRzXvnDVU72jBPUngV7SmHLJ9dxU7hSgXwezoXrq2Y-qTI8S-JO38wwJ7Z74zuGLX6PddnUIWCKe9RdSs4IjTZvxnLwSI7HeHTjcGlQ18IU5iUadS5pmwvOdO5se2NCSpt-Gd5XSeXTgDVGnm7gPqFlj59tTA2DNde05K1Zfj4s7ae52xMG1pw6-WF01I6QY9-B7eXaexJeJ-vcF8a3gcnZ5pLX_uTwqrEpT_y7zhd47s1RlsbfvBKrnLG2QIZHBUi3g1Ipf40VxqmQBtXGkRKkrrflkA5bDto93U5u1GPeTycPn3Pyk49v2QfqOIuX4PqMrQP4Y7bV04e0KS7Ldek7GZUPB3As_b7A=w275-h183-no'
                        />
                        <Typography variant='h6' className={classes.offerExTitleStyle}>
                            CONSTRUCTION EXCELLENCE
                        </Typography>
                        <Typography variant='body2' className={classes.offerExDescStyle}>
                            We deliver both large and small construction projects including Commercial, Retail, Housing, Religious,
                            Educational, Parking Structures, and Civil.
                        </Typography>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4} xl={4} align='center'>
                        <img 
                            alt='Meeting in Gym'
                            className={classes.offerImageStyle}
                            src='https://lh3.googleusercontent.com/LOyEpK6-KmjJsPz8UfjSSudU_aBUaQ_h-w9Pu9pGx9SvZyRv1K0hooWtt83kTtNdfICajaxnZ16CBdQgBsqxd3qSApQa14XyNwC9aa1R1IpkKtwBTEp6G9biFRgl2OgRbo7FcyNHVYOxJuEyhT12BTYcGaX1ZsAha9qPADfNBeN6vbIXW5UNTlj2HkkZnDFDnlQDgMWuURo73_T7xwt72u1sTXh5jifUgjJLcW83AW8jX8XK6L41VDIR_O-djxM_S74kVW0FBXheESOPMeg6PDE99qlX43W3Vys2pXBP2KhNG99BaTSmcxTgfDtrx0E29J3ExYzm6kDiXIIxUBqQh0zNQYCcPUaPctygJJiXf0IkvvVllwyWgHreSgZc3MuzvPR2PexKwKYt38gpIrzrVu1E_0Q5Q_21q9knG9eAHCgXt9WV31p54nmn3YA6mXwVetpMQqnH5f5jrNICCwXr_yORxU2E6dMW1GyLAJwoLFGJiMJ-kLaaXL9PlEAnL1pxHAL55iYKQ0WDlim5BXvabpt9G7wG3rDhahE06C8viFV4hUsR69LbkNFOEGek1cqj2dbbRrKHapJRHlpRTI2tFVYCnQPogbwO8bP6mGvHJSoVcGV0hJbKUsd4eF0IYZerQHcEtLkbKvaHklYEnJBL4fcaZ4iUP-4tCCrz2OMCrLmrRTl3Hp88SXBtKPqHjA=w1200-h800-no'
                        />
                        <Typography variant='h6' className={classes.offerExTitleStyle}>
                            SKILLED WORKMANSHIP
                        </Typography>
                        <Typography variant='body2' className={classes.offerExDescStyle}>
                            Our experienced team of construction professionals has the skills to deliver high quality projects every time - no matter
                            the size and scope.
                        </Typography>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4} xl={4} align='center'>
                        <img 
                            alt='Writing on Clipboard'
                            className={classes.offerImageStyle}
                            src='https://lh3.googleusercontent.com/tHaUCHpZRNTnS7eq7Hlo3P9ZcyKy38PuSlAgycHIpPAT3z4vO5AkWRfH_YZ5_vKpVGgLjbkUgatNH5yvE9PXTuE6CUZi9Dw4my7rn5ZCW9cEBh1jq9MBBBm4jewqjVv2VG_fgqv9KxOgePt75_LgCdf0BINs6UPGb7BNlr1Xp94uIRpH87_jKQXgpH3l6ZTkpllZ4xX4P2P2XZ-vE7yVfq5VvauDYjmKYhjkWMaOnuPGeM6Mms4cx7mHhBWA49omXMEuvkDbU2CZDKVjQqNeHrN8ib7XIpkcTHo0-Xe_l5DrtezJ8ICaGwXSTGUcHp4fafeyDkY_tHxS2Le-PWLsKF3mj--NGNw_iLCP5wYugZAbeFeHOpKVsiFK6gv8fZJU-fusY21sVFGDHgajyCHY3ExEHWcWEmHYzMyZltvMNiw-DMROwnl0EZHynuindf_RGrfI7MeseELPL-aH1EaY7uG1chNZor7d4jqcosLEzFjf-XvOLJ7m5fPKCFHvlo3k0HkV0lXGLeahnA0QK5WRq-a54XGRMp3zu_MsyQhtvuBe9p6b4E7HUmyEKeGHZboWuSjyy_QIeHPAFw1f5Xe-5RgmfOrENw0_A4voPIsTKgAlcuTnc31fJr1lpcqktba0YrrbfRqLqKyRMT9c28jk-9KWuuHSD6bx5aqyZ6oJZD5OPtsKqdnRYAkI1ettxQ=w1000-h667-no'
                        />
                        <Typography variant='h6' className={classes.offerExTitleStyle}>
                            PROJECT MANAGEMENT
                        </Typography>
                        <Typography variant='body2' className={classes.offerExDescStyle}>
                            Our proven and seamless workflow allows us to manage dynamic, time-sensitive construction projects of all sizes on 
                            time and on budget.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={0} className={classes.containerGreyStyle}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center'>
                        <Typography variant='body1' className={classes.redSubtitleTextStyle}>
                            PORTFOLIO
                        </Typography>
                        <Typography variant='h3' className={classes.whiteTitleTextStyle}>
                            OUR PROJECTS
                        </Typography>
                        <img
                            alt='Divider Lines'
                            src='https://lh3.googleusercontent.com/eOL4ByNZdsEe5047ZY_tPaUASAddInxOp_n1ey1Cp-y4kopwS8gCSqD6zRfg1RYkdVtuIbSRi4WRVAMcMDT-ybj-s_cfmKujmmrisXuR5xC5qCRMZeNBErgxsAvhgQbtmaLSo6zkGL2xvYlpPjcaqRdDzJzGEzsoMwquIgC7TimXVduaJyYsbr3jTmT1TPf73bNTtGcc3kr9ALXDCCJ2YrGWHbQhObY4muACT2I5pneCOooeYNQIV46Q5CxRFOLHJiwP8__Ow3esZEooHhgh-8ZP1l-EM1WvHi4Z9-ir4K8FOzxn1wintCl2u77nYDWFeuV6rKnvP7C04N1reWiTKESQO6jO56sTt-akuLLVdhrYkw266OK6-4phfiRhd_zhLv-pE6vA5vTU7ipJxe-_ANJsdKICRQXjHcmA7i3hJw0ZtE5VMC8suWsKQ70TYvGKtB8944QL2FM9h4aG77D-WWX9-lW1DVpFiyNY8rs0sjyZCwkuZ90ypTP5gFOG2W22pZkSxuFmrhGLUpBJ5vQhnTLBrwZsHpO2RsOK9h1Q3Hb2ZC9YyEE_fmWC0UUGigcjx1_MDqS4uWTx0fV_iaaoSKqFCZwJOjsRPmuRdumrZO1TnDgusiET-_hOqmLcLcxCJmiadK9q32L2yfOORIOMfzkbrlKHjJ6fXDvSRwHTAqW3qtWSRoJHZzx_pY_WfA=w78-h7-no'
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                        <img
                            className={classes.projectsImageStyle}
                            src='https://lh3.googleusercontent.com/N7ta4x_ds0bAmeZN2I4B6SzQa4azprUz8BPxVbyktnN4e6wBqijOdUzIgmWlIGsppCPIaIo0h0dEKyJPSUR8PusjdmoFZ5gFHn3-oLf_nSh-xiAnAKAChL2zt1NzKrDH8CHTm3g0pu8MkNR9s2VNYdDs845YNde7JXXBwj_AXii0OXv46vtLqq25UyuBcLjEq1mzzfF6TlwNpswjUOWMFe_h81sSiVHMLS0G2FbDgLpFiTGQI5MLX_8cEkkvO4l6WBKOTyttotRzEPTCcBYo0cYOZSIdShko0s3iGnmC_6SLdsaaUFlmSCXS0OERWBe8Pd7dwmArD92EFjmue8hAYmEzNxescKI9snyHFfl0ajmP51eQ0PjRbBG1T8t7y9aeq86IdxN7egkBLahveZVqOuOotsOonwcUI5OXaX_DTr55_DEek0u80WSm8rBX5GxqxtY-CK8oxPXD7OX3UxvmWwrQ8izVY88bupy_dhbn3XXKkclpAkaf6Tk12t6OdgJIZH7Ky8JoItG1f8Y-iCoEaXEczp5SJrPEFGxjbyT-9KVfUucgolAO4bt5nYInN8SqOeWnRlZ1NOfEmet8VlKHHT9Ovvb9hap2KpCb8GfsgFBm7WD7YDpJa0rr9NC3cuJaVT5uPkGMg3p3_Il3lm3okuklJHXkf6-VG4BB3ry41jqjJzEoLoNeTWdzobGP6g=w356-h212-no'
                            alt='Omaha Steaks Finished Building'
                        />
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                        <img 
                            className={classes.projectsImageStyle}
                            src='https://lh3.googleusercontent.com/ZiORZhqrnFZ_yRkMTinD5Wazrvanyg7hpmuuB1yXm7x9xhI3rcBFVty8GndN0eqFiyw8vaFeDGPyR1KsWoLSSlgbjo486G9nfzERIjZ45w6x-KFIGoJpxt_ud4C6h2PHtwnoR6Cr_v9f_Huule8VNq96BIEVmWUnWVV81hi42coz1nB6fm8Uccby0v5QyWGKkfMTqLpCFI4pLN8BOfRQx7ynB168Z4OxUYYNH54AbhydWj_8r-YxEqsbcno995ZZcRUXxd8SNG9PEmzYVsQYXdm94TQTOZMC577KBUEXL-9nSOp2nIWdjYrACG3sq-zibWdxxVjPf3NuldEv-phpzxpf4BpMxLdTSqi35ENq2ZdIgi3DrUdyWAPVjTTiG58QSMPSEIvEgrPZ-gRwPonue9pNhOcsV4Mz8qdGSfpdXn6pt4Vr0QbW5pTD3Ht_-afBX6E28iMfiNQkqmio0ZWNfR0Mv66xhaHoDMQNAS9FykZmH08Rt0oBjyRus7JYLVmaJ3eEGyZmpRVsy5s-261MZWfHtaku2nbWm0o-NTfOmn1d7ViF-6NbNrr35DSqBokzip8n2QGJkGechvfFIn61sPfLev8kMMkfOEalHSjNA6paVPPdgVTp4t_9l9q737JETFIvvtQJfIpEDCv99tb6VNZjVA1pMkoCZ0-rNmZ-V-kX8VFlVGR7VH2fzcn8fA=w362-h214-no'
                            alt="Children's Hospital Finished Building"
                        />
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                        <img 
                            className={classes.projectsImageStyle}
                            src='https://lh3.googleusercontent.com/0DP2WIpsn0z-pydJu2opwqLYbd9UAiQmVHKFXhOFhrfOAbzlcXIzch7d7EngPcW5Vw8pLN2Xn5ocdwpXPb52Am4x1kWNgBEnExV88UBCCvBHhtZxKHf-fnDZAjVDdM70vJCPKWNdkWt8LC3mbFniC2wcalN7gdIcVW-gDjkz6q5ytPOcPXUuSRAcMm_XgMJdyk04UIK12JmPZ82imfE_tcKOoO_laaJ8WJM235po7V7qMcHOBM1w8u-JmDF_1hB6ncA-ftgYGdX71cORiAuOYa_43efkan4mh2RWRWtiqkiM-LQvRHY--mJ_pxTpLrcltBl6qIVnVoGbsU7aFbUbVS5p0pPcGWa6sIi8RGzyDSdey6ZiCVF24gxaOlKt_TaVvm_vrxo3xliReYYfeU1gcnZdJwkb0VUmB9brdIlmNXObWO44DBUHJq7pV591PYf2_RYlf3guAd9Yt2SpzBscMtyakUeGbi5zjQV7Ufg7_GHM2KZj0RqDhg-UWpDMeKt7oXonw7Z_iDJM2nvzETKL4G_VbHmIg2An-x5I6doTPZ__vRO_UlSlJ7vIkUw4sE-5NDw_-__haIbNMqakw9FFRqFatgGJ0KF6cQPAWuLffIMw8i8rJGxNv57wWfyW99k_WAUVyZF4E3fHveZV6mgDyY1URhpy46dg8YtIFGMPgIQ63RzSXBiOVRFfBvJVuw=w358-h214-no'
                            alt="Baker's Finished Building"
                        />
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                        <img
                            className={classes.projectsImageStyle}
                            src='https://lh3.googleusercontent.com/8ui7sV15fA0VO88OLBqqwclNWsOujVv5xnCUX5GIOEU-E-4C0nxu5_MvalGihS-H20dzbPc8iUIqhmEGp63yaum7VaPfdhrI_p4A-7ysHN9S5k5MhkacI_GUgDEV4fVn3PpjEYhmTyEydxxAiLpXzkDCKtq7S78FSLqA_Y_G2TKqqYI3vCQ6nquAwWUi01f3xHxJk0uryxcLA-BHg0GaPz4W01MVKI7_SAnLVm1Akr7vXztlwzeHsG1rG6biD5HBNjBXc4hnU5ht837hO7jQrFCtKzmV56pzdcUYCa3O2k4CTBJVwg2ea4PcJtP5NiUWXZzHf3Y8Oz2kRGqA3MX6B6mk74L3Dc9Xw5EXH-4f-dd22b4FqwmIOBBkLvvWggqOMojpwR7h597qDk7E9U5lLFMOP59R9qHXibx3pPxkYyFLNiOHNFUmOePFdYzlUKKETnvGOr0WR_qyyYTeLf_lttlfv2n0RjbfAaPNmUaxgArG8AWQlKQHSUDjwDEu9Lc-dP2iuT6-4wutyBi7JPUGLK0nxL_Ae7DweAsQiWNaH_WoDAIbi1P3qKCjyv0cHOErIgL1QT7OVtUDTozow8Z5pNWzhICbJIgZ9dG3EgFOXhNBDdER49Bf6MJlaVCfUI-VUvg4qBz0bMUlokyt4XKICorHik5R9o36WUEEl4XSsotgabrPOwtrMpg2d4BnoQ=w340-h214-no'
                            alt='Finished Apartment Building'
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                        <img
                            className={classes.projectsImageStyle}
                            src='https://lh3.googleusercontent.com/VAZCWvhElW_bSw1p385WxcnoUNCQZ_z_uJ4XRdvITzy_IGu1ICaVkVcI3GIwY18LbxWXX1St-mlJjWBp-saNbvmzPm0z0o_3Sp3DP58Hkw1XT_K3H3ejQIgPjgL1kCsvyQ7jh5hNmViKf2-c6acsGjhQTLRPbebLj9sRjFUA1nfLK6op_6TfAqxlbcvHt9btArsy1_N7tDh8QrVbZKk3B3wZ_8VudHvQI4Kil0GS3tZVEfELXsAwvHL7c8hM6nmiljUVi8lrdHXs79Rp5ASCYf4w9WecYCy3IkncU6MBdqKprpfGfQWf2eSYnnpg40QtZSfQVFhtxm-4bNjyt-oqo_jzV9fiLSsWlKA1zcxlfCqnShnx3ixURAvBUS3CI03ViNoczDMXS5sNazilC2Iz6obeDgqLUxEC4sLdW7a1tVlAlITstr1-v_kIspuIIcFen-gY2PI4Rby6v74AeyKJBc7DQlbQwiDaCFpT9BdmS0dtg1t4VEMThuiAXRfpPmnTAVxor3sU2T7irsQfmTCH4L1Yx8S1YjVDoCo3cvvble0ZM0YBVvkKF9jDcQ6fizEiYO2A36qSbat2mBV3S2FepRrNaL2FqpkxG6hG4ckirtzrbP4tGn6-LH2pL78CT6Kc_CQ3Kc0x1nXWPUFV4tXe19j5YFehHYNUGw1ncsOixUgUEep6n8lzFcb0b3kZkA=w366-h218-no'
                            alt='Finished Office Building'
                        />
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                        <img 
                            className={classes.projectsImageStyle}
                            src='https://lh3.googleusercontent.com/JKrV_uK_CqxLnuFO6I4K6kHKfQ_-3aSaP9uPF5uh8n2hmNfSVXhQ-hUIlPyB6EKMHjqL7FKc_YaFaEnWj925mja-7onJN0pQwaUZYyVnzvtHlSy1DnVmxNPD9bDeZmM9JNAHFzwkjALPHRW16ix-wMiREdzaL7oSVfeePKZF2FeOs9Gcy6mfbg7c8m8Q6Li4jR_3OnxXf6v32trXDgTiEZfQlheseig-5aAXNx6BQv64v-b4yFgJHVHmkRx-m5IsNNz385WIlmZ6Gtef0r2ZwATYMeLybtsiobjSROgR0nLPc9Ula83S1GVCFGRKpa_e9GvFaMTdCSdIFiT17mIDxdKKFV-qR1eFcbC9_oTsoE8pf2TwsFy2CXVj8K6a1g4EJ5Wdb2d4PfP2Usa5Cm58PsjKA2ZTCRzKExLnuSwIdExl3r2abXGFr0Q-UGJWbjp-DWb7u2rE3rQzl5kYrZSLiRYExF8nVLCz3CUm_pawa8rJIPkHEMHdiG-N-1xBZVJ6EAf10hR6YzweoNnXHJG2QcbHETOLt_O4pbm-msnKLwFDNPBg8hwuS7WZEd8xTIltjcquLQSiHl-YvSOKrXlSbjhYiPutfbXWs7MGLF8ChFo5n5s0NJu4w7_fh1D8ZLUuD9itnw_8k3WcglwP-f2qqqx8WOzmnMAtvOx08fUHsvVUQxbQje3mkvylKEPvLQ=w364-h212-no'
                            alt='Finished Church'
                        />
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                        <img 
                            className={classes.projectsImageStyle}
                            src='https://lh3.googleusercontent.com/XUwbPysE_hctCgZWLPI8B5bIoAHb3eQYJzQti2he4XN6R-htGYa_xy0VzUXRW7MvpUw8M7qhHrP30NtmSd_ql3guDrhD_m9ksYU-BwC9wtGOvtNwSpNr1L__RB_069i_UfYVif973wP7-Y91AtxSHm3HVAOVCZZSg1XoceVZ0xv0jYvccre4YMnVo_52ATZdXL9gySf6DXNnAvndP_6UlW7fEQ65AY7Tvsr_vve43FdTcSR30kUYUQY8eT5ICvc_18OABH40uQntgsVAM1nGbuc15-LAdquSU3Pqeyv6Dr4M-qcJxv2ldKEVol1znW6XCd1Y9iNU3XvAfBsbXOuY58qyQBUTPXotb2WX2UxqoTdw1Ldwq_Y2sLOMcay3H5PxcRy7Yin9IxUGsRB4Ep41VPY7cIPiA7_CuzfmLQmMNnlKT9PaTd2KikTl1jApVKTB-X2gm_y_45riebib0EJMHBkD4SA16ewTY2uovhRl1wfzz_zRqt3jPwdgzGe9hFMd0QPy0aQi_ZbR6o4pGl0iYxVDiLnU5PCHeXoAKXa_vQGQALsi0gkWx2Ard4UHsCxFwjoahSU_hFBHkhd6xENbzq-lf_jwC71uJdStvDp-oJTkwYudVSe9ZffFQDub4XNCLlQcPKJyx6YC1hUcLs5EHzMt1e_9FoSUZ-VAqvuUtw_wpIqMXKbIQV1MVtw-3g=w368-h212-no'
                            alt='Finished Parking Garage'
                        />
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                        <img 
                            className={classes.projectsImageStyle}
                            src='https://lh3.googleusercontent.com/X_9UBwzkg1AN2kOUXwjIe7hMzVcHOjyfmB5hepeeng06pGd8ZCpGHmygbViTP04WAyvtnguItqQg7FDz-bz4Kw3Om8EFHgQRmDtsiepo8uTOpBXHXQ_wSrIeet-SvE9Eho3kmW9jbijugkrttWPt5onwHyuWp8sjJyUTzCAohLI_pN3kYsmynONZ8pta53eiQ8YXZbTOuZjzrWeaRT-RJMvI3GKCZrrtXTplA1L6Me381iYTtCXGiGAma09-35eDVdQpzZ12FIALdtJgnxVgTU_7ObJDNJrlTWZsoXHflJgTkXSMUkOTttHzA0A6-OvwRhBrtPt64z4Jz9cDRRVDi4GMkRtUNEOLcPow7cqL17bsZpU917ujv4I81HGAN8rUxgA_TkOAVA0jin88O48zdcAn1vHHm5ec38F9fADAg8FZdfWx3ovaBlRMkEaZ26qh3xXG-h8MRh6t0hrDA3B2QWusaUfavkEyQNL_pu071LE1dGuKV9Y8swzQqDI42cywA3v8IfNdRwqnN1E7R8BeHj-RE6b2CbNS-iCS-n7xE9TyBsdYje5A3tVc7_j8VBkfP_SUsQR8m0CdPO9ajcswpEiTr0AGke-DNp5dPcPI2tjhSfyBU2NgtgbEL5jNKu6Osp6RdbUDOgzuH1YEjnCCW1R7Wu7zPkfm54vaurpkuKJdKWD3ihlI_1nds4x22g=w348-h214-no'
                            alt='Finished Interstate/Highway'
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={0} className={classes.greyContainerStyle}>
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Grid container spacing={0} className={classes.ourReasonContainerStyle} direction='column'>
                            <Grid item xs={3} sm={3} md={3} lg={3} xl={3} className={classes.ourReasonGridStyle}> 
                                <Typography
                                    variant='body1' 
                                    className={classes.redSubtitleTextNoAlignStyle}
                                >
                                    OUR REASON
                                </Typography>
                                <Typography 
                                    variant='h3'
                                    className={classes.greyBoldTitle}
                                >
                                    WHY CHOOSE US
                                </Typography>
                                <img
                                    alt='Divider lines'
                                    src='https://lh3.googleusercontent.com/-WoIRoCsWbNn-w5PicmSo4KQxfX_mnQDYasYHFp046d7lTMlP4Kv6ikQokgzCV9HTazoBaCVP9HRswIbFO8NJD6MKjAwgCa6DaCnVLc9DmrxaphFgetCyAl39GBUN2Zw8fACkDY0nlkPwXkVY16Gk902bUdX_nThviMO6Jn6EOqBTQyNNEJjPDURjtdPtcfVnHdyqrCd8Ua_B9s14ljmpIdbNq9y3Uq5A-rN6LbtsL8DqL7rjdriKqHl72PEnmoW5EqjUXo83SAc0zEoRhvQs733GCkKcDV_W6EgVMX-C4gZ5EXoHbsKVaH2vFBpW0qwM1yiYXXeBChJC_dKAYJBUkC7DJPjnQTMrLcEl0-FlzFzwyYICmQqOylq37VeAqnJrViUfLd9jCOv6nMcPX5SGkRqFts9a8rKJ8V_xue4Pc69ubcgMepachZiyeW01WblpUvA2CXMC-5OkyHPTfLBEMV0vysxrQ_Chye7Pd4hT2GeLmqftj1Ka_JGSf0H8WWdIuphGj0wfXtUcVEktY0bN8pVAjYf2eE8i_asf0lwTKO_FViI3wA17l6nQcD5KVZeM0FUB8P3kNMnULQ_1fbcHMqeHG3yBsJboZh2uOb0YO0nh6-7j04A38sbs58l7IndjwwGwnBM3C7XsVZ0PXCuKtOwGGxL70pUezlJb7OLP9njGNNHHth-5ndF4yCcmw=w79-h6-no'
                                />
                            </Grid>
                            <Grid item xs={3} sm={3} md={3} lg={3} xl={3} className={classes.ourReasonGridStyle}> 
                                <div className={classes.ourReasonDiv}>
                                    <img
                                        alt='Constructor worker icon'
                                        src='https://lh3.googleusercontent.com/Z98xbIKWB8Xudx6oqnf66Xx3DThSG_4Zfw5mYyvJOmYy3qHKvlsyspnWPcfh_BF7r-L4L9p-7ddAmxzkbPUD1oR1wVtopNvvaOiqrkCcP-N6u2daIDS2vMbwgxfhVVH3CLlX1uJrKWbzStzcqFOBdxstVEf2w2ZS6wIIXfTj0VVyhMCtZgLwPjtp1i8EXzag5K_Lamx0LJ7CPBngHwj39VsQZXMnKFLLVKXpv5i4WJSeMcweAHnqPOnu3aRtMM5WzazcL8_ANL_L0_zjhC0vQZXJ0_a-mj6PrjgCj5GGJ-_FmNG447WFpsTiuf8ynMyadjVDnAD8CXNaxh-_9w6mLO8lViQh3vSZJlTRE4Wy-IcfilKlQYGvS7l2kJ3KOYHsnG0mA4Vwtj9eoOVcZfPav_AjDTzhKN2irVZkdFGe9FT7NmP66jslzaaUWg7KJbdklCB87zAXr37iznV8hT24IDFdlOTNokevYFlTDGJiP_qe96zzINX9bShHf3TiSoIo7Wrt8LPZz5R3quweSqc7oO4e2ub1b5u1m7l6voSbXqiylnZOFwShfHCkFCWf-cdwB9ibd3IfRumruljzcuHPUFH-2Z5U0Trf-8ZWA2Ut5BXDZkH9MWP9K1vi9tql3pf7AYXHgcDq-eHBA2laj0qD8Svlb9whNwx9ZGFbRwGynL3QIkvZxbfvsJFxERnJwg=s286-no'
                                        className={classes.ourReasonIconsStyle}
                                    />
                                    <div>
                                    <Typography variant='h6' className={classes.ourReasonHeaderStyle}>
                                        OVER 100 YEARS EXPERIENCE
                                    </Typography>
                                    <Typography variant='body1' className={classes.ourReasonDescStyle}>
                                        We're one of the largest and most successful general construction firms in the midwest. Our qualified team has 
                                        experience in all types of construction.
                                    </Typography>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={3} sm={3} md={3} lg={3} xl={3} className={classes.ourReasonGridStyle}> 
                                <div className={classes.ourReasonDiv}>
                                    <img
                                        alt='Wrench icon'
                                        src='https://lh3.googleusercontent.com/wF98EONd1PFm3bbM4UCmn8NOQ0jquxzXzY36ApC0IZOjDK0qfKbqRRDqUb58xOYRNM1FAV09cCqz_Lw9HO7dwPfe4nmfiR9Zwno3LVHa77spc1VY4nWhkPvBR9lana36b-NQxF9WCN-nvPvKxQNbZZGMu_vvP_PcjRtEgItNkeIy6q6EzVrM-NdOt5PzCEV72DK01cHDB1Z3t6WZysC89-3twgWFRJZZzWUaXXRshZLeHSBIp5f11st13MoVLV-xfdi1_dHvXCqWiRqbMuFqWz7dKJFpKUPNUiaf9PzJCjeoX7umZb5VJTxj8exI-2qyWxSZ7oYrBwD3bh6cFzlbf66_6mwNpDyVAoqwkiGMq8eK6eXaBCeKU8mamtxRAIqQ9oCijghreSBDY2lNOUdgc_CKj4M_qGFSc1mMpCEb2OSne28eAqEoMvkidoqhgt5YP1bQhfcLBsO41qVE5VuIeoUmuEVMB4Ow9rdPG5EjZZmwIl62xLOgmCij_D6spjQ8fnwIotjE36qDvX1AG-5BCXp3LDbxClAUZtuI2djmCYKMD-ONc90-RZUW7nC-pfKmzd3KZk6gbMBIJQXBop8xSw2hTnCgKwACCf5lpIpPIbGiDWyEsMt6zVhY8BAZ7h2IIF6u9Lt9RvNuvOGmRDlvNylHSH906c_chPUNYYigx103NvE3uKDfIEZEu252Sw=s286-no'
                                        className={classes.ourReasonIconsStyle}
                                    />
                                    <div>
                                    <Typography variant='h6' className={classes.ourReasonHeaderStyle}>
                                        CONSTRUCTION QUALITY
                                    </Typography>
                                    <Typography variant='body1' className={classes.ourReasonDescStyle}>
                                        Regardless of the size of the project, our client always enjoy a measure of confidence, both in construction quality 
                                        and economy, unique in our industry.
                                    </Typography>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={3} sm={3} md={3} lg={3} xl={3} className={classes.ourReasonGridStyle}> 
                                <div className={classes.ourReasonDiv}>
                                    <img
                                        alt='Pair of Tools icon'
                                        src='https://lh3.googleusercontent.com/t1xs9kme0bDsytmERRX15Rj1Lx5NwUDQwCXGc0ajxvOWyS3QsCaOWtjtb4LnbfkFj6Onen55sqSCk7rRIQ4YLNlePOJ4_nls7iu3ENgNW1mrD7Qn2LCar0la3bTkKHq8Ro05ZWMv8ix5o1e2jUcu2DE7b8dNLFNSwMVGNe3d5p4GnHPCwjpLtY3WqZw2qUgBEU4JVmt2P9s4UTAkQQoJHh4Nzv40w5hj6mbNwydAZGJK_DPANiSlxf5VX0t8GXBSpSibQ-KyVHj-iZKETh3zBExrm532IqEEVg1ZgJtiwCF_apJKbipqtT2N81y6YfUoPOpUcrquakPxnr6TR5GX8s8w_OvbQXwW8apvIx4ZQArejiPxtzc6f_S8IYKQED6o819Z843Sx7yiClKByKShY6aNt34ODG_o8QDXny9q3WdI0UxTGZs9xmk0-TLSv-v0m1EiwQjYwry9tDveHbrp2iR6cUFLXnP_FvBH3bHgRS6saqxa_adWL4MR4bLVouXSD6bhofZW5ozJOo8PxVh1Y5Wji3bK1bZBj_yJ3ncI0pIpwUdL_nA_wUue0w0_8MxKzWKwFda93AKpYbIbtywSHOGNDeuRxZrl2sBLEihcu60WNenfcV-ypsYPgP5gpLToWEOvqiW0b6isvanAoDCB99oBgkwWHrhxPkvhaj7lvfpZ2ohmgjuI50qIPJ88hg=s286-no'
                                        className={classes.ourReasonIconsStyle}
                                    />
                                    <div>
                                        <Typography variant='h6' className={classes.ourReasonHeaderStyle}>
                                            ECONOMIC & EFFICIENT
                                        </Typography>
                                        <Typography variant='body1' className={classes.ourReasonDescStyle}>
                                            We build confidence by providing skilled workmanship, attentive project management, all at an economical price - you 
                                            won't have to sacrifice quality for budget.
                                        </Typography>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;