import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { Select as MaterialSelect } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

export function Select({ label, selectedValue = '', options = [], onChange }) {

  const selectId = `select-${label}`;
  const labelId = `select-label-${label}`;

  return (
    <FormControl>
      <InputLabel id={labelId}>{label}</InputLabel>
      <MaterialSelect
        labelId={labelId}
        id={selectId}
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
      >
        {
          options.map((option, index) => (
            <MenuItem value={option.value} key={`${option.text}-${option.value}-${index}`}>
              {option.text}
            </MenuItem>
          ))
        }
      </MaterialSelect>
    </FormControl>
  )
}