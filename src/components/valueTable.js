import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});



export default function ValueTable({data,sum}) {
    const classes = useStyles();


    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>n</TableCell>
                        <TableCell align="right">re</TableCell>
                        <TableCell align="right">pe</TableCell>
                        <TableCell align="right">ire</TableCell>
                        <TableCell align="right">ipe</TableCell>
                        <TableCell align="right">vre</TableCell>
                        <TableCell align="right">vpe</TableCell>
                        <TableCell align="right">diff</TableCell>
                        <TableCell align="right">r</TableCell>
                        <TableCell align="right">dop</TableCell>
                        <TableCell align="right">R sum({sum.R})</TableCell>
                        <TableCell align="right">A sum({sum.A})</TableCell>
                        <TableCell align="right">MLZO sum({sum.MLZO})</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data!==[]&&data!==undefined?
                        data.map(item=>(
                            <TableRow>
                                <TableCell>{item.n!==undefined?item.n:'loading...'}</TableCell>
                                <TableCell align="right">{item.re!==undefined?item.re:'Not enough values...'}</TableCell>
                                <TableCell align="right">{item.pe!==undefined?item.pe:'Not enough values...'}</TableCell>
                                <TableCell align="right">{item.ire!==undefined?item.ire:'Not enough values...'}</TableCell>
                                <TableCell align="right">{item.ipe!==undefined?item.ipe:'Not enough values...'}</TableCell>
                                <TableCell align="right">{item.vre!==undefined?item.vre:'Not enough values...'}</TableCell>
                                <TableCell align="right">{item.vpe!==undefined?item.vpe:'Not enough values...'}</TableCell>
                                <TableCell align="right">{item.dif!==undefined?item.dif:'Not enough values...'}</TableCell>
                                <TableCell align="right">{item.r!==undefined?item.r:'Not enough values...'}</TableCell>
                                <TableCell align="right">{item.dop!==undefined?item.dop:'Not enough values...'}</TableCell>
                                <TableCell align="right">{item.R!==undefined?item.R:'Not enough values...'}</TableCell>
                                <TableCell align="right">{item.A!==undefined?item.A:'Not enough values...'}</TableCell>
                                <TableCell align="right">{item.MLZO!==undefined?item.MLZO:'Not enough values...'}</TableCell>
                            </TableRow>
                        ))

                        :null}

                </TableBody>
            </Table>
        </TableContainer>
    );
}