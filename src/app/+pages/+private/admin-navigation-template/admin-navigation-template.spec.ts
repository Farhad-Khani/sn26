import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavigationTemplate } from './admin-navigation-template';

describe('AdminNavigationTemplate', () => {
  let component: AdminNavigationTemplate;
  let fixture: ComponentFixture<AdminNavigationTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminNavigationTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNavigationTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
