import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMouvementStockComponent } from './detail-mouvement-stock.component';

describe('DetailMouvementStockComponent', () => {
  let component: DetailMouvementStockComponent;
  let fixture: ComponentFixture<DetailMouvementStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailMouvementStockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailMouvementStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
