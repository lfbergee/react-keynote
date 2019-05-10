export const form = `import React from 'react';
import produce from 'immer';

export const validationReducer = produce((draft, action) => {
    switch (action.type) {
        case 'VALIDATE':
            action.toValidate.forEach(({ fieldName, value }) => {
                if (draft[fieldName].validate(value)) {
                    draft[fieldName].hasError = false;
                } else {
                    draft[fieldName].hasError = true;
                }
            });
            return draft;
        default:
            return draft;
    }
});

// init function to register all fields to the reducer
const init = fields =>
    fields.reduce(
        (acc, { fieldName, ...field }) => ({
            [fieldName]: { ...field },
            ...acc,
        }),
        {},
    );

/**
 * Custom hook for validation
 * Expects and array of fields with fieldName, errorMessage and validator function
 * Returns an array of functions to get error message, validate field and get any validation error
 */
const useValidation = (fields) => {
    const [state, dispatch] = React.useReducer(validationReducer, fields, init);

    const getFieldErrorMessage = fieldName =>
        state[fieldName] && state[fieldName].hasError && state[fieldName].errorMessage;

    const hasValidationError = () => Object.keys(state).some(field => state[field].hasError);

    const validateField = toValidate =>
        dispatch({
            type: 'VALIDATE',
            toValidate,
        });

    return [getFieldErrorMessage, validateField, hasValidationError];
};

export default useValidation;`;

export const brand = `
export const withTexts = text => Wrapper => props => (
   <BrandContext.Consumer>
       {(brand) => {
           const selectedTexts = text[brand || BRANDS.SOME_BANK];
           return <Wrapper {...selectedTexts} {...props} />;
       }}
   </BrandContext.Consumer>
);

export const useTexts = (texts) => {
   const brand = useBrand();
   return texts[brand] || {};
};`;

export const customhook = `import React, { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}`;
