import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntomologistPhotoPage } from './entomologist-photo.page';

describe('EntomologistPhotoPage', () => {
  let component: EntomologistPhotoPage;
  let fixture: ComponentFixture<EntomologistPhotoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EntomologistPhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
