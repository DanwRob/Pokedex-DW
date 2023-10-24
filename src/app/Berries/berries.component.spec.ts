import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerriesComponent } from './berries.component';

describe('BerriesComponent', () => {
  let component: BerriesComponent;
  let fixture: ComponentFixture<BerriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BerriesComponent]
    });
    fixture = TestBed.createComponent(BerriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
