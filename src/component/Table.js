import React from 'react';
import MaterialTable from 'material-table';

import {Information} from './Information';

// использовал пакет material-table, загрузил даннные создал блок информации
// промапил карты

const unique = (arr) => {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

export default function Table({data}) {
  const [value, setState] = React.useState({
    columns: [
      { title: 'id', field: 'id', type: 'numeric' },
      { title: 'firstName', field: 'firstName' },
      { title: 'lastName', field: 'lastName'},
      { title: 'email', field: 'email'},
      { title: 'phone', field: 'phone'}
    ],
    data: [...data]
  });

  const [list, setList] = React.useState([])

  return (
    <>
      <MaterialTable
        title="Таблица"
        columns={value.columns}
        data={value.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
        actions={[
          {
            icon: 'save',
            tooltip: 'Save List',
            onClick: (event, rowData) => {
              setList(prevList => {
                return unique([...prevList, rowData])
              })
            }
          }
        ]}
      />
      <Information list = {list}/>
    </>
  );
}