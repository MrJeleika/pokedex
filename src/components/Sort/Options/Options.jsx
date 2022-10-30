// Styles
import { Field, Form, Formik } from 'formik';
import s from './Options.module.scss';
// Misc
import { OptionsValidationSchema } from 'helpers/_validate';
export const Options = (props) => {
  const { setPokemonList } = props;
  return (
    <div>
      <Formik
        initialValues={{
          from: '',
          to: '',
          type: '',
          weakness: '',
          height: '',
          weight: '',
        }}
        validationSchema={OptionsValidationSchema}
        onSubmit={(values) => {
          // check values
          if (+values.from > +values.to) return null;
          setPokemonList(+values.from - 1, +values.to);
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
            <button type="submit">Done</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
