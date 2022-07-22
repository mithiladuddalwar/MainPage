import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowManageComponent } from './show-manage.component';

describe('ShowManageComponent', () => {
  let component: ShowManageComponent;
  let fixture: ComponentFixture<ShowManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowManageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
