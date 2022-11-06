import Select from 'react-select';

export const SelectField = ({ field, form, option }) => {
  let types = [];
  if (option === 'type') {
    types = [
      { value: 'all', label: 'All', color: '#050f28' },
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
  }
  if (option === 'weight') {
    types = [
      { value: '0 500000', label: 'All', color: '#050f28' },
      { value: '0 10', label: '0 - 10kg', color: '#B4B4B4' },
      { value: '10 25', label: '10kg - 25kg', color: '#A0A0A0' },
      { value: '25 50', label: '25kg - 50kg', color: '#8C8C8C' },
      { value: '50 100', label: '50kg - 100kg', color: '#787878' },
      { value: '100 200', label: '100kg - 200kg', color: '#646464' },
      { value: '200 500000', label: '200kg+', color: '#505050' },
    ];
  }
  if (option === 'height') {
    types = [
      { value: '0 500000', label: 'All', color: '#050f28' },
      { value: '0 2', label: '0 - 0.2m', color: '#B4B4B4' },
      { value: '2 5', label: '0.2m - 0.5m', color: '#A0A0A0' },
      { value: '5 10', label: '0.5m - 1m', color: '#8C8C8C' },
      { value: '10 15', label: '1m - 1.5m', color: '#787878' },
      { value: '15 20', label: '1.5m - 2m', color: '#646464' },
      { value: '20 30', label: '2m - 3m', color: '#505050' },
      { value: '30 5000000', label: '3m+', color: '#3C3C3C' },
    ];
  }
  const colorStyles = {
    control: (styles) => ({
      ...styles,
      width: option === 'weight' || option === 'height' ? '200px' : '150px',
      marginLeft: '10px',
      fontSize: '18px',
      border: '2px solid rgb(153, 153, 153) !important',
      transition: '0.3s ease-in',
      '&:hover': {
        border: '2px solid rgb(112, 112, 112) !important',
      },
      boxShadow: 'none !important',
      borderRadius: '10px',
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
