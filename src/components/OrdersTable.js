import getRandomData from '../utils/randomData';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'

const headCells = [
  { field: 'orderNumber', title: 'Номер', type: 'numeric' },
  { field: 'city', title: 'Филиал' },
  { field: 'date', title: 'Отгрузка', type: 'date' },
  { field: 'product', title: 'Название' },
  { field: 'amount', title: 'Тираж', type: 'numeric' }
];

const rows = getRandomData(150);

export default function OrdersTable() {

  return (
    <MaterialTable
      columns={headCells}
      data={rows}
      title="Demo Title"
      detailPanel={rowData => {
        return (
          <div
            style={{
              fontSize: 100,
              textAlign: 'center',
              color: 'white',
              backgroundColor: '#43A047',
            }}
          >
            {rowData.orderNumber}
          </div>
        )
      }}
      options={{
        grouping: true,
        paging: false
      }}
    />
  );
}