import React from "react";

import * as C from "./styles";
import { TitlesType } from "../../../types/TitlesType";
import Button  from '@mui/material/Button';
import { Link } from 'react-router-dom';
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { FormControlLabel, Radio } from "@mui/material";
import CancelIcon  from '@mui/icons-material/Cancel';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

interface Props {
  data: TitlesType[];
}

const ApprovedExpense: React.FC<Props> = ({ data }) => {

  let info = data.map((i) => i.ADFIWKF);

  let dropOptions = info.filter((x, y) => {
    return info.indexOf(x) === y
  })

  const [company, setCompany] = React.useState(`${dropOptions[0]}`);
  const [option, setOption] = React.useState<{ [x: number]: string }>({});

  return (
    <C.Container>
      <C.ContentTitle>
          <h1>{company}</h1>
          <div className="right-side">
          <select
            value={company}
            onChange={e => setCompany(e.target.value)}
          >
            {dropOptions.map((adf, index) => (
              <option value={adf} key={index}>{adf}</option>            
            ))}
                  
          </select>
          <Button id="light" variant="contained" color="info">Enviar Selecionados</Button>
          </div>
      </C.ContentTitle>
      <C.TableContainer>
      <table>
        <thead>
          <tr>
            <th>Empresa</th>
            <th>Natureza</th>
            <th>Valor</th>
            <th>Parcela</th>
            <th>Fornecedor</th>
            <th colSpan={3}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((title, index) => {

            if (title.ADFIWKF === company)
            return (
              <tr key={index}>
                <td>{title.ADFIWKF}</td>
                <td>{title.ANATWKF}</td>
                <td>R$ {title.AVALWKF}</td>
                <td>{title.APARWKF}</td>
                <td><Link to={`/${title.ANTIWKF}`}>{title.AFORWKF}</Link></td>

                <td>
                <FormControlLabel
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  margin: '0 0 0 0'
                }}
                          control={
                            <Radio
                              className="time"
                              name={`radio-${title.AFILWKF}`}
                              color="primary"
                              checkedIcon={<CheckBoxIcon sx={{color: '#38E54D'}}/>}
                              icon={<CheckBoxOutlineBlankIcon />}
                              checked={option[index] === "Aprovado"}
                              onChange={(e) => {
                                setOption((prevOptions) => {
                                  return {
                                    ...prevOptions,
                                    [index]: e.target.checked ? "Aprovado" : "",
                                  };
                                });
                              }}
                            />
                          }
                          label=""
                        />
                </td>
                <td>
                <FormControlLabel
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  margin: '0 0 0 0'
                }}
                          control={
                            <Radio
                              className="time"
                              name={`radio-${title.AFILWKF}`}
                              checkedIcon={<CancelIcon  sx={{color: '#FF6464'}}/>}
                              icon={<CheckBoxOutlineBlankIcon />}
                              checked={option[index] === "Reprovado"}
                              onChange={(e) => {
                                setOption((prevOptions) => {
                                  return {
                                    ...prevOptions,
                                    [index]: e.target.checked
                                      ? "Reprovado"
                                      : "",
                                  };
                                });
                              }}
                            />
                          }
                          label=""
                        />
                </td>
                <td>
                <FormControlLabel
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  margin: '0 0 0 0'
                }}
                          control={
                            <Radio
                              className="time"
                              name={`radio-${title.AFILWKF}`}
                              color="default"
                              checkedIcon={<AccessTimeFilledIcon  sx={{color: '#2192FF'}}/>}
                              icon={
                                <CheckBoxOutlineBlankIcon className="border" />
                              }
                              checked={option[index] === "Espera"}
                              onChange={(e) => {
                                setOption((prevOptions) => {
                                  return {
                                    ...prevOptions,
                                    [index]: e.target.checked ? "Espera" : "",
                                  };
                                });
                              }}
                            />
                          }
                          label=""
                        />
                </td>
              </tr>
            );

            return null
          })}
        </tbody>
      </table>
      </C.TableContainer>
    </C.Container>
  );
};

export default React.memo(ApprovedExpense);
