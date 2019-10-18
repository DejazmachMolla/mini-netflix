import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFavoriteMovieComponent } from './single-favorite-movie.component';

describe('SingleFavoriteMovieComponent', () => {
  let component: SingleFavoriteMovieComponent;
  let fixture: ComponentFixture<SingleFavoriteMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleFavoriteMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFavoriteMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
