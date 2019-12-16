import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

function createData() {
  return {};
}

const rows = [
  createData(''),
  createData(''),
  createData(''),
  createData(''),
  createData(''),
  createData(''),
  createData(''),
  createData(''),
  createData(''),
  createData(''),
  createData(''),
  createData(''),
  createData(''),
  createData(''),
  createData(''),
  createData(''),
  createData(''),
  createData(''),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Complaint_id</TableCell>
            <TableCell align="right">Month</TableCell>
            <TableCell align="right">Date_customer_posted</TableCell>
            <TableCell align="right">Hours_customer_posted</TableCell>
            <TableCell align="right">First_responded_time</TableCell>
            <TableCell align="right">Department_name</TableCell>
            <TableCell align="right">Priority</TableCell>
            <TableCell align="right">Assigned_to</TableCell>
            <TableCell align="right">Current_status</TableCell>
            <TableCell align="right">Related_to</TableCell>
            <TableCell align="right">Pending_with</TableCell>
            <TableCell align="right">Sub_category</TableCell>
            <TableCell align="right">Failure_at</TableCell>
            <TableCell align="right">Date_cust_shared_details</TableCell>
            <TableCell align="right">Case_created_date</TableCell>
            <TableCell align="right">Case_number_crm</TableCell>
            <TableCell align="right">Case_source_crm</TableCell>
            <TableCell align="right">Order_number</TableCell>
            <TableCell align="right">Shipping_location</TableCell>
            <TableCell align="right">Last_connected_date</TableCell>
            <TableCell align="right">Last_connected_by</TableCell>
            <TableCell align="right">Query_handled_by</TableCell>
            <TableCell align="right">Resolution_date</TableCell>
            <TableCell align="right">Resolution_for_customer</TableCell>
            <TableCell align="right">Post_or_DM</TableCell>
            <TableCell align="right">Department_id</TableCell>
            <TableCell align="right">Medium_username</TableCell>
            <TableCell align="right">Customer_comment</TableCell>
            <TableCell align="right">Medium_name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.complaint_id}</TableCell>
              <TableCell align="right">{row.month}</TableCell>
              <TableCell align="right">{row.date_customer_posted}</TableCell>
              <TableCell align="right">{row.hours_customer_posted}</TableCell>
              <TableCell align="right">{row.first_responded_time}</TableCell>
              <TableCell align="right">{row.department_name}</TableCell>
              <TableCell align="right">{row.priority}</TableCell>
              <TableCell align="right">{row.assigned_to}</TableCell>
              <TableCell align="right">{row.current_status}</TableCell>
              <TableCell align="right">{row.related_to}</TableCell>
              <TableCell align="right">{row.pending_with}</TableCell>
              <TableCell align="right">{row.sub_category}</TableCell>
              <TableCell align="right">{row.failure_at}</TableCell>
              <TableCell align="right">{row.date_cust_shared_details}</TableCell>
              <TableCell align="right">{row.case_created_date}</TableCell>
              <TableCell align="right">{row.case_number_crm}</TableCell>
              <TableCell align="right">{row.case_source_crm}</TableCell>
              <TableCell align="right">{row.order_number}</TableCell>
              <TableCell align="right">{row.shipping_location}</TableCell>
              <TableCell align="right">{row.last_connected_date}</TableCell>
              <TableCell align="right">{row.last_connected_by}</TableCell>
              <TableCell align="right">{row.query_handled_by}</TableCell>
              <TableCell align="right">{row.resolution_date}</TableCell>
              <TableCell align="right">{row.resolution_for_customer}</TableCell>
              <TableCell align="right">{row.Post_or_DM}</TableCell>
              <TableCell align="right">{row.department_id}</TableCell>
              <TableCell align="right">{row.medium_username}</TableCell>
              <TableCell align="right">{row.customer_comment}</TableCell>
              <TableCell align="right">{row.medium_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

