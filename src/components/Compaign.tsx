import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Checkbox, Stack, TextField } from "@mui/material";
import { Controller, Resolver, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField } from "./common/InputField";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { CheckboxField } from "./common/CheckboxField";
import { wrap } from "module";

const schema = yup.object().shape({
  // full_name: yup.string().required("Biệt hiệu không được để trống"),
  // msisdn: yup
  //   .string()
  //   .matches(phoneRegExp, "Số điện thoại không hợp lệ")
  //   .required("Số điện thoại được để trống"),
});

interface IFormValues {
  name: string;
  description: string;
  nameChild: string;
  advertiseName: string;
  advertiseNumber: number;
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
        px: 3,
        py: 5,
        display: "flex",
        flexDirection: "column",
        gap: 2,
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
      {value === 0 && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <InputField
            name="name"
            label="Tên chiến dịch *"
            variant="standard"
            control={control}
          />
          <InputField
            name="description"
            label="Mô tả"
            variant="standard"
            control={control}
          />
        </Box>
      )}
      {value === 1 && (
        <Box sx={{ overflow: "auto"}}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexWrap: "nowrap",
              gap: 2,
            }}
          >
            <Button
              sx={{
                borderRadius: "100%",
                width: "40px",
                height: "40px",
                minWidth: "unset",
                background: "rgb(237, 237, 237)",
              }}
            >
              <AddIcon fontSize="small" style={{ color: "red" }} />
            </Button>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
              <Box
                key={item}
                sx={{
                  width: "300px",
                  gap: 4,
                  p: 2,
                  boxShadow:
                    "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
                }}
              >
                <Typography textAlign={"center"}>
                  Chiến dịch con 1{" "}
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    style={{
                      fontSize: "14px",
                      color: "rgb(0, 128, 0",
                      width: "14px",
                      height: "14px",
                    }}
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                      fill="#008000"
                    ></path>
                  </svg>
                </Typography>
                <Typography textAlign={"center"}>0</Typography>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "baseline",
              gap: 6,
            }}
          >
            <InputField
              name="nameChild"
              label="Tên chiến dịch con *"
              variant="standard"
              control={control}
              sx={{ width: "80%" }}
            />
            <CheckboxField
              name="checkbox"
              label="Đang hoạt động"
              control={control}
            />
          </Box>
          <Typography variant="h5" my={3}>
            DANH SÁCH QUẢNG CÁO
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              // gap: 6,
            }}
          >
            <Checkbox />
            <Typography>Tên quảng cáo</Typography>
            <Typography>Số lượng</Typography>
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                border: "1px solid #3f51b5",
              }}
            >
              <AddIcon fontSize="small" />
              THÊM
            </Button>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            <Checkbox />
            <InputField
              name="advertiseName"
              // label="Tên chiến dịch con *"
              // value={"Quảng cáo 1"}
              variant="standard"
              control={control}
              // sx={{ width: "80%" }}
            />
            <InputField
              name="advertiseNumber"
              // label="Tên chiến dịch con *"
              variant="standard"
              control={control}
              // sx={{ width: "80%" }}
            />
            <DeleteIcon fontSize="small" style={{ color: "gray" }} />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Compaign;
