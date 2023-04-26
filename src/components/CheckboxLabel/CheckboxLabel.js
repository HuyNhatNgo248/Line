import { FormGroup, FormControlLabel, Checkbox, useTheme } from "@mui/material";

const CheckboxLabel = (props) => {
  const theme = useTheme();
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked
            sx={{
              color: theme.palette.black[500],
              "&.Mui-checked": {
                color: theme.palette.green[900],
              },
            }}
          />
        }
        label={props.label}
        sx={{
          color: theme.palette.black[300],
          "& .MuiFormControlLabel-label": {
            fontSize: `calc(${theme.typography.fs[12]} + 0.5rem) !important`,
          },
          ...props.labelSx,
        }}
      />
    </FormGroup>
  );
};

export default CheckboxLabel;
