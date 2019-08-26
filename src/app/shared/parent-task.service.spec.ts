import { TestBed } from '@angular/core/testing';
import { ParentTaskService } from './parent-task.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

describe('ParentTaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      ToastrModule.forRoot(),
  ]
  }));

  it('should be created', () => {
    const service: ParentTaskService = TestBed.get(ParentTaskService);
    expect(service).toBeTruthy();
  });
});
