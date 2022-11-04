import { FieldProps } from 'formik';
import React from 'react';
import Select, { Option, ReactSelectProps } from 'react-select';

export const SelectField = ({ field, form }) => {
  const types = [
    { value: 'all', label: 'All', color: '#000000' },
    { value: 'normal', label: 'Normal', color: '#a3a49f' },
    { value: 'fighting', label: 'Fighting', color: '#d8474f' },
    { value: 'flying', label: 'Flying', color: '#9fb8ed' },
    { value: 'poison', label: 'Poison', color: '#ca5dd8' },
    { value: 'ground', label: 'Ground', color: '#de7d50' },
    { value: 'rock', label: 'Rock', color: '#cdbe8a' },
    { value: 'bug', label: 'Bug', color: '#9ec42d' },
    { value: 'ghost', label: 'Ghost', color: '#666ec6' },
    { value: 'steel', label: 'Steel', color: '#579fa5' },
    { value: 'water', label: 'Water', color: '#67b4de' },
    { value: 'fire', label: 'Fire', color: '#ffa84d' },
    { value: 'grass', label: 'Grass', color: '#5cc06a' },
    { value: 'electric', label: 'Electric', color: '#f6dd5f' },
    { value: 'psychic', label: 'Psychic', color: '#f8908a' },
    { value: 'ice', label: 'Ice', color: '#82d8cd' },
    { value: 'dragon', label: 'Dragon', color: '#0179c2' },
    { value: 'dark', label: 'Dark', color: '#5b5869' },
    { value: 'fairy', label: 'Fairy', color: '#f88eea' },
  ];
  const colorStyles = {
    control: (styles) => ({
      ...styles,
      width: '200px',
      marginRight: '10px',
      fontSize: '20px',
      lineHeight: '1.5',
      fontWeight: '500',
      background: 'white',
    }),
    option: (styles, { data, isFocused, isActive }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? 'white' : 'white',
        fontWeight: '700',
        '&:hover': {
          backgroundColor: `${data.color}4D`,
        },

        color: data.color,
      };
    },
  };
  return (
    <Select
      options={types}
      name={field.name}
      value={types ? types.find((option) => option.value === field.value) : ''}
      onChange={(option) => form.setFieldValue(field.name, option.value)}
      onBlur={field.onBlur}
      styles={colorStyles}
    />
  );
};
