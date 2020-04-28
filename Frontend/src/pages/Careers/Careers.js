import React, { useEffect, Fragment } from 'react';
import { useStyles } from './CareersStyles';
import { useSelector, useDispatch } from 'react-redux';
import { getCareers } from '../../redux/actions/careersActions';
import Spinner from '../../components/Spinner/Spinner';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Footer from '../../components/Footer/Footer';
import HeroHeader from '../../components/HeroHeader/HeroHeader';

const Careers = () => {
    const classes = useStyles();

    const isLoading = useSelector(state => state.careers.loading);
    const careers = useSelector(state => state.careers.careers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCareers());
    }, [dispatch]);

    return (
        <div className={classes.mainDivStyle}>
            {isLoading
            ?
            <div className={classes.spinnerDiv}>
                <Spinner />
            </div>
            :
            <Fragment>
                <HeroHeader headerText='Careers' />
                <Grid container spacing={0} className={classes.darkGreyContainerStyle}  justify='center' align='center' item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TableContainer component={Paper} style={{ width: '60%' }}>
                        <Table className={classes.tableStyle}>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ fontFamily: 'Avenir-Bold' }}>Title</TableCell>
                                    <TableCell style={{ fontFamily: 'Avenir-Bold' }}>Department</TableCell>
                                    <TableCell style={{ fontFamily: 'Avenir-Bold' }}>Location</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {careers.map(career => {
                                    return (
                                        <TableRow key={career.id}>
                                            <TableCell component='th' scope='row' style={{ fontFamily: 'Avenir' }}>
                                                <Link href={career.Job_Url} target='_blank'>{career.Title}</Link>
                                            </TableCell>
                                            <TableCell style={{ fontFamily: 'Avenir' }}>{career.Department}</TableCell>
                                            <TableCell style={{ fontFamily: 'Avenir' }}>{career.Location}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Footer />
            </Fragment>}
        </div>
    );
};

export default Careers;