import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { Controller, Resolver, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  // full_name: yup.string().required("Biệt hiệu không được để trống"),
  // msisdn: yup
  //   .string()
  //   .matches(phoneRegExp, "Số điện thoại không hợp lệ")
  //   .required("Số điện thoại được để trống"),
});

interface IFormValues {
  full_name: string;
  description: string;
  // resolver: any
}

function Compaign() {
  const [value, setValueText] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValueText(newValue);
  };

  const resolver: Resolver<IFormValues> = async (values: any) => {
    return {
      values: values.firstName ? values : {},
      errors: !values.firstName
        ? {
            firstName: {
              type: "required",
              message: "This is required.",
            },
          }
        : {},
    };
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<IFormValues>({
    resolver,
  });
  return (
    <Box
      sx={{
        width: "90%",
        mx: "auto",
        mt: 4,
        // mx: 3,
        px: 3,
        py: 5,
        // background: "red",
        boxShadow:
          "0 4px 6px -1px rgba(0,0,0,0.2), 0 2px 4px -2px rgba(0,0,0,0.12)",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Thông tin" />
          <Tab label="Chiến dịch con" />
        </Tabs>
      </Box>
      <Box
        sx={{
          width: "100%",
          mt: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Controller
          name="full_name"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <TextField
                // inputProps={{ style: { color: "white" } }}s
                // error={!!errors.full_name}
                variant="standard"
                label={"Tên chiến dịch *"}
                // sx={{
                //   color: "white",
                //   background: "#1a1d2a",
                //   border: "1px solid rgba(255, 255, 255, 0.1)",
                //   "& input": {
                //     color: "white",
                //   },
                // }}
                size="small"
                fullWidth
                onChange={onChange}
                value={value}
                // {...field}
              />
            );
          }}
        />
        <Controller
          name="description"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <TextField
                // inputProps={{ style: { color: "white" } }}s
                // error={!!errors.full_name}
                variant="standard"
                label={"Mô tả"}
                // sx={{
                //   color: "white",
                //   background: "#1a1d2a",
                //   border: "1px solid rgba(255, 255, 255, 0.1)",
                //   "& input": {
                //     color: "white",
                //   },
                // }}
                size="small"
                fullWidth
                onChange={onChange}
                value={value}
                // {...field}
              />
            );
          }}
        />
      </Box>
    </Box>
  );
}

export default Compaign;
