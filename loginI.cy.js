describe("Authorization Tests", () => {
    it("Should check authorization tooltip for 'Not Authorized'", () => {
      cy.visit("/login");
      cy.get("#username").type("admin");
      cy.get("#password").type("123456");
      cy.get("button[type='submit']").click();
  
      cy.wait(5000);
  
      cy.get(".random-class-123").click(); 
      cy.get(".status:not(.active)").trigger("mouseover");
      cy.get(".tooltip").should("contain", "Para visualizar o motivo acesse os detalhes da autorização.");
    });
  });
  