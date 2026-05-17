import { TestBed } from '@angular/core/testing';

import { ForecastRecordService } from './forecast-record.service';

describe('ForecastRecordService', () => {
  let service: ForecastRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForecastRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
