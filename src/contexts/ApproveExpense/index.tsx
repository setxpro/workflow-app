import React from 'react';
import { TableType } from '../../types/TableType';

import { useApi } from '../../hooks/useApi'
import { AuthContext } from '../auth';

export const ApproveExpense = React.createContext({});

const ApproveExpenseProvider: React.FC = () => {

    const [option, setOption] = React.useState<{ [x: number]: string }>({});
    const [titles, setTitles] = React.useState<TableType[]>([]);
    const [loading, setLoading] = React.useState(false);
    const [ordination, setOrdination] = React.useState(1);
    const [columnOrdination, setColumnOrdination] = React.useState('AVALWKF');

    const { findAllTitles } = useApi()
    const { user } = React.useContext(AuthContext)

     // find all titles by Fiscal
    const findAllTt = () => {
        const data = findAllTitles(`${user?.codAprov}`);
        console.log(data);
    }

    // remove when received one title
    const removeItem = (item: number) => {
        const newTitles = [...titles];
        newTitles.splice(item, 1);
        setTitles(newTitles);
    };

    // Ordination
    const handleOrdination = (fieldName: string) => {
        setOrdination(-ordination);
        setColumnOrdination(fieldName);
    }

    // Order Fiscal Title
    const newList = titles.sort((a:any, b:any) => {
        return a[columnOrdination] < b[columnOrdination] ? -ordination : ordination
    })

  return <div />;
}

export default ApproveExpenseProvider;