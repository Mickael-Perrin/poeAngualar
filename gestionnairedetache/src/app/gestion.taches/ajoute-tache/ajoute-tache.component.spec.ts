import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteTacheComponent } from './ajoute-tache.component';

describe('AjouteTacheComponent', () => {
  let component: AjouteTacheComponent;
  let fixture: ComponentFixture<AjouteTacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouteTacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
