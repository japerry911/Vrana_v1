import React from 'react';
import { useStyles } from './RetailTabStyles';
import CommonHeader from '../../../../components/CommonHeader/CommonHeader';
import Grid from '@material-ui/core/Grid';
import ImageBannerSection from '../../../../components/ImageBannerSection/ImageBannerSection';
import Card from '../../../../components/Card/Card';

const RetailTab = () => {
    const classes = useStyles();

    return (
        <div className={classes.whiteContainerStyle}>
            <Grid container spacing={0} justify='center'>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center'>
                    <CommonHeader
                        headerText='RETAIL'
                        subHeaderText='OUR WORK'
                        headerTextColor='dark'
                        dividerColor='dark'
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='right' className={classes.gridLeftItemCardStyle}>
                    <Card 
                        alt="Baker's Grocery Store"
                        imageUrl='https://lh3.googleusercontent.com/FTNJHflUcxlNMucTImO4UzvFABsbYzzkrLn5JeaDapzdUUv0Cb4JDU5whMnOQ2nxgUR6Xp235bG37XZ33KTvYlOhH09A5NNiPuJCNjZkBpwhPd8ahaUtd-AQ5VdeENiwpSsMi1zlnVlaf6k7ZFsm6F0Rvjtm9k3g4Ky1-CszWXa9HgZrhNl6mE1Con9eoxkC-2ScKi108adBVW2INx0jkrxvvt1lT9OgeQFYkwZ7qoBamxuFeLkWDhxgAByd4WL1hMWgxnxn6fgMcoaBEuzqn7_e6LJkohus6y4FfKYfNDFtJLCvfRIs57p-TWq8U47EdKEo5JosqDLRDHvz8AkJEixA0F-kjfV0IuJ8HbR1RsR81z5pG7S4aJVvT5gWOJvlZ86947FfeA8Dw16sUpt64jPk_VRx7PpV5-tQLgFbupvEhqAFmmYK_HmtoJ0vJSDBfGCBJEBhNy1xNn26g1q4Wk7hKKsK5kLClUZ-5_y9MiorxgATwJzvj9KNW_xT2AbyXN1m1p9jFn6bPW76OogbFnpO1cR6K1I30vf6p-e2XznUBv4NsKF-gY9By7Zc-e0J8S_t0D53CSFGhjxFZ7O5fGGuTXfWGg3IVCPBDGXhmjMpVyEhkksjifKUsoAVDPf3KlUEwWsW2tDB9gWNrketnfG7IVUTToyl8kGuWwkivj852dm00_WmrY4Z0XOzDA=w357-h316-no'
                        headerText="BAKER'S SUPERMARKETS"
                        headerAlign='center'
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='left' className={classes.gridRightItemCardStyle}>
                    <Card 
                        alt='Omaha Steaks Building'
                        imageUrl='https://lh3.googleusercontent.com/PWZ2UhLR2T7RqFcfRPOu7SV-77j6kxfaL8E8ktoJxCiMWZdJlm-6u9gMo_bXxxDBSofJncx-zaG-lFqdHxTPuBcds4JlOyToowJpOmj4ZwMQbYc5089x1tYvL89YOXSHPudD_L_wFNlxXP_QNZ7gLkr5I6GLpVcoz06s4wUg-TsUroW9bmIjSTocTncxXGAgD_1TGGNJs5nRJ5q91F_Rvv0dNbqpnTx-WK6D8mND_oCimFAJkOp8G-J-xMrx1H4m_tigpfkPMBrBOHe9yaYWoRxLRnwaplrBQs5ro8Q3N9O1bTVMlpp77a4Kbyq7xdwfQrRtdBF-uHROu0iZw7xJdoDbD5YnDWypsb512GftoXhj2THXjNLeXJseF4viZYOGNS5aw6Rp0V1iIj09i85I8PbSnbJQZk84gbPsvqIJ-_zXKn0_e7LN4mNYJ6LfZ_N8m7gOBZ5ZwSvFZsTHew5P76H3Gi3OgSTtl2-3b8L_voaFkFjoZSh-CgW1GtJZQzzZr6fqhIcDWqJc0rf1fhxi0h8tuUcME9lkJOAT_YxoSy69e0aEW32ELesAqb8ycPRKwLR9SOYzLWP1c1d8NcZirh-Ol0qEz1fhYrsaRlFd6Jk-_27VLEXJyLkSiXHAP2l_ngWqz5Xqh4Kta4ed7u6R2sFJ_Q9CIF5QxBSdvTmX7TcK9qRqYFbNUS3oPVSgFg=w554-h488-no'
                        headerText='OMAHA STEAKS'
                        headerAlign='center'
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='right' className={classes.gridLeftItemCardStyle}>
                    <Card 
                        alt='Eagle Run Shopping Center'
                        imageUrl='https://lh3.googleusercontent.com/Q2ivqTeRpUWR05EbXGEZAes0yO2MYVUvYrS8xS_c1YQXncPh1zlSKjqEich3r9coaW70UnR-TbeiFtF9zPkxfeZGNjdVViBpbRuTSgQ2XJUJ2bbcPCe5eI7eMlPwnIiMT39Id2QA6T4Vj9lotwSTnbwdGbU1MU_K5bxur0PEdYrF8R1a-flxR3bWlqniZeM1gn4j2TguD2LFpro7sG0dK3SOaNa_PAf00AAnivu5eg3ZZodTxx7KSOdAdCowCNbZcNdfPbFFhDsWjeBDLxvr4jiEHx_9btvcyQFyb5YO5RqslSvvR3dwfsI5WNLjbZkxR4KYj_js-qz43fQTzyB3MOBo7sZShbx5QwOTAVlMt1tn4jnw8QXrRnLew7aVuwsgNf8MU5dAOFZUcv2uO5fDue7dmf9uBOgy0naPuv6jjfRqtbqE3cQYmSGTXAKnBJviKfmDOxo8R2gM6O0XvpE62nDUCyBUhruEL05-0walJnM-qxCIZ2b2QO8Q7cs1UsqCJObJDJUZVikdKafG-_Flhb0PcNs-iCzwresmt9sYn2uGOA3qJHq7EeOfC_b4kIh5S0dnMb0HrFZVsupZEZUOPZj7ll8ZmJyWSASqUyqbi-a16xg76Y7D_LIJ3zyR-nRQOIDSpVYs50xODHFePxpqGcP9vNWGNfV_KMNmml21DwtpBM3Q_giMXAEouCZwuA=w560-h492-no'
                        headerText='EAGLE RUN SHOPPING CENTER'
                        headerAlign='center'
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='left' className={classes.gridRightItemCardStyle}>
                    <Card 
                        alt='One Pacific Place'
                        imageUrl='https://lh3.googleusercontent.com/8sm6ts4P_0uZUDD8aIYLX0qsReWeXQEAbzaOc-iA8fClWG2TFn2vXFnPPpMyhbLmo3iNfQijnkjFUNeP9MK3TyI0SbKHxorAyE_OK6c4BF_h8J5je88-npfIU_pQMPD0XkvlYN0Khe_xn3Wle85v64NjI7EulRk21SI2D5lN-gK28Sqr9WgVzc8yXtBRXVsuz_k1rXq2JPWaIwrF8X7YhHtR9nz7EHIFh-x_NhSOyY32Ka2N2f3nIxsUJLA2XkWVkLnRfVebVFFnlZVhm99vPMaQvdnqizgmOmDhO2h9aLiSmhaLZwSKVQBq8WWznJYYC_-CFEoVp2HhGHRHGF-E0_sacVJdpXAIm6dTs6uuqOEbcWy04Ex4vibaBw4JrDNRSG8HPNpS1aZLmkwi_GjsOXfIL41sYKRe7lsg0uZje49nem1baPyJ4Za3bRSWKv3h-sGWcfS3wz3Fx2Lua4-JFIJBq4jUAb7nlmBlX08T88D-fsDRhDGwNn1ZdK2aoKHr1DeB0N1apkMAybNc8Vs1c1WjCL1LUnackee6OUuZnPKkhLyDVoZKir38M2IwKTBs7Z2cWuy0wy1_0D8ltTt0MpTwDZffw_CMfMHxFKQ_S532j-0WV9-P94V6WSVjHFj2ODZiJhbSIecjJr-jHResKAmqDnzIqJ1b7v0axjaZ2nqTlxpt5f9wAHekOALPhA=w556-h496-no'
                        headerText='ONE PACIFIC PLACE'
                        headerAlign='center'
                    />
                </Grid>
            </Grid>
            <Grid container spacing={0} item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.imageBannerGridStyle}>
                <ImageBannerSection
                    imageUrl='https://lh3.googleusercontent.com/vDZrC11A0w3X-0BuxtIFSj5rJYksNJLU6ioR7_CEZz85XIxlv-7Pb0oOD7P57cNrJ2BQv_8G0ghpUiCVuldZcmAqPwASiyXO-XZbfJRVcqVqOaMEhdqmi118gveO9MsC_1xhiLLRvwajEiQfSrFw1HRGfIQyczJBbNpzv3LjCdbOsokVOFchLAF_g5n1kuOZdvzFyR9LYXbuy9EavuPpeQdMAD2Z94s0QPNop8BJoQ8Jg9hdCLvMFmtnN9NCcZJ_eoBQTKIW_LwRtbrAaDhcN6vkjmjt35ilgpUMljJe_0Iqk4vc3SjXU_eQbAhJB2vpEe65-cKqa5phevW2attYPOTTNbPTKRLP9h-XZQcmB-L-jngYeN69cSsiyyuSbSfxbuun5dQKS40St22Ii0ggQPY6IB6h3ypJ88RESd8zh_iTTiur22twU2sOhOxgMylT4hbu4k3XUSWkZD6YeaSLY57HPDxbjEYa9FxRGfEqjBlS7CWfVP4uw--VBB7GrL58WWhxmrTwpwxxT3hPn7-KQEjidjt_HC_V-9tB0oD4KGIVXaZ9kuo2SOLk0TB18-d9DeywZONl2pgpnEYjWIIXbRMPxefjK6Jv7Ro7DOcvUEKuzc_8fDqyzUAvWV7FjqPQ16jQo4u-J3irC_8R6kEExZAbbXSoc0vL9VsuuRmCLBYBw5a9HeTsM8ykWv56sw=w1420-h380-no'
                    imageHeight='20em'
                />
            </Grid>
        </div>
    );
};

export default RetailTab;