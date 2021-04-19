import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotspageComponent } from './slotspage.component';

describe('SlotspageComponent', () => {
  let component: SlotspageComponent;
  let fixture: ComponentFixture<SlotspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
