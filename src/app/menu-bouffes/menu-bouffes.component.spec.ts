import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBouffesComponent } from './menu-bouffes.component';

describe('MenuBouffesComponent', () => {
  let component: MenuBouffesComponent;
  let fixture: ComponentFixture<MenuBouffesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBouffesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBouffesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
