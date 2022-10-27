import React from 'react';
import { Formik, Field, Form } from 'formik';
// Styles
import s from './Search.module.scss';
//Misc
import { PokeballSVG } from 'components/svgs/pokeball';
export const Search = (props) => {
  const { setPokemonList, searchPokemonByName } = props;
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
        }}
        onSubmit={(value) => {
          isFinite(+value.name)
            ? searchPokemonByName(+value.name)
            : searchPokemonByName(value.name.toLowerCase());
        }}
      >
        <Form className={s.form}>
          <Field
            id="name"
            name="name"
            placeholder="Search your Pokémon"
            className={s.input}
          ></Field>
          <button type="submit" className={s.button}>
            <PokeballSVG />
          </button>
        </Form>
      </Formik>
    </div>
  );
};
