import React from 'react'
import styles from "./ORderTable.module.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const OrderTable = () => {
  return (
    <TableContainer component={Paper} sx={{boxShadow:"none !important"}}>
    <Table sx={{ minWidth: 650, }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <TableCell  sx={{padding:"5px"}} className={styles.content}>#</TableCell>
          <TableCell align="right" className={styles.content}>Sanasi</TableCell>
          <TableCell align="right" className={styles.content}>To'lov turi</TableCell>
          <TableCell align="right" className={styles.content}>Holati</TableCell>
          <TableCell align="center" className={styles.content}>Summasi</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {/* {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell>
          </TableRow>
        ))} */}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default OrderTable