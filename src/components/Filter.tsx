import React from "react";
import { VehicleTypeSelect } from "./VehicleTypeSelect";
import { VehicleFilter, VehicleType } from "../data/vehicles/contracts";

interface IFilterState {
  selectedType: VehicleFilter;
  onChange: (value: VehicleFilter) => void;
}

export class Filter extends React.Component<IFilterState> {
  private handleTypeChange = (type: VehicleType | null): void => {
    this.props.onChange({ ...this.props.selectedType, type });
  };

  private handleTitleChange = (title: string): void => {
    this.props.onChange({ ...this.props.selectedType, title });
  };
  render(): React.ReactNode {
    return (
      <div>
        <input
          type="text"
          placeholder="Поиск по названию"
          value={this.props.selectedType.title}
          onChange={(e) => this.handleTitleChange(e.target.value)}
        />
        <VehicleTypeSelect
          value={this.props.selectedType.type}
          onChange={this.handleTypeChange}
        />
      </div>
    );
  }
}
