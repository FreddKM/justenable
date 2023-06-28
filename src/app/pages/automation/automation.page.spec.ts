import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutomationPage } from './automation.page';

describe('AutomationPage', () => {
  let component: AutomationPage;
  let fixture: ComponentFixture<AutomationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AutomationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
