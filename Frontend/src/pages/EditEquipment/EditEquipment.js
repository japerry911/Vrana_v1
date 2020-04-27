import React, { Fragment, useState, useEffect } from 'react';
import { useStyles } from './EditEquipmentStyles';
import { useFormFields } from '../../hooks/customHooks';
import { useSelector, useDispatch } from 'react-redux';
import { getEquipment, updateEquipment } from '../../redux/actions/equipmentActions';
import Spinner from '../../components/Spinner/Spinner';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import FormHeader from '../../components/FormHeader/FormHeader';
import FormButton from '../../components/FormButton/FormButton';
import EquipmentFormBody from '../../components/EquipmentFormBody/EquipmentFormBody';
import Grid from '@material-ui/core/Grid';
import FormSelect from '../../components/FormSelect/FormSelect';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';

const INITIAL_STATE = {
    name: '',
    price: 0.0,
    year: '',
    description: '',
    cardImage: '',
    leftImage: '',
    rightImage: ''
}

const EditEquipment = ({ history }) => {
    const classes = useStyles();

    const [fields, setField, setImageField, setFields] = useFormFields(INITIAL_STATE);
    const [equipmentToEdit, setEquipmentToEdit] = useState('');

    const isLoading = useSelector(state => state.equipment.loading);
    const token = useSelector(state => state.admins.admin.token);
    const equipment = useSelector(state => state.equipment.equipment);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEquipment());
    }, [dispatch]);

    useEffect(() => {
        if (equipmentToEdit) {

            const description = equipmentToEdit.Description
                ?
                equipmentToEdit.Description.replace(/\s+/g, ' ')
                :
                '';

            setFields({
                name: equipmentToEdit.Name ? equipmentToEdit.Name : '',
                price: equipmentToEdit.Price ? equipmentToEdit.Price : 0.0,
                year: equipmentToEdit.Year ? equipmentToEdit.Year : '',
                description,
                cardImage: '',
                leftImage: '',
                rightImage: ''
            });
        }
    }, [equipmentToEdit, setFields]);

    const handleSubmit = event => {
        event.preventDefault();

        const equipmentObject = {
            Name: fields.name,
            Price: fields.price,
            Year: fields.year,
            Description: fields.description
        };

        const formData = new FormData();

        if (fields.cardImage) {
            formData.append('card_image_filename', `card_image_${Date.now()}`);
            formData.append('card_image_filetype', fields.cardImage.type.replace('image/', ''));
            formData.append('card_image', fields.cardImage);
        }

        if (fields.leftImage) {
            formData.append('template_image1_filename', `template_image1_${Date.now()}`);
            formData.append('template_image1_filetype', fields.leftImage.type.replace('image/', ''));
            formData.append('template_image1', fields.leftImage);
        }

        if (fields.rightImage) {
            formData.append('template_image2_filename', `template_image2_${Date.now()}`);
            formData.append('template_image2_filetype', fields.rightImage.type.replace('image/', ''));
            formData.append('template_image2', fields.rightImage);
        }

        Object.keys(equipmentObject).forEach(key => {
            formData.append(key, equipmentObject[key]);
        });

        dispatch(updateEquipment(equipmentToEdit.id, formData, token)).then(
            () => dispatch(getEquipment())
        );

        setEquipmentToEdit('');
        setFields(INITIAL_STATE);

        history.push('/admin/edit-equipment');
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
                <HeroHeader headerText='Admin: Edit Equipment' />
                <Grid container spacing={0} className={classes.darkGreyContainerStyle}  justify='center' align='center' item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <form onSubmit={handleSubmit} className={classes.formContainerStyle}>
                        <Grid container spacing={0} className={classes.whiteContainerStyle}>
                            <FormHeader headerText='Edit Equipment' />
                            <FormSelect
                                inputLabelText='Equipment to Edit'
                                selectValue={equipmentToEdit}
                                onChangeSelect={newEquipmentToEdit => setEquipmentToEdit(newEquipmentToEdit.target.value)}
                                menuItemFunction={equipment.map(specificEquipment => {
                                                                                return (
                                                                                    <MenuItem 
                                                                                        value={specificEquipment}
                                                                                        key={specificEquipment.id}
                                                                                    >
                                                                                        {specificEquipment.Name}
                                                                                    </MenuItem>
                                                                                );
                                })}
                            />
                            <FormHeader headerText='Equipment Fields' variant='h6' />
                            <EquipmentFormBody
                                fields={fields}
                                setField={setField}
                                setImageField={setImageField}
                            />
                            <FormButton
                                validationStatus={true}
                                buttonText='Update Equipment'
                            />
                        </Grid>
                    </form>
                </Grid>
            </Fragment>}
        </div>
    );
};

export default EditEquipment;