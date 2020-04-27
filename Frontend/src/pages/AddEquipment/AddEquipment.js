import React, { Fragment, useState } from 'react';
import { useStyles } from './AddEquipmentStyles';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import FormHeader from '../../components/FormHeader/FormHeader';
import Grid from '@material-ui/core/Grid';
import Footer from '../../components/Footer/Footer';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import { useFormFields } from '../../hooks/customHooks';
import FormButton from '../../components/FormButton/FormButton';
import EquipmentFormBody from '../../components/EquipmentFormBody/EquipmentFormBody';
import { createEquipment } from '../../redux/actions/equipmentActions'

const INITIAL_STATE = {
    name: '',
    price: 0.0,
    year: '',
    description: '',
    cardImage: '',
    leftImage: '',
    rightImage: ''
}

const AddEquipment = () => {
    const classes = useStyles();

    const [fields, setField, setImageField, setFields] = useFormFields(INITIAL_STATE);
    const [validationStatus, setValidationStatus] = useState(false);

    const isLoading = useSelector(state => state.equipment.loading);
    const dispatch = useDispatch();

    return (
        <div className={classes.mainDivStyle}>
            {isLoading
            ?
            <div className={classes.spinnerDiv}>
                <Spinner />
            </div>
            :
            <Fragment>
                <HeroHeader headerText='Admin: Add Equipment' />
                <Grid container spacing={0} className={classes.darkGreyContainerStyle}  justify='center' align='center' item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <form className={classes.formContainerStyle}>
                    <Grid container spacing={0} className={classes.whiteContainerStyle}>
                        <FormHeader headerText='Add Equipment' />
                        <EquipmentFormBody 
                            fields={fields}
                            setField={setField}
                            setImageField={setImageField}
                        />
                        <FormButton
                            buttonText='Add Equipment'
                            validationStatus={validationStatus}
                        />
                    </Grid>
                    </form>
                </Grid>
                <Footer />
            </Fragment>}
        </div>
    );
};

export default AddEquipment;