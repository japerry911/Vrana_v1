import React, { useState, useEffect, Fragment } from 'react';
import { useStyles } from './EditCareerStyles';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import FormSelect from '../../components/FormSelect/FormSelect';
import FormHeader from '../../components/FormHeader/FormHeader';
import FormButton from '../../components/FormButton/FormButton';
import CareersFormBody from '../../components/CareersFormBody/CareersFormBody';
import Grid from '@material-ui/core/Grid';
import { getCareers } from '../../redux/actions/careersActions';
import MenuItem from '@material-ui/core/MenuItem';
import { useFormFields } from '../../hooks/customHooks';

const INITIAL_STATE = {
    title: '',
    department: '',
    location: '',
    jobUrl: ''
};

const EditCareer = () => {
    const classes = useStyles();

    const [fields, setField, setFields] = useFormFields(INITIAL_STATE);
    const [validationStatus, setValidationStatus] = useState(false);
    const [careerToEdit, setCareerToEdit] = useState('');

    const isLoading = useSelector(state => state.careers.loading);
    const careers = useSelector(state => state.careers.careers);
    const token = useSelector(state => state.admins.admin.token);
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
                <HeroHeader headerText='Admin: Edit Career' />
                <Grid container spacing={0} className={classes.darkGreyContainerStyle}  justify='center' align='center' item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <form className={classes.formContainerStyle}>
                        <Grid container spacing={0} className={classes.whiteContainerStyle}>
                            <FormHeader headerText='Edit Career' />
                            <FormSelect
                                inputLabelText='Career to Edit'
                                selectValue={careerToEdit}
                                onChangeSelect={newCareerToEdit => setCareerToEdit(newCareerToEdit.target.value)}
                                menuItemFunction={careers.map(career => {
                                                                            return (
                                                                                <MenuItem 
                                                                                    value={career}
                                                                                    key={career.id}
                                                                                >
                                                                                    {career.Title}
                                                                                </MenuItem>
                                                                            );
                                })}
                            />
                            <FormHeader headerText='Career Fields' variant='h6' />
                            <CareersFormBody
                                fields={fields}
                                setField={setField}
                            />
                            <FormButton
                                buttonText='Update Career'
                                validationStatus={validationStatus}
                            />
                        </Grid>    
                    </form>
                </Grid>
            </Fragment>}
        </div>
    );
};

export default EditCareer;