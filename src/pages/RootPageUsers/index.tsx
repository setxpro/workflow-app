import { useContext, useState } from "react";
import * as C from "./styles";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AuthContext } from "../../contexts/auth";
import CreateUser from "../Users/CreateUser";
import TabUsers from "../Users/TabUsers";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const RootPageUsers = () => {
  const [value, setValue] = useState(0);

  const { user } = useContext(AuthContext);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <C.Container>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          {user?.role === "Admin" && (
            <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Usuários" {...a11yProps(0)} />
            <Tab label="Registrar usuário" {...a11yProps(1)} />
          </Tabs>
          )}
          {user?.role === "Developer" && (
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Usuários" {...a11yProps(0)} />
              <Tab label="Registrar usuário" {...a11yProps(1)} />
            </Tabs>
          )}
          {user?.role === "Member" && null}
        </Box>
        <TabPanel value={value} index={0}><TabUsers/></TabPanel>
        <TabPanel value={value} index={1}><CreateUser setValue={setValue}/></TabPanel>
      </Box>
    </C.Container>
  );
};

export default RootPageUsers;
