import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ForecastRecord } from '../models/forecast-record.model';
import { ForecastSummary } from '../models/forecast-summary.model';

@Injectable({
  providedIn: 'root',
})
export class ForecastRecordService {
  private baseUrl = 'http://localhost:8080/api/forecasts';

  constructor(private http: HttpClient) {}

  /**
   * Gets all the forecast records
   */
  getForecastRecords(): Observable<ForecastRecord[]> {
    return this.http.get<ForecastRecord[]>(`${this.baseUrl}`).pipe(
      catchError((error) => {
        console.error(error);
        return throwError(() => error);
      }),
    );
  }

  /**
   * creates a forecast record in the database
   * @param record the record to create
   */
  createForecastRecord(record: ForecastRecord): Observable<ForecastRecord> {
    return this.http.post<ForecastRecord>(`${this.baseUrl}`, record).pipe(
      catchError((error) => {
        console.error(error);
        return throwError(() => error);
      }),
    );
  }

  getForecastSummary(ids: number[]): Observable<ForecastSummary> {
    return this.http.post<ForecastSummary>(`${this.baseUrl}/summary`, ids).pipe(
      catchError((error) => {
        console.error(error);
        return throwError(() => error);
      }),
    );
  }
}
