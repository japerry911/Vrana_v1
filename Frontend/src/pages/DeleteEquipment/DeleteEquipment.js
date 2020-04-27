import React, { Fragment, useState, useEffect } from 'react';
import { useStyles } from './DeleteEquipmentStyles';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEquipment, getEquipment } from '../../redux/actions/equipmentActions';
import Spinner from '../../components/Spinner/Spinner';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import FormHeader from '../../components/FormHeader/FormHeader';
import FormSelect from '../../components/FormSelect/FormSelect';
import FormButton from '../../components/FormButton/FormButton';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';

const DeleteEquipment = () => {
    const classes = useStyles();

    const [equipmentToDelete, setEquipmentToDelete] = useState('');

    const isLoading = useSelector(state => state.equipment.loading);
    const equipment = useSelector(state => state.equipment.equipment);
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
                <HeroHeader headerText='Admin: Delete Equipment' />
                <Grid container spacing={0} className={classes.darkGreyContainerStyle}  justify='center' align='center' item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <form className={classes.formContainerStyle}>
                        <Grid container spacing={0} className={classes.whiteContainerStyle}>
                            <FormHeader headerText='Delete Equipment' />
                            <FormSelect
                                inputLabelText='Equipment to Delete'
                                selectValue={equipmentToDelete}
                                onChangeSelect={newEquipmentToDelete => setEquipmentToDelete(newEquipmentToDelete.target.value)}
                                menuItemFunction={equipment.map(specificEquipment => {
                                                                            return (
                                                                                <MenuItem 
                                                                                    value={specificEquipment.id}
                                                                                    key={specificEquipment.id}
                                                                                >
                                                                                    {specificEquipment.Name}
                                                                                </MenuItem>
                                                                            );
                                })} 
                            />
                            <FormButton 
                                buttonText='Delete Equipment'
                                validationStatus={equipmentToDelete}
                            />
                        </Grid>
                    </form>
                </Grid>
            </Fragment>}
        </div>
    );
};

export default DeleteEquipment;