import { Component, inject, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { ForecastRecord } from '../../models/forecast-record.model';
import { ForecastRecordService } from '../../services/forecast-record.service';

@Component({
  selector: 'app-dashboard',
  imports: [AgGridAngular],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  private forecastRecordService = inject(ForecastRecordService);

  rowData: ForecastRecord[] = [];
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

  async ngOnInit() {
    this.forecastRecordService.getForecastRecords().subscribe({
      next: (data) => {
        this.rowData = data;
      },
      error: (err) => {
        console.error('API error', err);
      },
    });
  }
}
