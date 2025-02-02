import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoComponent } from './segundo.component';

describe('SegundoComponent', () => {
  let component: SegundoComponent;
  let fixture: ComponentFixture<SegundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SegundoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
