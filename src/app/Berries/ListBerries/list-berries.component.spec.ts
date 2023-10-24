import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBerriesComponent } from './list-berries.component';

describe('ListBerriesComponent', () => {
  let component: ListBerriesComponent;
  let fixture: ComponentFixture<ListBerriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListBerriesComponent]
    });
    fixture = TestBed.createComponent(ListBerriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
