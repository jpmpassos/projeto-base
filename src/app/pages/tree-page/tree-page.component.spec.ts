import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatIconModule, MatTreeModule } from '@angular/material';

import { TreePageComponent } from './tree-page.component';

describe('TreePageComponent', () => {
  let component: TreePageComponent;
  let fixture: ComponentFixture<TreePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreePageComponent ],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatTreeModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
