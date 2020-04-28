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
                <TableContainer component={Paper}>
                    <Table className={classes.tableStyle}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell>Department</TableCell>
                                <TableCell>Location</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {careers.map(career => {
                                return (
                                    <TableRow key={career.id}>
                                        <TableCell component='th' scope='row'>
                                            <Link href={career.Job_Url} target='_blank'>{career.Title}</Link>
                                        </TableCell>
                                        <TableCell align='right'>{career.Department}</TableCell>
                                        <TableCell align='right'>{career.Location}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Fragment>}
        </div>
    );
};

export default Careers;