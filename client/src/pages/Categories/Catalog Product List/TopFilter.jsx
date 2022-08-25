import { Button, Stack } from "@mui/material";

const TopFilter = () => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Button variant="outlined">shop all</Button>
        <Button variant="outlined">bedroom</Button>
        <Button variant="outlined">bed linen</Button>
        <Button variant="outlined">kitchen</Button>
        <Button variant="outlined">bathroom</Button>
        <Button variant="outlined">loungwear</Button>
        <Button variant="outlined">sale</Button>
      </Stack>
    </>
  );
};

export default TopFilter;
