describe('Teste Mal Feito', () => {
  
    it('Deve fazer login no sistema', () => {
      cy.visit('https://exemplo.com/login'); // Visita repetida em cada teste
      cy.wait(5000); // Uso excessivo de `cy.wait()` ao invés de `cy.intercept()`
      
      cy.get('input[type="text"]').type('usuarioErrado'); // Seletor genérico
      cy.get('input[type="password"]').type('senha123');
      cy.get('.btn-login').click(); // Classe pode mudar no futuro
      
      cy.wait(3000); // Espera arbitrária ao invés de esperar resposta
      
      cy.get('.mensagem-erro').should('exist'); // Validação superficial
    });
  
    it('Deve acessar a página de dashboard', () => {
      cy.visit('https://exemplo.com/dashboard');
      cy.wait(4000); // Espera sem necessidade
      
      cy.get('button[aria-label="menu"]').click(); // Seletor instável
      cy.get('li:nth-child(3) > a').click(); // XPath frágil (quebra fácil)
      
      cy.wait(2000);
      cy.get('.titulo-pagina').should('contain', 'Bem-vindo'); // Validação genérica
    });
  
    it('Deve fazer logout', () => {
      cy.visit('https://exemplo.com/dashboard');
      cy.wait(3000);
      
      cy.get('.menu').click(); 
      cy.get('button.logout').click();
      
      cy.wait(5000); 
      cy.url().should('eq', 'https://exemplo.com/login'); // Validação fraca
    });
  });
  