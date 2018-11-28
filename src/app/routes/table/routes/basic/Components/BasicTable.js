import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

let id = 0;

function createData(name, ammount, cost, totalco, price, currency, metric) {
    id += 1;
    return {id, name, ammount, cost, totalco, price, currency, metric};
}

const data = [
    createData('BTD', '159', 6.0, 24, 4.0, 'CHF', 't'),
    createData('GSC', '237', 9.0, 37, 4.3, 'CHF', 't'),
    createData('MGO', '262', 16.0, 24, 6.0, 'CHF', 't'),
    createData('IOTA', '305', 3.7, 67, 4.3, 'CHF', 't'),
    createData('ETH', '356', 16.0, 49, 3.9, 'CHF', 't'),
];

function BasicTable() {

    return (
        <div className="table-responsive-material">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Asset</TableCell>
                        <TableCell>Amount of tokens</TableCell>
                        <TableCell>Cost of position</TableCell>
                        <TableCell>Total CO2</TableCell>
                        <TableCell>Token Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(n => {
                        return (
                            <TableRow key={n.id}>
                                <TableCell>{n.name}</TableCell>
                                <TableCell>{n.name} {n.ammount}</TableCell>
                                <TableCell>{n.currency} {n.cost}</TableCell>
                                <TableCell>{n.totalco}{n.metric}</TableCell>
                                <TableCell>{n.currency} {n.price}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
}


export default BasicTable;