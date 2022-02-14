import { TestBed } from '@angular/core/testing';

import { ThyroidDiseaseRecordService } from './thyroid-disease-record.service';

describe('ThyroidDiseaseRecordService', () => {
  let service: ThyroidDiseaseRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThyroidDiseaseRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
