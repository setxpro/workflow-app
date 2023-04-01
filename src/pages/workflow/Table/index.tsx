import { useContext, useState } from "react";
import * as C from "./styles";
import { useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { AuthContext } from "../../../contexts/auth";
import { TitlesType } from "../../../types/TitlesType";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ApprovedExpense from "../ApprovedExpense";
import LoadingTable from "../../../components/Loadings/LoadingTable";
import CostCenter from "../CostCenter";
import { toast } from "react-toastify";



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

const TableWorkflow: React.FC = () => {
  const { user } = useContext(AuthContext);

  const [titles, setTitles] = useState<TitlesType[]>([]);
  const [cc, setCc] = useState<TitlesType[]>([]);
  const [loading, setLoading] = useState(false);

  const { findAllTitles } = useApi();

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // Cod Aprovadores
  let userAprov = ["001512" , "000590"]

  const findApprov = userAprov.includes(`${user?.codAprov}`)

  useEffect(() => {

    (async () => {
        setLoading(true)
      const data = await findAllTitles(`${user?.codAprov}`);
      setTitles(data.newArrTitles);
      setLoading(false);
    })();
  }, [user?.codAprov]);

  
  useEffect(() => {
      
      (async () => {
          setLoading(true)
          const data = await findAllTitles(`${user?.codAprov}`);
          if (data.foundCC) {
            setCc(data.foundCC);
            setLoading(false);
          }
          
          setLoading(false);
    })();
  }, [user?.codAprov]);

  return (
    <C.Container>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
             {findApprov && <Tab label="Aprovação de despesas" {...a11yProps(0)} /> } 
             {findApprov && <Tab label="Centro de Custo" {...a11yProps(1)} /> } 
             {!findApprov && <Tab label="Centro de Custo" {...a11yProps(1)} /> } 
            </Tabs>
        </Box>
        <TabPanel value={value} index={!findApprov ? 1:0}>
            {loading ? <LoadingTable/> : <ApprovedExpense data={titles}/>}
        </TabPanel>
        <TabPanel value={value} index={findApprov ? 1:0}>
          {loading ? <LoadingTable/> : cc.length > 0 ? <CostCenter data={cc}/> : <h1>Não há centro de custo no momento.</h1>}  
        </TabPanel>
      </Box>
    </C.Container>
  );
};

export default TableWorkflow;
