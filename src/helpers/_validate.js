import * as Yup from 'yup';
export const OptionsValidationSchema = Yup.object().shape({
  to: Yup.number()
    .min(1)
    .max(898)
    .positive()
    .integer()
    .moreThan(Yup.ref('from')),
  from: Yup.number()
    .min(1)
    .max(898)
    .positive()
    .integer()
    .lessThan(Yup.ref('to')),
});
