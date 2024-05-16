import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesTypeComponent } from './movies-type.component';

describe('MoviesTypeComponent', () => {
  let component: MoviesTypeComponent;
  let fixture: ComponentFixture<MoviesTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesTypeComponent]
    });
    fixture = TestBed.createComponent(MoviesTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
