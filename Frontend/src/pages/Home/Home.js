import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useStyles } from './HomeStyles';
import Paper from '@material-ui/core/Paper';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import CommonHeader from '../../components/CommonHeader/CommonHeader';
import ImageBannerSection from '../../components/ImageBannerSection/ImageBannerSection';

const Home = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={0} item xs={12} sm={12} md={12} lg={12} xl={12}>
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
                        <Button className={classes.greyButtonStyle}>OUR PROJECTS</Button>
                    </div>
                </div>
            </Grid>
            <Grid container spacing={0} className={classes.lightWhiteContainerStyle}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center'style={{paddingBottom: '2em'}}>
                    <CommonHeader
                        headerText='WHAT WE OFFER'
                        headerTextColor='dark'
                        subHeaderText='QUALITY CONSTRUCTION'
                        dividerColor='dark'
                        align='center'
                    />
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4} align='center'>
                    <Card
                        headerText='CONSTRUCTION EXCELLENCE'
                        bodyText='We deliver both large and small construction projects including Commercial, Retail, Housing, Religious,
                        Educational, Parking Structures, and Civil.'
                        imageAlt='Finished building'
                        imageUrl='https://lh3.googleusercontent.com/Up28m-Krvje8BjxVjM9rbwg7xO68f7wv1iQsFYQf9bPRpYJ1k8EwlpWU3iKkQfMgsc-2S9OFTEL_V_k6AkoRlELny5JPThu4NRv3WtFMAbHiWP6gxkwmW3NOWhB2WGjEDhiw_vWO7GzTBWjwQS3ZEDEZ9UCql3IfFkh9tNQJTguwLcSEmYxI0rkq8ZfdggjMEqcGwXdt0Hgawx2lmk33olI3IvphVWCN85P1s_msuGcW9k6Sr_o7k-OlRC33vc5h0S4m6bO6F401z6Y_vpNIDfrORaFjmvtbjuVtzFGSvntzkxj11xpaSloa_SqwQ9iTUan9zxxZ0kq_DLpm8cl_cpyAOeCaRzXvnDVU72jBPUngV7SmHLJ9dxU7hSgXwezoXrq2Y-qTI8S-JO38wwJ7Z74zuGLX6PddnUIWCKe9RdSs4IjTZvxnLwSI7HeHTjcGlQ18IU5iUadS5pmwvOdO5se2NCSpt-Gd5XSeXTgDVGnm7gPqFlj59tTA2DNde05K1Zfj4s7ae52xMG1pw6-WF01I6QY9-B7eXaexJeJ-vcF8a3gcnZ5pLX_uTwqrEpT_y7zhd47s1RlsbfvBKrnLG2QIZHBUi3g1Ipf40VxqmQBtXGkRKkrrflkA5bDto93U5u1GPeTycPn3Pyk49v2QfqOIuX4PqMrQP4Y7bV04e0KS7Ldek7GZUPB3As_b7A=w275-h183-no'
                    />
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4} align='center'>
                    <Card
                        headerText='SKILLED WORKMANSHIP'
                        bodyText='Our experienced team of construction professionals has the skills to deliver high quality projects every time - no matter
                        the size and scope.'
                        imageAlt='Meeting in Gym'
                        imageUrl='https://lh3.googleusercontent.com/LOyEpK6-KmjJsPz8UfjSSudU_aBUaQ_h-w9Pu9pGx9SvZyRv1K0hooWtt83kTtNdfICajaxnZ16CBdQgBsqxd3qSApQa14XyNwC9aa1R1IpkKtwBTEp6G9biFRgl2OgRbo7FcyNHVYOxJuEyhT12BTYcGaX1ZsAha9qPADfNBeN6vbIXW5UNTlj2HkkZnDFDnlQDgMWuURo73_T7xwt72u1sTXh5jifUgjJLcW83AW8jX8XK6L41VDIR_O-djxM_S74kVW0FBXheESOPMeg6PDE99qlX43W3Vys2pXBP2KhNG99BaTSmcxTgfDtrx0E29J3ExYzm6kDiXIIxUBqQh0zNQYCcPUaPctygJJiXf0IkvvVllwyWgHreSgZc3MuzvPR2PexKwKYt38gpIrzrVu1E_0Q5Q_21q9knG9eAHCgXt9WV31p54nmn3YA6mXwVetpMQqnH5f5jrNICCwXr_yORxU2E6dMW1GyLAJwoLFGJiMJ-kLaaXL9PlEAnL1pxHAL55iYKQ0WDlim5BXvabpt9G7wG3rDhahE06C8viFV4hUsR69LbkNFOEGek1cqj2dbbRrKHapJRHlpRTI2tFVYCnQPogbwO8bP6mGvHJSoVcGV0hJbKUsd4eF0IYZerQHcEtLkbKvaHklYEnJBL4fcaZ4iUP-4tCCrz2OMCrLmrRTl3Hp88SXBtKPqHjA=w1200-h800-no'
                    />
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4} align='center'>
                    <Card
                        headerText='PROJECT MANAGEMENT'
                        bodyText='Our proven and seamless workflow allows us to manage dynamic, time-sensitive construction projects of all sizes on 
                        time and on budget.'
                        imageAlt='Writing on Clipboard'
                        imageUrl='https://lh3.googleusercontent.com/tHaUCHpZRNTnS7eq7Hlo3P9ZcyKy38PuSlAgycHIpPAT3z4vO5AkWRfH_YZ5_vKpVGgLjbkUgatNH5yvE9PXTuE6CUZi9Dw4my7rn5ZCW9cEBh1jq9MBBBm4jewqjVv2VG_fgqv9KxOgePt75_LgCdf0BINs6UPGb7BNlr1Xp94uIRpH87_jKQXgpH3l6ZTkpllZ4xX4P2P2XZ-vE7yVfq5VvauDYjmKYhjkWMaOnuPGeM6Mms4cx7mHhBWA49omXMEuvkDbU2CZDKVjQqNeHrN8ib7XIpkcTHo0-Xe_l5DrtezJ8ICaGwXSTGUcHp4fafeyDkY_tHxS2Le-PWLsKF3mj--NGNw_iLCP5wYugZAbeFeHOpKVsiFK6gv8fZJU-fusY21sVFGDHgajyCHY3ExEHWcWEmHYzMyZltvMNiw-DMROwnl0EZHynuindf_RGrfI7MeseELPL-aH1EaY7uG1chNZor7d4jqcosLEzFjf-XvOLJ7m5fPKCFHvlo3k0HkV0lXGLeahnA0QK5WRq-a54XGRMp3zu_MsyQhtvuBe9p6b4E7HUmyEKeGHZboWuSjyy_QIeHPAFw1f5Xe-5RgmfOrENw0_A4voPIsTKgAlcuTnc31fJr1lpcqktba0YrrbfRqLqKyRMT9c28jk-9KWuuHSD6bx5aqyZ6oJZD5OPtsKqdnRYAkI1ettxQ=w1000-h667-no'
                    />
                </Grid>
            </Grid>
            <Grid container spacing={0} className={classes.containerGreyStyle}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center'>
                    <CommonHeader
                        headerText='OUR PROJECTS'
                        headerTextColor='light'
                        subHeaderText='PORTFOLIO'
                        dividerColor='light'
                        align='center'
                    />
                </Grid>
            </Grid>
            <Grid container spacing={0} className={classes.ourProjectsContainerStyle}>
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
            <Grid container spacing={0} className={classes.ourProjectsContainerStyle}>
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
            <Grid container spacing={0} className={classes.greyContainerStyle} alignItems='center'>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <Grid container spacing={0} className={classes.ourReasonContainerStyle} direction='column'>
                        <Grid item xs={3} sm={3} md={3} lg={3} xl={3} className={classes.ourReasonGridStyle}> 
                            <CommonHeader
                                headerText='WHY CHOOSE US'
                                headerTextColor='dark'
                                subHeaderText='OUR REASON'
                                dividerColor='left-dark'
                                align='left'
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
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='center'>
                    <img 
                        alt='Paving crew in action'
                        src='https://lh3.googleusercontent.com/onWooBD6LpvB27mrveaMPBMd6HiyoCCOi4v5HtxkUG6jFmmyqiYVHo-7mb0CxncdpPc3zdSLOkCjn7bHN9ksh0dCW1uLFzZCPzzPj3VqTDG_9jkxsEBcAzbE4qnk8PL7Zib-luRCpmzKhGUJoM-3OojReEtFIK6QecNNyR-6JU8g9g-QWrMkDhUl-Lm9cQvCbsv7doIGxGM5fYgq86qINhMVpsnJy5j60VtJnht3kWnqaarSJAMkj3WdLUOJuDW4YChJQLWqKjuVXPQB6szXKQ_rDrDa7-Pr0SJbxOp51bl4onFuJzyX5PSJC70lrPXkCFVvM0E_NILXoU7s9BXLapDSvrfH4saQAEOt6iyj26iUX0vJrxX2GXjj57kGaR9bzqcoUAD99qo96GXFdAP3ATq_vvf3pwplBHc08t-MI-59OZ6q2Pu2sRDG3oM2WS2ZXaCOen_7rKDyExalF0QR2Q7p6tWwb9jiMiOotI6ssAhUngFcPPR5bejYm0swN3mHY3hcw0FTsyh7zmJcuVAlwA1FqXTGAXT_cpKGf51CiGevL6MqsMQ-_4p-hW6CYJV-9hBKhM22-3JXRC2xWuVBgW_QULmogN4vHr2n4PPmYrsJZkxpWAu7Aq3Pv7AxyjMaXFDJhnj8bWgcPyt2boFF6B2yKXJFrsN3_MczQXYn9uaw7F1vkG4VJ2leFM9cHA=w390-h558-no'
                        className={classes.ourReasonImagestyle}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={0} className={classes.lightWhiteContainerStyle}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center'>
                    <CommonHeader
                        headerText='IN THE NEWS'
                        headerTextColor='dark'
                        subHeaderText='NEWS & BLOG'
                        dividerColor='dark'
                    />
                </Grid>
            </Grid>
            <Grid container className={classes.lightWhiteContainerStyle}>
                <Grid item xs={6} sm={6} lg={6} xl={6} align='center'>
                    <Paper 
                        elevation={3} 
                        style={{
                            backgroundColor: '#FEF7F7',
                            width: '70%',
                            overflow: 'hidden',
                            paddingBottom: '1em'
                        }}
                    >
                        <img   
                            className={classes.newsImageStyle}
                            alt='City of Omaha'
                            src='https://lh3.googleusercontent.com/t3IpmXfsSI_THwB000lEop_-RoDKDHdHix2IW6GsgidbzX-gGRad_S9B1OZlULETWoucrBPk_vmtk8B7KAyA6gUZq-yg7S_EXdOG9mT28AVCIXp5rse9f-InYymCYHEWGnsl8dGg8Hd2282cSCp1-hJ-OO9zarD1gA7g1ne-Sx1N8XzP6CI5ZwffQeqxaHonMJzMydfp5YjMQke-ibahv0pn4X8XmtPRTvdah02Iv61U_EFF18YuUJHzdWsaebKvSb07aFaxsSJkO9H9ivlsWSoFGMCC6oZOCbm4UkSYOODt1VvjX43KKnB7bSPnoS4Uwn7jNh5V2PYpMMlwii_s3rYn66Yu87ycMO32UgQNGvlIHVdWMZeNwKcvrZHi2CDOIgOQHo2h4YlkJhBGxvdHpl0czj1yqnYtYCculVJPD4shp6CcAchPIVT-wKJQ5JWOxYdnsivDviR-Aprmz8gZsjXUy4FFErKixZcWdCUPoQo2bBq_mFPs1KiEx9PV1-YP0Xs3V5-fJ5F_ucSHWu-hgyGILzhQJjKWrXay9DSTy6RcsPQG8IKhozP34aYbMC0W-vBYontNTajAppXsNxVp420AZeynqPYBiOPcxYB38kIsGbkZ6Su-k917sC0uO9jI6sCpx4uVFNF-gtN_jkN7ZLgvzmHkxdHM7YxET-pl-tal6yfB0aSILI-rMFpizw=w480-h274-no'
                        />
                        <Typography variant='body1' className={classes.newsArticleTitleStyle}>
                            "Mini megacites to watch: Omaha Nebraska"
                        </Typography>
                        <Typography variant='body2' className={classes.articleItalicizeStyle}>
                            Construction Dive
                        </Typography>
                        <Typography variant='body2' className={classes.articleDateStyle}>
                            January 15, 2020
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={6} lg={6} xl={6} align='center'>
                    <Paper 
                        elevation={3}
                        style={{
                            backgroundColor: '#FEF7F7',
                            width: '70%',
                            overflow: 'hidden',
                            paddingBottom: '1em'
                        }}
                    >
                        <img
                            className={classes.newsImageStyle}
                            alt='Dirt Path Under Bridge'
                            src='https://lh3.googleusercontent.com/9f0n6El7hmbIhYZoZxdZhtXSCOatqZUwAdkLOcnNQBwhmeQJ8pWwjvLyFLNbxAZDAmo0g-9hHOTneT3W2DWIGTfHVBEZoOB-TfuF4I_FLZMqEkKksz_WPLZS6d39IwQQXTYaaromJQDdX-n1SMcJK6B4sQHGRjwdGWIqaFp05Q_kgkZ-RHavc8BGkMyedebt5jfm4Cflr7qX6e68_kvRDgb4Cb1nEzI217KudLokYsvw7iW6F_oUyUGiBYfVAHB_DbHyRcPvddFtyfz5YOvtWN4MyLvPj_pfZydmz-mV0GvelMqXQNLllvhCkVLm3pUL5wti2jCoY8qUD2DUD0czb9yDlQ2Av0gwwhkyDpK5cBSZS0hqNuW0DzolJ0Npdc41mIi-WKeqwJnk9xHMh2zQ4r_MXO8sUomWjKGNHDZAeZVCft1LF8MPwieqhW5xkGloe9rk0ZAB0zeB9AoE4XQso6rz7kj2h4D059wLpDIu8FVlVZzuVljgv0DZHqeD-wb88KQE8b_f75UTV2kM8zI5z-waSmteCZ5_5NqZSzOdjk8cjIemftKPdLBO0A5ijWYNxaXF3tAEVWbPr9N1TYGrBwyx9ZcfGePWhVpeKTlF3XijEd8rjV7DNdyOPrXj-Iu8ndLmktuszMS9KPn8m0NiRMRVPnQwQbj3SwCq2Wu42W0KM-DA6Tb94-nzSOfNeA=w480-h274-no'
                        />
                        <Typography variant='body1' className={classes.newsArticleTitleStyle}>
                            "Mini megacites to watch: Omaha Nebraska"
                        </Typography>
                        <Typography variant='body2' className={classes.articleItalicizeStyle}>
                            Construction Dive
                        </Typography>
                        <Typography variant='body2' className={classes.articleDateStyle}>
                            January 15, 2020
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center'>
                    <div className={classes.contactUsDiv}>
                        <Typography variant='h3' className={classes.whiteTitleTextBoldStyle}>
                            EXCEPTIONAL PEOPLE GIVING YOU EXCEPTIONAL RESULTS
                        </Typography>
                        <Typography variant='body2' className={classes.whiteText60Style}>
                            We offer skilled worksmanship, attentive project management, all at an economical price - which 
                            means you don't have to compromise. Our clients enjoy a measure of confidence, both in construction quality 
                            and economy, unique in our industry.
                        </Typography>
                        <Button className={classes.greyButtonStyle}>CONTACT US</Button>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={0} className={classes.lightWhiteContainerStyle}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center' className={classes.gridBottomPaddingStyle}>
                    <CommonHeader 
                        headerText='WHO WE SERVE'
                        subHeaderText='CLIENTS'
                        dividerColor='dark'
                        headerTextColor='dark'
                    />
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4} align='center'>
                    <img 
                        alt='Ameristar Logo'
                        src='https://lh3.googleusercontent.com/-W63qeTR16khMR8de9muzy_QzCDc2sgIMlXQos2iPnqGryJjahH01kprYwLq7fgQnQ4dk8-8qBTQe7ivcuE_A3tnsEZDvhV4qZhTFxJW9St1LkeDWpW4Qdtj9QWd19F8iMBG9C6d7f0P1_L31j6WvZSpVv77q3l7pfLaTzIvxqjkdiqVb4Yc0qEFNG9tt1D-8ufU41vIOJLYkQsDsUYQfaj44YPRGDLwxaNMb0uDnL3gfKqujilVnyQYwQ7Q7olZT0xvm4QCZRkTHwVywuUhubFEK9biKbJF5vrE5yB9YyVhVQEFzeRj4f31-97_8olM5Z6EI6jXJEwvg8WH0C4228gj9pa5uDjEVnQqj03ieEVMFCQX1iO3Pa_B3NuzYYh9NyIaKJ8AVFQNqax91wqn-mCpWKRCgGm4yHLUKXrPV0VF558RIDyrN1NBnPSXXhS7z8BQeaOqrSvuUtGfgEWZlMqNqQDTHy8bPYSv_X-8wY0H-CLkQtwPFtMUICWlL4xYFbnLHlcAt9-luB9niEC3BSJrIVVysfS5fna2rWmNWfNG7Tp6O8Nkx5KoGhhARd_xGnxnuNPxpYLI7SHNELxGFGDQJygg8crJrz3dfMoqJzRn3ERgXKz1IN2YZsBOYGhOrDsgP2ny7pQdO7ilrMDh8G_JEOS0MSqU8-_9OmMxCGR13osDwEHRQcmlMFBrdg=w283-h80-no'
                    />
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4} align='center'>
                    <img 
                        alt='Omaha Steaks Logo'
                        src='https://lh3.googleusercontent.com/jYwmnXu6QDI1pqok9KBmNIZ26iOrR0DTAU_zc70DfxGbY47Xf18eV3vAj1nGaZqgm-tuBQW2FMmvSYCvLSnQo1CI5pWy_NuMlbsj14XbLSXc8VTN0Qd8s4jS5-t11D34n2lRlMU6a0gHT-V7X7TnQfQ1Y4nbOc4yM8KYfpI_5wXmJbgMwWgSMEYyio3y72oqdOSYbSdDieXNyJ2d-6LvxTarUdSOXN5UOtO9MMkSQwp522unb4x6fHsx7FgrfqQGvArigvzLBqHtg5elLsFca4FnDTeBs7CT__L2HdrY3SZ7adZEQqeZZb0aWu8p2ktR_Ul2WADvSsdNrtAnk-P6wkPSxmdn3TgTEVNU7QS1DBw61KAJmzxFWdNBQIHcmz8DABnZhTLgaN5XkgtZez1ES9TAcGE8gPd6Uzb0yC-_YBkMct0C6nPA-rUJnvsQfllyQkX8k4kcFxgr8ueaBTRHwUhtK-8TYVY_i2U6O2QbxQNCLTg0YvmDxzMvh6yYzpvVFgGhY0pi558TFeEnN5axZtYHU72NcC16oGEBUNuROIr93pD5E2NP4sAdOu_65CTmK2n-8jwBNAvI2zeLYi1qm3SkZStu1aKc1UcA4PXR6IhhNZ_9XDQIdxFaHU1x7zSU8gRu8natmvOIzdTQYu6ZqclizpypWdPwj2pi9GACgB7IUKxHx8aJQBqEBf_NxQ=w1920-h445-no'
                        className={classes.omahaSteaksLogoStyle}
                    />
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4} align='center'>
                    <img 
                        alt='Streck Logo'
                        src='https://lh3.googleusercontent.com/MOebDem7BoP2cms2IOQ3gt1TT81RsCyi3OLHRcWiLvVIR6oS2cirVJcLkxzPufa7dpA_WPJDP2gdNhdDf5jMTFRcpxausM48O6u9MfqoP7z05hYQroS7S_7kSJiAWvmhKFXNuEEK0akGgrh-01iA_i20GzqouLxZ-Jets9DzUYjeu3Xwkn2rAAZ5y-NM0LYb6BOoLw1XS_OJdRoi5QYyOYhg_HEaJJhGSDqKbKr9PxgQGPGQNq9hLqPI5j5KngdNfgaFeofVzKbcw6i3ov7kUFUWZuH18jmBwHtOTSWinUcKIXCvPdd9_E_IHbtrSU0CKsLZcg3LI9y_iTL3aJSukmXzLYCPl8hob6Ax_5k1Nkiw2WTQyVdVNdd3AJN_AosQtaA24Udb6s75cgT9K1abrPPabXtU8CxWFnLmeTz0ktbND5l7Iql0mhnmuPomROLfHXgLgBiJ-M_18T4xgUX_0BtDVDPKtD2_aXYcDNipO_6h5dSnJsyU-2KcWePl8cAaIpsjVwLAZOvfhI8PDZAUpxfw05cF4CXpBtAEKgyLwLDD05CX3zZaSpYO90e_e8PvnMAoNDuBP9qSU-vpVZ0eaLnbKV_zl0ymG5yeSsfcsIPoH4UJFuZwvADAmSrx8No0G9CpkPvF6L-R2CndQLp66Ies443aqdA1LN5A8XKzSh1tfIMYqqh0zKMnViZPgQ=w1920-h387-no'
                        className={classes.streckLogoStyle}
                    />
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3} align='center'>
                    <img
                        alt="Rotella's Italian Bakery Logo"
                        src='https://lh3.googleusercontent.com/akJVIEOwLsDotUrzL7S5NShOKUnvYi5o88eLufvnhVrvrW0WfHbj2DufCHOBkCpoeiHP1rWRtmL8omLrWjOLHI6r51pvYeBaNAYua09A94FZsywEfhyUk7VSLtETXeHWrE_j44yF-UplR2VvIlfANXHQIFdIgWCj_RB39sIguzaQwNRn_ejf8wJdzJMVHD6_3Jua6HlEn7xMWv5DQkvJsU1RezfxCwJC98JcftnXT7IWQIEoY1zd5EspRYV2xXtkz6gM7lAVwJ5sr6fCSjn6sXE1SMqvbpg3MmXQFfO9EUR_O_KuqANFKdKg1TUEZMddgaXlY2t0S7rQ_DCuERc7XANzyr2xwtIUXaB8am92SJ4zdpU5U54z8zNoiugxUnt9PEy9C_IV4zr_kSeEVQchDdX9kKHyliNfIIoRrc3Ja2XzTaBC_of-jf_dRi7vDhiSApa0xORWSB6hpBv98SwNdeoPwjzB0DZjg2cuSKA4b8dBBl2cdK3Wi2_t65VtM3u0czJcw7yh96Ne_RP3tuu-CFqsBsl0Qn5LPK68glbRuTDfOqZACf80w-bjgJjETvrzZjWXtaecUhwG-kdL2ugVoyPdBJhnjJqnNyTaLB_ptirOfDQYA4sTBUEB0akHlQyvYbr2u5FuCjz4-oncCkaeOjRolF_6NQJZDkUBVX7Ma-d4hXgBRBjPAftoTGTVHA=w340-h229-no'
                        className={classes.rotellasLogoStyle}
                    />
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3} align='center'>
                    <img
                        alt="OMA Logo"
                        src='https://lh3.googleusercontent.com/kHUeqr65524QYHDLivQe3g7hvss-Q0l4Mp9Pic92kOAEF9mKb9cKr6l_su27MJFqXlG6FrN6dEz_6Y3_MjTJoNdv0OerDd2uTIz-rlzu1HRS1anMYgJjm7cIgDhgO8qYpYQsaZZOC6uv__QJ3o3QhmkGFf9sB0FkUhZRhCZ4VovVZUF2KQvn6t0ajL5jOl0V0faeSPMID1Kd9AKzCHzpJRyWEfwWFgW9zIxr4y_hHp5gZpc_n7MHngP1Ag201jflTdo7RwimS9voQpxM2XQ97iA3JMT8E_FYRFWZ0YjahHdwGSsuiB3Aapks4-DUev3bp2vc2XAY-tqK89N_MqtcBNIgZpQKuMszAM19GBuke9Js82bQs8YA3vDCJL8cMWeE3EW8FSpNMA5x2B6B-uVNnBO4GqX5o1L6fWSKQIWAB_hFL6zlHMesw16KXNPYAgFSvBB62Td1Zj5O_45-d1by2ZhEnkhseKTKPldBCHEeIJcSGmXpz87aAeWxS5ws3z_C3q9eA_RGRpZKGCfhe6lYj6d-YxVMQaQ88FUwesrQJ09JMIwwif3AX0CLKKYXYWjHekemlLF7F_77kD1pzTqAeswfcjQDpWGuIAdhTTEDcxt4ujTt0GOkt3A_nQAsxZA0HlZcvaVy6IICToHvhnKSXY4FwFokiG8evcoTdUOsQoaWyQjf3sKR7DbY51KX_Q=w321-h310-no'
                        className={classes.omaLogoStyle}
                    />
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3} align='center'>
                    <img
                        alt="net Sports Logo"
                        src='https://lh3.googleusercontent.com/Tun4j2quxQwwaZsnT0RI2c55-rU3Wvy808JXsjgePmvmHni6e8iuATx0MvPL0StWqGzRIsbCSISBEBltyXfb53hdsX8wk2-OGlzo3e5PukUburc3FDk1p0oEy9jJYRAbFVb8gW8ZgM5c93o-fjz3GhnjsVeyK0jLur9BpPmR0pVQHsDmQYoTYX9acl1RfZ-FGQHAaNH2lmnfyDMAWy3nzhGY-qQzbAicNeTYkjGLV8Rq2Y7pKwTJOqubw508GNXHOLbPrdIaKvpmBS_uydO8doXoEEu9_r1bhYmHQl1GQb96mAJU2A9_nc10sTOyKVRj-6NeYYpMCwFMWgxq0G8zdKxOEZExQcUTiG2IdYTWY64Or1JlMbQnyWTBswlvWjthZdaomFckTutOIST4tsq1TSQjiTroiDayqst_OFw9VzV8zbg4Mq98tSZRxfH1kphu1ueMV6EvsS9mh8TvUQfV1DWCyB0ZZrqDUJW7BtWz7HYZM-c36sBLQnLxShvF84hPFIjA0ngqop4WggacgHGey9wZ1vn1U7jsVA-xhB_pfEl-vhHYfReILBGAQ86-s-3bZVMQtOdcuQyCgKGeuiIN1vdKmZShB9PV7itDDkF3Gwmzm314dPZ8ywSUyFBu46GRRleDV7hua6W8t2xSjiycRvJ1aUlU3mMmUwIQU76bbL1a1gfTAg6qgo1_E6cMvQ=w831-h295-no'
                        className={classes.netSportsLogoStyle}
                    />
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3} align='center'>
                    <img
                        alt="Omaha North High Magnet School Logo"
                        src='https://lh3.googleusercontent.com/A1drHZ5kQl8G3XwLKbyWgCN9R8u5HerWKSl2FGe6ZQC9_JxWC0T-RpQB8niyDLu07wdHZ85xsnKOlEGBlFPtrKDUU_EHZ-neRWvna5KHO5BzN64dlAXpeFkmlO-9dV8PwNLkdjcjhR4B_9DZGbC4bP0EGawx3fbJHGn11oQOoytWomtcp49EZWXawceidLXtZvDbLy0fWv8BGqIDuv7b-fAo_WDSJDZv-wO6L9Yjfj4miBPofqSATtJoI1bDSqpZtutFsTKdq3v8hpxSpdUK4kkR4Tlb4FLBbOWr3fo-bN0MFuQD1JOzeXgrTBUPTwtEWwNyC-7aEb2J0TV67b3ZASwQG012HHuX84MtuLRS2Uz9XdE4umW7Pv4kjXf5snfX-VCDhqkSgpon1Oo_s_A7qG0fvpcRf4YUqgUXeKX79ZTdd6xZBSJR1Ooij0ML5BV6P1SsF5tuJvB5FIrPaN72chiava6iIJVZzZTjQew1Nl1JfPdlnYvmelvYaSgq9VuPQipz2Nw5-NVFIoX7aTJmgQ08cBoZqk2ce-XZllkAfPYDtMr9lQU-uFyE8DCP_oSTZtUs6WqC9WCI81pj1M8lEvtnOenlbaJtXgCfKwQy1pkya6LaZ9LHdN27cQ3A9OhN7Fbrr9EE_bT6-jqr1Rz5rtpW37HX-TsBM1Yerc99PS0PL8Mse6SFj-C_pH4QNg=w356-h357-no'
                        className={classes.omahaNorthSchoolLogoStyle}
                    />
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
};

export default Home;