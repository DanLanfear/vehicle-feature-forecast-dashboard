import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { ForecastRecord } from '../../models/forecast-record.model';
import { ForecastRecordService } from '../../services/forecast-record.service';
import { CreateRecordDialogComponent } from '../create-record-dialog.component/create-record-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { ForecastSummary } from '../../models/forecast-summary.model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [AgGridAngular, MatButton, MatCard, DecimalPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  private forecastRecordService = inject(ForecastRecordService);
  private dialog = inject(MatDialog);

  gridApi: GridApi | null = null;

  recordData: ForecastRecord[] = [];
  summaryData: ForecastSummary | null = null;
  colDefs: ColDef[] = [
    { field: 'id', sortable: true, filter: true },
    { field: 'vehicleModel', sortable: true, filter: true },
    { field: 'modelYear', sortable: true, filter: true },
    { field: 'region', sortable: true, filter: true },
    { field: 'quarter', sortable: true, filter: true },
    { field: 'featureCode', sortable: true, filter: true },
    { field: 'featureName', sortable: true, filter: true },
    { field: 'projectedVolume', sortable: true, filter: true },
    { field: 'adoptionRate', sortable: true, filter: true },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  ngOnInit() {
    this.getTableData();
  }

  getTableData() {
    this.forecastRecordService.getForecastRecords().subscribe({
      next: (data) => {
        this.recordData = [...data];
        const ids = this.recordData.map((record) => record.id);
        this.getSummaryData(ids);
      },
      error: (err) => {
        console.error('API error', err);
      },
    });
  }

  /**
   * opens the form to create a new record
   */
  openCreateDialog() {
    const dialogRef = this.dialog.open(CreateRecordDialogComponent, {
      width: '600px',
      height: '90vh',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.forecastRecordService.createForecastRecord(result).subscribe({
          next: () => {
            console.log('Created Successfully');
          },
          error: (err) => {
            console.error('API error', err);
          },
          complete: () => {
            this.getTableData();
          },
        });
      }
    });
  }

  /**
   * when the filter value changes, gets new summary stats
   */
  onFilterChanged() {
    if (!this.gridApi) return;

    const filteredData: number[] = [];

    this.gridApi.forEachNodeAfterFilterAndSort((node) => {
      filteredData.push(node.data.id);
    });
    this.getSummaryData(filteredData);
  }

  /**
   * gets the summary data
   * @param ids the list of ids to get the summary for
   */
  getSummaryData(ids: number[]) {
    this.forecastRecordService.getForecastSummary(ids).subscribe({
      next: (data) => {
        this.summaryData = data;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('API error', err);
      },
    });
  }
}
