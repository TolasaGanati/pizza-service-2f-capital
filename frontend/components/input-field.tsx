import { Box, SxProps, TextField, Typography } from "@mui/material";
import { FieldError } from "react-hook-form";
import { styled } from "@mui/system";
import { Theme } from "@mui/system";

const StyledBox = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "8px", // Replace 'gap: 1' with a valid unit like '8px'
});

type InputFieldProps = {
  label: string;
  type: string;
  name: string;
  register: any;
  error?: FieldError | any;
  InputLabelProps?: any;
  sx?: SxProps<Theme>;
};

const InputField = ({
  label,
  type,
  name,
  register,
  error,
  InputLabelProps,
  sx,
}: InputFieldProps) => {
  return (
    <StyledBox sx={sx}>
      {" "}
      {/* you can still pass sx if needed */}
      <TextField
        {...register(name, { valueAsNumber: type === "number" })}
        label={label}
        type={type}
        variant="outlined"
        InputLabelProps={InputLabelProps}
      />
      {error?.message && (
        <Typography style={{ color: "red" }}>
          {error.message.toString()}
        </Typography>
      )}
    </StyledBox>
  );
};

export default InputField;
