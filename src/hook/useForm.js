import { useState } from 'react';

const useForm = initialValues => {
  const [formValues, setFormValues] = useState(initialValues);
  return [
    formValues,
    evt =>
      setFormValues({
        ...formValues,
        values: { ...formValues.values, [evt.target.name]: evt.target.value },
      }),
    evt => {
      if (evt.target.value === '') {
        setFormValues({
          ...formValues,
          errors: {
            ...formValues.errors,
            [evt.target.name]: 'Khong duoc de trong',
          },
        });
      }
    },
  ];
};

export default useForm;
