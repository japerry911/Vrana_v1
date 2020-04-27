import React, { Fragment } from 'react';
import { useStyles } from './AddEquipmentStyles';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import FormHeader from '../../components/FormHeader/FormHeader';
import Grid from '@material-ui/core/Grid';
import Footer from '../../components/Footer/Footer';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import { useFormFields } from '../../hooks/customHooks';
import FormButton from '../../components/FormButton/FormButton';
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

    const isLoading = useSelector(state => state.equipment.loading);
    const dispatch = dispatch();

    return (
        <div className={classes.mainDivStyle}>
            <Fragment></Fragment>
        </div>
    );
};

export default AddEquipment;