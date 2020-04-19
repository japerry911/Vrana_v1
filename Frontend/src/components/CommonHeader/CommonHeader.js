import React, { Fragment } from 'react'
import { useStyles } from './CommonHeaderStyles';
import Typography from '@material-ui/core/Typography';

const CommonHeader = ({ headerText, subHeaderText, dividerColor, headerTextColor }) => {
    const classes = useStyles({ headerTextColor });

    const dividerUrl = dividerColor === 'dark' ? 
        'https://lh3.googleusercontent.com/INjEAK2y6tTD1E6E13RpomffqWM3yBCDBWDeyIjm4U640N-PYM61BIm4yEbirqMApY6LEmKx67KxUs4MRK85n-lTdEDBozsf-kz8fl1VmMoAx8wyTwClvjmpgNTiGL7vW0VhuADOluj3HDEo_vMH6b-Vu8r7cJvgRsayIJn_l3L63FNdCY0GylJghT-gx21XNWoWt_vmk8yEGue3ImIo2bBRItqss3lWuDzDdSxvwp-DC1jN5drWuCKvEhpkDkBYhc7k8BA2ScWFMKwBHo_qz0bWcGnuggM5JrqQtaFZ8A5giI3hkBUQb1L_rJeFbZxWs_HruFP5b3rz4a7yk5Sc12rm5WAEmNt017f056LOvre6TayvRpsfQelaB-gq2mtXdkIOmSfqNWuoNIOTAhNy2d1JGHnF93SmrIreXZJUtX1SyAtGEDQmCEmLuUCWlo4yM3uiDIPLmFHCnEfZPXuqQd_UQ2SbIcFO-UYbUQGcg4keJMABfxHjgjnDSx8YPaZaetSvbZDbnjSfJzg7gBAr9MIup3_9BwPdqVNyu5VgFTUndEQ2okVeQDHB_GjqjiBLylLh114ILB5YsATvU_I2Su8XxbaK-OCqrZ-kw0kFWd81F5h6cmoxt3ThL_fd27rQUO34fzXCPBsqXAoWoyFVgxgmC-BsvrUVyP0ilrqhY9H4Yy_si7favNitK_wWBg=w78-h6-no'
        :
        'https://lh3.googleusercontent.com/eOL4ByNZdsEe5047ZY_tPaUASAddInxOp_n1ey1Cp-y4kopwS8gCSqD6zRfg1RYkdVtuIbSRi4WRVAMcMDT-ybj-s_cfmKujmmrisXuR5xC5qCRMZeNBErgxsAvhgQbtmaLSo6zkGL2xvYlpPjcaqRdDzJzGEzsoMwquIgC7TimXVduaJyYsbr3jTmT1TPf73bNTtGcc3kr9ALXDCCJ2YrGWHbQhObY4muACT2I5pneCOooeYNQIV46Q5CxRFOLHJiwP8__Ow3esZEooHhgh-8ZP1l-EM1WvHi4Z9-ir4K8FOzxn1wintCl2u77nYDWFeuV6rKnvP7C04N1reWiTKESQO6jO56sTt-akuLLVdhrYkw266OK6-4phfiRhd_zhLv-pE6vA5vTU7ipJxe-_ANJsdKICRQXjHcmA7i3hJw0ZtE5VMC8suWsKQ70TYvGKtB8944QL2FM9h4aG77D-WWX9-lW1DVpFiyNY8rs0sjyZCwkuZ90ypTP5gFOG2W22pZkSxuFmrhGLUpBJ5vQhnTLBrwZsHpO2RsOK9h1Q3Hb2ZC9YyEE_fmWC0UUGigcjx1_MDqS4uWTx0fV_iaaoSKqFCZwJOjsRPmuRdumrZO1TnDgusiET-_hOqmLcLcxCJmiadK9q32L2yfOORIOMfzkbrlKHjJ6fXDvSRwHTAqW3qtWSRoJHZzx_pY_WfA=w78-h7-no';

    return (
        <Fragment>
            <Typography variant='body1' className={classes.redSubtitleTextStyle}>
                {subHeaderText}}
            </Typography>
            <Typography variant='h3' className={classes.greyTitleTextStyle}>
                {headerText}
            </Typography>
            <img
                alt='Divider Lines'
                src={dividerUrl}
            />
        </Fragment>
    );
};

export default CommonHeader;