'use client';
import React from 'react';
import { Column, useTable } from 'react-table';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


type Order = {
  id: number;
  customer: string;
  status: string;
};

const OrdersTable = ({ orders }: { orders: Order[] }) => {
  const data = React.useMemo(() => orders, [orders]);

  const columns = React.useMemo(
    () => [
      { Header: 'Order ID', accessor: 'id' },
      { Header: 'Customer Name', accessor: 'customer' },
      { Header: 'Status', accessor: 'status' },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns: columns as readonly Column<Order>[],
    data,
  });

  return (

    <Card>
      <CardContent>
        <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()} className="px-6 py-3 text-left">
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()} className="px-6 py-4 whitespace-nowrap">
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardContent>

    </Card>

  );
};

export default OrdersTable;
