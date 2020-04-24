import React, { Fragment } from 'react';
import { useStyles } from './FormSelectStyles';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

const FormSelect = ({ inputLabelText, onChangeSelect, selectValue, menuItemFunction }) => {
    const classes = useStyles();

    return (
        <Fragment>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridItemStyle} align='center'>
                <FormControl className={classes.selectStyle}>
                    <InputLabel>{inputLabelText}</InputLabel>
                    <Select
                        value={selectValue}
                        onChange={onChangeSelect}
                    >
                        {menuItemFunction}                             
                    </Select>
                </FormControl>
            </Grid>
        </Fragment>
    );
};

export default FormSelect;