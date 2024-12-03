import { useState } from "react";
import { MenuStyle } from "./styled";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";

const Menu = () => {
  const [address, setAddress] = useState("");
  const [typeHome, setTypeHome] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [acreage, setAcreage] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAddress(event.target.value);
  };
  const handleSelectHome = (e: SelectChangeEvent) => {
    setTypeHome(e.target.value);
  };
  const handleChangePrice = (event: SelectChangeEvent) => {
    setPrice(event.target.value);
  };
  const handleChangeStatus = (e: SelectChangeEvent) => {
    setStatus(e.target.value);
  };
  const handleChangAcreage = (e: SelectChangeEvent) => {
    setAcreage(e.target.value);
  };
  return (
    <MenuStyle>
      <Box className="menu-selected-option">
        <Box>
          <FormControl
            variant="outlined"
            size="small"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Khu vực
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={address}
              onChange={handleChange}
              label="address"
            >
              <MenuItem value="">
                <em>Không</em>
              </MenuItem>
              <MenuItem value="hanoi">Hà Nội</MenuItem>
              <MenuItem value="danang">Đà Nẵng</MenuItem>
              <MenuItem value="hcm">Tp.Hồ Chí Minh</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <FormControl
            variant="outlined"
            size="small"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Loại hình
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={typeHome}
              onChange={handleSelectHome}
              label="home"
            >
              <MenuItem value="">
                <em>Không</em>
              </MenuItem>
              <MenuItem value="hanoi">Chung cư</MenuItem>
              <MenuItem value="danang">Nhà Đất</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <FormControl
            variant="outlined"
            size="small"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Mức giá
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={price}
              onChange={handleChangePrice}
              label="price"
            >
              <MenuItem value="">
                <em>Không</em>
              </MenuItem>
              <MenuItem value="hanoi">1 tỷ - 3 tỷ</MenuItem>
              <MenuItem value="danang">3 tỷ - 5 tỷ</MenuItem>
              <MenuItem value="danang">5 tỷ - 7 tỷ</MenuItem>
              <MenuItem value="danang">7 tỷ - 10 tỷ</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <FormControl
            variant="outlined"
            size="small"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Mức giá
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={status}
              onChange={handleChangeStatus}
              label="status"
            >
              <MenuItem value="">
                <em>Không</em>
              </MenuItem>
              <MenuItem value="hanoi">Mở bán</MenuItem>
              <MenuItem value="danang">Đã hết</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <FormControl
            variant="outlined"
            size="small"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Diện tích
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={acreage}
              onChange={handleChangAcreage}
              label="acreage"
            >
              <MenuItem value="">
                <em>Không</em>
              </MenuItem>
              <MenuItem value="hanoi">Dưới 100 m²</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box className="box-search">
        <button type="submit">
          <SearchIcon sx={{ color: "#fff" }} fontSize="medium" />
        </button>
        <input
          //   className="box-search"
          type="text"
          placeholder="Tìm kiếm"
          name="search"
        />
      </Box>
    </MenuStyle>
  );
};

export default Menu;
