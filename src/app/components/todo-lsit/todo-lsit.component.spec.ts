import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoLsitComponent } from './todo-lsit.component';

describe('TodoLsitComponent', () => {
  let component: TodoLsitComponent;
  let fixture: ComponentFixture<TodoLsitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoLsitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoLsitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
