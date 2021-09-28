import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechblogsComponent } from './techblogs.component';

describe('TechblogsComponent', () => {
  let component: TechblogsComponent;
  let fixture: ComponentFixture<TechblogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechblogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
