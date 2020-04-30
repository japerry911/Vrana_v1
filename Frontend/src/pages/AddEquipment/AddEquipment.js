import React, { Fragment, useState, useEffect } from 'react';
import { useStyles } from './AddEquipmentStyles';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import FormHeader from '../../components/FormHeader/FormHeader';
import Grid from '@material-ui/core/Grid';
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

const AddEquipment = ({ history }) => {
    const classes = useStyles();

    const [fields, setField, setFields, setImageField] = useFormFields(INITIAL_STATE);
    const [validationStatus, setValidationStatus] = useState(false);

    const isLoading = useSelector(state => state.equipment.loading);
    const token = useSelector(state => state.admins.admin.token);
    const dispatch = useDispatch();

    useEffect(() => {
        if (fields.name && fields.price && fields.year && fields.description && fields.cardImage) {
            setValidationStatus(true);
        } else {
            setValidationStatus(false);
        }
    }, [fields]);

    const handleSubmit = event => {
        event.preventDefault();

        const equipmentObject = {
            Name: fields.name,
            Year: fields.year.toString(),
            Price: fields.price,
            Description: fields.description
        };

        const formData = new FormData();

        formData.append('card_image_filename', `card_image_${Date.now()}`);
        formData.append('card_image_filetype', fields.cardImage.type.replace('image/', ''));
        formData.append('card_image', fields.cardImage);

        if (fields.leftImage !== '') {
            formData.append('template_image1_filename', `template_image1_${Date.now()}`);
            formData.append('template_image1_filetype', fields.leftImage.type.replace('image/', ''));
            formData.append('template_image1', fields.leftImage);
        } else {
            formData.append('template_image1_filetype', '');
        }

        if (fields.rightImage !== '') {
            formData.append('template_image2_filename', `template_image2_${Date.now()}`);
            formData.append('template_image2_filetype', fields.rightImage.type.replace('image/', ''));
            formData.append('template_image2', fields.rightImage);
        } else {
            formData.append('template_image2_filetype', '');
        }

        Object.keys(equipmentObject).forEach(key => {
            formData.append(key, equipmentObject[key]);
        });

        dispatch(createEquipment(formData, token));

        setFields(INITIAL_STATE);

        history.push('/admin/add-equipment');
    };

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
                    <form onSubmit={handleSubmit} className={classes.formContainerStyle}>
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
            </Fragment>}
        </div>
    );
};

export default AddEquipment;