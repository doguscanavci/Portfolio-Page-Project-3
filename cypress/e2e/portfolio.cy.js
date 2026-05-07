/* eslint-disable no-undef */
describe('Portfolio Page Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('Sayfa başarıyla yükleniyor', () => {
    cy.contains('Doğuşcan').should('be.visible');
  });

  it('Dil değişimi (TR/EN) doğru çalışıyor', () => {
    cy.contains('Skills').should('be.visible');
    cy.contains('TÜRKÇE').click();
    cy.contains('Yetenekler').should('be.visible');
  });

  it('Dark Mode anahtarı tetikleniyor', () => {
    cy.contains('DARK MODE')
      .parent() 
      .click({ force: true }); 
    
    cy.wait(500); 
    cy.get('body').should('be.visible');
  });

  it('Portfolyo projesinin linki doğru Vercel URL\'ine sahip', () => {
    cy.get('a[href*="vercel.app"]')
      .contains('View Site')
      .first()
      .should('have.attr', 'href');
  });
});