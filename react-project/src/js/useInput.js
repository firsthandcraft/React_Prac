import { useState } from 'react';
export function useInput(defalutValue, validationFn) {
    const [enteredValue, setEnteredValues] = useState(defalutValue);
    const [didEdit, setDidEdit] = useState(false);

    const valueIsValid = validationFn(enteredValue);

    function handleInputChange(event) {
        setEnteredValues(event.target.value);
        setDidEdit(false);
    }
    function handleBlur() {
        setDidEdit(true);
    }

    return {
        value: enteredValue,
        handleInputChange,
        handleBlur,
        hasError: didEdit && !valueIsValid
    };
}
