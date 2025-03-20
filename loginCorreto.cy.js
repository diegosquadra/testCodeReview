import AuthorizationPage from "../pageObjects/AuthorizationPage";

describe("Authorization Tests", () => {
  const authPage = new AuthorizationPage();

  beforeEach(() => {
    cy.visit("/login");
    cy.fixture("user").then((user) => {
      cy.login(user.username, user.password);
    });
  });

  it("Should display authorization tooltip when status is 'Not Authorized'", () => {
    authPage.navigateToLotes();
    authPage.getLoteStatus("Não autorizado").trigger("mouseover");
    authPage.getTooltip().should("contain", "Para visualizar o motivo acesse os detalhes da autorização.");
  });
});