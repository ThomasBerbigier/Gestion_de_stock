import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailClientFournisseurComponent } from './detail-client-fournisseur.component';

describe('DetailClientFournisseurComponent', () => {
  let component: DetailClientFournisseurComponent;
  let fixture: ComponentFixture<DetailClientFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailClientFournisseurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailClientFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
