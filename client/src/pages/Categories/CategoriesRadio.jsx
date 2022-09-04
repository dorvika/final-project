import { FormControl, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";
import { CustomFormControlLabel } from "./styles";

const CategoriesRadio = ({
  options,
  materialFlag,
  setFilterObj,
  filterObj,
}) => {
  const primarySize = filterObj.size || "";
  const primaryFabric = filterObj.fabric || "";
  const [value, setValue] = useState(
    materialFlag ? primaryFabric : primarySize
  );

  const allOptions = options.map((option) => option.name).join();

  const handleChange = (e) => {
    setValue(e.target.value);
    const key = e.target.name;
    setFilterObj({ ...filterObj, [key]: e.target.value });
  };

  return (
    <FormControl>
      <RadioGroup
        name={materialFlag ? "fabric" : "size"}
        value={value}
        onChange={handleChange}
      >
        {options.map((option) => (
          <CustomFormControlLabel
            key={option?._id}
            value={option?.name}
            control={<Radio size="small" />}
            label={option?.name}
          />
        ))}
        <CustomFormControlLabel
          value={allOptions}
          control={<Radio size="small" />}
          label="all"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default CategoriesRadio;
