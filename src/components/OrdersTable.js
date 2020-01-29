import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import getRandomData from '../utils/randomData';

const headCells = [
  { id: 'orderNumber', label: 'Номер' },
  { id: 'city', label: 'Филиал' },
  { id: 'date', label: 'Отгрузка' },
  { id: 'product', label: 'Название' },
  { id: 'amount', label: 'Тираж' }
];

const rows = getRandomData(150);

export default function SimpleTable() {

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {headCells.map((headCell) => (
              <TableCell align="center" key={headCell.id}>{headCell.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.orderNumber}>
              <TableCell component="th" scope="row">{row.orderNumber}</TableCell>
              <TableCell align="left">{row.city}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="left">{row.product}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}