import React, { Fragment, useEffect, useState } from 'react';
import { useStyles } from './DeleteCareerStyles';
import { useSelector, useDispatch } from 'react-redux';
import { getCareers } from '../../redux/actions/careersActions';
import Spinner from '../../components/Spinner/Spinner';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import FormHeader from '../../components/FormHeader/FormHeader';
import FormButton from '../../components/FormButton/FormButton';
import FormSelect from '../../components/FormSelect/FormSelect';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

const DeleteCareer = () => {
    const classes = useStyles();

    const [careerToDelete, setCareerToDelete] = useState('');

    const isLoading = useSelector(state => state.careers.loading);
    const token = useSelector(state => state.admins.admin.token);
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
                <HeroHeader headerText='Admin: Delete Career' />
                <Grid container spacing={0} className={classes.darkGreyContainerStyle}  justify='center' align='center' item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <form className={classes.formContainerStyle}>
                        <Grid container spacing={0} className={classes.whiteContainerStyle}>
                            <FormHeader headerText='Delete Career' />
                            <FormSelect
                                inputLabelText='News Article to Delete'
                                selectValue={careerToDelete}
                                onChangeSelect={newCareerToDelete => setCareerToDelete(newCareerToDelete.target.value)}
                                menuItemFunction={careers.map(career => {
                                                                            return (
                                                                                <MenuItem 
                                                                                    value={career.id}
                                                                                    key={career.id}
                                                                                >
                                                                                    {career.Title}
                                                                                </MenuItem>
                                                                            );
                                })} 
                            />
                            <FormButton
                                buttonText='Delete Career'
                                validationStatus={careerToDelete}
                            />
                        </Grid>
                    </form>
                </Grid>
            </Fragment>}
        </div>
    );
};

export default DeleteCareer;