import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntomologistRegisterPage } from './entomologist-register.page';

describe('EntomologistRegisterPage', () => {
  let component: EntomologistRegisterPage;
  let fixture: ComponentFixture<EntomologistRegisterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EntomologistRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
