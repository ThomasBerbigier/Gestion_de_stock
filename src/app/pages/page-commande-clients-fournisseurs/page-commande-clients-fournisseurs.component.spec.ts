import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCommandeClientsFournisseursComponent } from './page-commande-clients-fournisseurs.component';

describe('PageCommandeClientsFournisseursComponent', () => {
  let component: PageCommandeClientsFournisseursComponent;
  let fixture: ComponentFixture<PageCommandeClientsFournisseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCommandeClientsFournisseursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageCommandeClientsFournisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
