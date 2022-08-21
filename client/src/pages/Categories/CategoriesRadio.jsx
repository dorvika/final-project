import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
// import { useState } from "react";

const CategoriesRadio = ({ options }) => {
  // value поки ніде не використовується, але воно нам знадобиться коли будемо фільтрувати дані з бекенду. Закоментувала, щоб не було помилок
  // const [value, setValue] = useState(options[0].value);

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };

  return (
    <FormControl>
      <RadioGroup defaultValue={options[0].value}>
        {options.map((option) => (
          <FormControlLabel
            key={option.id}
            value={option.value}
            // onChange={handleChange}
            control={<Radio size="small" />}
            label={option.value}
            sx={{
              gap: "20px",
              "& .MuiButtonBase-root.MuiRadio-root.Mui-checked": {
                color: "#8C8C8C",
              },
            }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default CategoriesRadio;
