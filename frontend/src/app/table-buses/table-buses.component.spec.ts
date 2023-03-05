import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBusesComponent } from './table-buses.component';

describe('TableBusesComponent', () => {
  let component: TableBusesComponent;
  let fixture: ComponentFixture<TableBusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableBusesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableBusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
