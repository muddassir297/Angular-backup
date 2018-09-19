import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateconfigComponent } from './createconfig.component';

describe('CreateconfigComponent', () => {
  let component: CreateconfigComponent;
  let fixture: ComponentFixture<CreateconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
