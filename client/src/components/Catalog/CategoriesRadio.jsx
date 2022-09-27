import { FormControl, Radio, RadioGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CustomFormControlLabel } from "./styles";

const CategoriesRadio = ({ options, materialFlag }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const primarySize = searchParams.get("size");
  const primaryFabric = searchParams.get("fabric");
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(materialFlag ? primaryFabric : primarySize);
  }, [searchParams]);

  const allOptions = options.map((option) => option.name).join();

  const handleChange = (e) => {
    setValue(e.target.value);
    const key = e.target.name;
    searchParams.set([key], e.target.value);
    setSearchParams(searchParams);
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
