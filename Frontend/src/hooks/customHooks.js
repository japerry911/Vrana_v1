import { useState } from 'react';

export const useFormFields = initialState => {
    const [fields, setFields] = useState(initialState);

    return [
        fields,
        event => {
            setFields({
                ...fields,
                [event.target.id]: event.target.value
            });
        },
        event => {
            setFields({
                ...fields,
                [event.target.id]: event.target.files[0]
            });
        },
        setFields
    ];
};