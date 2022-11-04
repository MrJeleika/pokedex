// Styles
import { Field, Form, Formik } from 'formik';
import s from './Options.module.scss';
// Misc
import { OptionsValidationSchema } from 'helpers/_validate';
import { CustomSelect, SelectField } from './Select/Select';
export const Options = (props) => {
  const { setPokemonList, setTypeFilter1, setTypeFilter2 } = props;
  return (
    <div>
      <Formik
        initialValues={{
          from: '',
          to: '',
          type1: '',
          type2: '',
          weakness: '',
          height: '',
          weight: '',
        }}
        validationSchema={OptionsValidationSchema}
        onSubmit={(values) => {
          // check values
          if (+values.from > +values.to) return null;
          setPokemonList(+values.from - 1, +values.to);
          setTypeFilter1(values.type1);
          setTypeFilter2(values.type2);
        }}
      >
        {({ errors, touched }) => (
          <Form className={s.form}>
            <label for="from" className={s.label}>
              from
            </label>
            <Field
              id="from"
              name="from"
              type="text"
              className={
                errors.from && touched.from
                  ? `${s.textField} ${s.error}`
                  : s.textField
              }
            />
            <label for="to" className={s.label}>
              to
            </label>
            <Field
              id="to"
              name="to"
              type="text"
              className={
                errors.to && touched.to
                  ? `${s.textField} ${s.error}`
                  : s.textField
              }
            />
            <Field
              className={s.select}
              name={'type1'}
              component={SelectField}
            />
            <Field
              className={s.select}
              name={'type2'}
              component={SelectField}
            />
            <button type="submit">Done</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
