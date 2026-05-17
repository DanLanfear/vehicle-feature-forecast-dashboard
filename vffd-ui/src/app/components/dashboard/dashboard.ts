import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { ForecastRecord } from '../../models/forecast-record.model';

@Component({
  selector: 'app-dashboard',
  imports: [AgGridAngular],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  // Row Data: The data to be displayed.
  rowData: ForecastRecord[] = [];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: 'id' },
    { field: 'vehicleModel' },
    { field: 'modelYear' },
    { field: 'region' },
    { field: 'quarter' },
    { field: 'featureCode' },
    { field: 'featureName' },
    { field: 'projectedVolume' },
    { field: 'adoptionRate' },
  ];
}
