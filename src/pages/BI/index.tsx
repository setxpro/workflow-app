import { useContext, useEffect, useState } from "react";
import * as C from "./styles";
import { BiProps } from "../../types/BiTypes";
import axios from "axios";
import CardBi from "./CardBi";
import EditCardBi from "./EditCard";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RegisterBi from "./RegisterBi";
import { AuthContext } from "../../contexts/auth";

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

const BI = () => {
  const [bi, setBi] = useState<BiProps[]>([]);
  const [value, setValue] = useState(0);

  const { user } = useContext(AuthContext);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_APP_TALK}/bi/find`
      );
      setBi(data);
    })();
  }, [value]);

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
              <Tab label="Dashboars" {...a11yProps(0)} />
              <Tab label="Registrar BI" {...a11yProps(1)} />
              <Tab label="Editar BI" {...a11yProps(2)} />
            </Tabs>
          )}
          {user?.role === "Developer" && (
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Dashboars" {...a11yProps(0)} />
              <Tab label="Registrar BI" {...a11yProps(1)} />
              <Tab label="Editar BI" {...a11yProps(2)} />
            </Tabs>
          )}
          {user?.role === "Member" && (
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Dashboars" {...a11yProps(0)} />
            </Tabs>
          )}
        </Box>
        <TabPanel value={value} index={0}>
          <C.ContentCards>
            <CardBi data={bi} />
          </C.ContentCards>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <RegisterBi setValue={setValue} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <C.ContentCards>
            <EditCardBi data={bi} />
          </C.ContentCards>
        </TabPanel>
      </Box>
    </C.Container>
  );
};

export default BI;
