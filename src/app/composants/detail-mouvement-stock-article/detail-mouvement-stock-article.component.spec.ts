import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMouvementStockArticleComponent } from './detail-mouvement-stock-article.component';

describe('DetailMouvementStockArticleComponent', () => {
  let component: DetailMouvementStockArticleComponent;
  let fixture: ComponentFixture<DetailMouvementStockArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailMouvementStockArticleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailMouvementStockArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
