import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditresultComponent } from './editresult.component';

describe('EditresultComponent', () => {
  let component: EditresultComponent;
  let fixture: ComponentFixture<EditresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
