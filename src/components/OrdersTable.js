// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
import getRandomData from '../utils/randomData';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'

const headCells = [
  { field: 'orderNumber', title: 'Номер', type: 'numeric' },
  { field: 'city', title: 'Филиал' },
  { field: 'date', title: 'Отгрузка' },
  { field: 'product', title: 'Название' },
  { field: 'amount', title: 'Тираж', type: 'numeric' }
];

const rows = getRandomData(150);

export default function OrdersTable() {

  return (
    <MaterialTable
      columns={headCells}
      data={rows}
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
      onRowClick={(event, rowData, togglePanel) => togglePanel()}
  />
  );

  // return (
  //   <TableContainer component={Paper}>
  //     <Table stickyHeader>
  //       <TableHead>
  //         <TableRow>
  //           {headCells.map((headCell) => (
  //             <TableCell align="center" key={headCell.id}>{headCell.label}</TableCell>
  //           ))}
  //         </TableRow>
  //       </TableHead>
  //       <TableBody>
  //         {rows.map(row => (
  //           <TableRow key={row.orderNumber}>
  //             <TableCell component="th" scope="row">{row.orderNumber}</TableCell>
  //             <TableCell align="left">{row.city}</TableCell>
  //             <TableCell align="center">{row.date}</TableCell>
  //             <TableCell align="left">{row.product}</TableCell>
  //             <TableCell align="right">{row.amount}</TableCell>
  //           </TableRow>
  //         ))}
  //       </TableBody>
  //     </Table>
  //   </TableContainer>
  // );
}