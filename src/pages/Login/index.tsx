import {
  Box,
  Button,
  Checkbox,
  createTheme,
  CssBaseline,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { LoginStyled } from "./styled";
import { useState } from "react";
import Login1 from "../../assets/image/image1.png";

interface IUserData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [inputValue, setInputValue] = useState<IUserData>({
    email: "",
    password: "",
  });
  const defaultTheme = createTheme();
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <ToastContainer /> */}
      <LoginStyled>
        <Box
          sx={{
            px: { xs: 0, xl: 46 },
            width: "100%",
          }}
        >
          <Grid
            container
            component="main"
            sx={{ width: { xs: "100%", xl: "60vw" }, height: "auto", mb: 0.5 }}
          >
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={5}
              sx={{
                backgroundImage: `url(${Login1})`,
                backgroundRepeat: "no-repeat",
                backgroundColor: (t) =>
                  t.palette.mode === "light"
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Grid
              item
              xs={12}
              sm={8}
              md={6}
              component={Paper}
              elevation={6}
              square
            >
              <Box
                sx={{
                  my: 8,
                  mx: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "#324C63",
                }}
              >
                <Typography fontWeight="bold" component="h1" variant="h5">
                  Đăng nhập tài khoản
                </Typography>
                <Box sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Tên tài khoản"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={(e) =>
                      setInputValue({
                        ...inputValue,
                        email: e.target.value,
                      })
                    }
                  >
                    {inputValue.email}
                  </TextField>

                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Nhập mật khẩu"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) =>
                      setInputValue({
                        ...inputValue,
                        password: e.target.value,
                      })
                    }
                  >
                    {inputValue.password}
                  </TextField>

                  <Grid container>
                    <Grid item xs>
                      <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Lưu tài khoản"
                      />
                    </Grid>
                    <Grid item>
                      <NavLink to="/forgot-password">
                        <Typography
                          sx={{ paddingTop: "10px", color: "#8a8a8a" }}
                        >
                          Quên mật khẩu
                        </Typography>
                      </NavLink>
                    </Grid>
                  </Grid>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      // type="submit"
                      onClick={() => navigate("/login-user")}
                      variant="contained"
                      sx={{
                        width: { xs: "95%", xl: "50%" },
                        mt: 3,
                        mb: 2,
                        borderRadius: "5px",
                        height: { xs: "50px" },
                        bgcolor: "#324c63",
                        fontWeight: "bold",
                        fontSize: "1rem",
                      }}
                    >
                      Đăng nhập
                    </Button>
                  </Box>

                  <Typography
                    sx={{
                      width: "100%",
                      mt: "10rem",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    Bằng việc tiếp tục, bạn đồng ý với Điều khoản sử dụng,
                    <span style={{ color: "#D70000" }}> Chính sách</span>
                  </Typography>
                  <Typography
                    sx={{
                      width: "100%",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <span style={{ color: "#D70000" }}>
                      bảo mật, Quy chế, Chính sách{" "}
                    </span>
                    của chúng tôi
                  </Typography>
                  <Box
                    sx={{
                      mt: "10rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <NavLink
                      style={{ color: "#000", textDecoration: "none" }}
                      to="/register"
                    >
                      <Box
                        sx={{
                          display: " flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography sx={{ color: "#000" }}>
                          Bạn chưa là thành viên?
                        </Typography>
                        <Typography
                          sx={{
                            color: "#E14040",
                          }}
                        >
                          &nbsp;Đăng ký
                        </Typography>
                        <Typography>&nbsp;tại đây</Typography>
                      </Box>
                    </NavLink>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </LoginStyled>
    </ThemeProvider>
  );
};

export default LoginPage;
