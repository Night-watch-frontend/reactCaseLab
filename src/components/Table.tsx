import React from "react";
import { CurrencyLabel } from "@skbkontur/react-ui";
import { vehicleTypeTitles, Vehicle } from "../data/vehicles/contracts";

interface ITableItemProps {
  vehicle: Vehicle;
  number: number;
}

interface ITableProps {
  vehicles: Vehicle[];
}

const TableItem: React.FC<ITableItemProps> = ({ vehicle, number }) => {
  return (
    <tr>
      <td>{number}</td>
      <td>{vehicle.title}</td>
      <td>
        <CurrencyLabel value={vehicle.price} fractionDigits={2} />
      </td>
      <td>{vehicleTypeTitles[vehicle.type]}</td>
    </tr>
  );
};

export const Table: React.FC<ITableProps> = ({ vehicles }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Название</th>
          <th>Цена, ₽</th>
          <th>Тип ТС</th>
        </tr>
      </thead>
      <tbody>
        {vehicles.map((x, i) => (
          <TableItem key={x.id} number={i + 1} vehicle={x} />
        ))}
      </tbody>
    </table>
  );
};
