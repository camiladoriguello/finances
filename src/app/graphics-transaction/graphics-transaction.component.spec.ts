import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsTransactionComponent } from './graphics-transaction.component';

describe('GraphicsTransactionComponent', () => {
  let component: GraphicsTransactionComponent;
  let fixture: ComponentFixture<GraphicsTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicsTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
