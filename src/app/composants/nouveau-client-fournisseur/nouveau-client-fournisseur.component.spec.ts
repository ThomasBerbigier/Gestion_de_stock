import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauClientFournisseurComponent } from './nouveau-client-fournisseur.component';

describe('NouveauClientFournisseurComponent', () => {
  let component: NouveauClientFournisseurComponent;
  let fixture: ComponentFixture<NouveauClientFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouveauClientFournisseurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouveauClientFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
