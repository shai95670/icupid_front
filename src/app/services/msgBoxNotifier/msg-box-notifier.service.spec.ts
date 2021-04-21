import { TestBed } from '@angular/core/testing';

import { MsgBoxNotifierService } from './msg-box-notifier.service';

describe('MsgBoxNotifierService', () => {
  let service: MsgBoxNotifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsgBoxNotifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
