describe('Teste com más práticas', () => {
    it('Faz login no sistema', () => {
        cy.visit('https://exemplo.com/login');

        // Usando IDs diretos sem criar Page Object
        cy.get('#username').type('usuario');
        cy.get('#password').type('senha123');
        
        // Uso excessivo de cy.wait()
        cy.wait(5000);
        
        cy.get('#login-button').click();

        // Espera fixa em vez de verificar se a página realmente carregou
        cy.wait(3000);

        // Verifica se o botão de logout existe, mas sem assertion adequada
        cy.get('#logout').should('be.visible');

        // Clica no logout e espera sem motivo
        cy.get('#logout').click();
        cy.wait(2000);
    });

    it('Adiciona um item ao carrinho', () => {
        cy.visit('https://exemplo.com/produtos');

        // Seletores frágeis, baseados em texto
        cy.contains('Adicionar ao carrinho').click();
        
        // Espera fixa sem necessidade
        cy.wait(4000);

        // Tenta validar o carrinho sem assertion correta
        cy.get('.cart-items').click();
        cy.wait(2000);
        cy.get('.cart-count').then((el) => {
            if (el.text() !== '1') {
                console.log('Erro: O item não foi adicionado corretamente');
            }
        });

        // Clica no botão de checkout sem verificar a URL
        cy.get('#checkout-button').click();
        cy.wait(5000);
    });
});
