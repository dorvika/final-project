import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

const CategoriesRadio = ({
  options,
  materialFlag,
  setFilterObj,
  filterObj,
}) => {
  const [value, setValue] = useState(materialFlag ? "COTTON" : "single");

  const handleChange = (e) => {
    setValue(e.target.value);
    const key = e.target.name;
    setFilterObj({ ...filterObj, [key]: e.target.value });
  };

  return (
    <FormControl>
      <RadioGroup
        name={materialFlag ? "material" : "size"}
        value={value}
        onChange={handleChange}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option?._id}
            value={option?.name}
            control={<Radio size="small" />}
            label={option?.name}
            sx={{
              gap: "10px",
              "& .MuiTypography-root.MuiTypography-body1.MuiFormControlLabel-label":
                {
                  fontSize: "14px",
                  textTransform: "uppercase",
                },

              "& .MuiButtonBase-root.MuiRadio-root.Mui-checked": {
                color: "#8C8C8C",
              },
              "& .MuiButtonBase-root.MuiRadio-root": {
                padding: "4px",
              },
            }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default CategoriesRadio;
