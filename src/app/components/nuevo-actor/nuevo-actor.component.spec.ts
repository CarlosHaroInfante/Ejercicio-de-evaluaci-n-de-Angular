import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoActorComponent } from './nuevo-actor.component';

describe('NuevoActorComponent', () => {
  let component: NuevoActorComponent;
  let fixture: ComponentFixture<NuevoActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoActorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
