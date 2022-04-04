Cypress.Commands.add('addProduct', ({ name, price, stock }) => {
  cy.get('#manage-tab-menu').click();
  cy.get('#add-product-name-input').type(name);
  cy.get('#add-product-price-input').type(price);
  cy.get('#add-product-stock-input').type(stock);
  cy.get('.submit-button').click();
});

Cypress.Commands.add('updateProduct', (targetProperty, newData) => {
  cy.get('#manage-tab-menu').click();

  cy.get('.update-product-button').first().click();
  cy.get(`.update-product-${targetProperty}-input`).first().clear().type(newData);
  cy.get('.confirm-update-button').first().click();
});

Cypress.Commands.add('addChange', (money) => {
  cy.get('#charge-tab-menu').click();
  cy.get('#money-input').type(money);
  cy.get('.submit-button').click();
});

Cypress.Commands.add('addMoneyInsert', (moneyInsert) => {
  cy.get('#purchase-tab-menu').click();
  cy.get('#money-insert-input').type(moneyInsert);
  cy.get('.submit-button').click();
});

Cypress.Commands.add('registerNewUser', (userData) => {
  cy.intercept({
    method: 'POST',
    url: '**/users',
  }).as('registerRequest');

  const { email, name, password } = userData;

  cy.get('#login-link-button').click();
  cy.get('#register-page-link').click();

  cy.get('#email-input').type(email);
  cy.get('#name-input').type(name);
  cy.get('#password-input').type(password);
  cy.get('#password-confirm-input').type(password);

  cy.get('.submit-button').click();
  cy.wait('@registerRequest');
});

Cypress.Commands.add('validateRegister', (userData) => {
  const { email, name, password, passwordConfirm } = userData;

  cy.get('#login-link-button').click();
  cy.get('#register-page-link').click();

  if (email) cy.get('#email-input').type(email);
  if (name) cy.get('#name-input').type(name);
  if (password) cy.get('#password-input').type(password);
  if (password) cy.get('#password-confirm-input').type(passwordConfirm || password);

  cy.get('.submit-button').click();
});

Cypress.Commands.add('loginWithNewUser', (userData) => {
  cy.intercept({
    method: 'POST',
    url: '**/login',
  }).as('signInRequest');

  cy.registerNewUser(userData);

  cy.logout();

  cy.get('#login-link-button').click();

  const { email, password } = userData;
  cy.get('#email-input').type(email);
  cy.get('#password-input').type(password);
  cy.get('.submit-button').click();

  cy.wait('@signInRequest');
});

Cypress.Commands.add('logout', () => {
  cy.window()
    .then((win) => {
      win.sessionStorage.clear();
    })
    .then((win) => win.location.reload());
});

Cypress.Commands.add('updatePassword', (newPassword, newPasswordConfirm) => {
  cy.get('#password-input').clear().type(newPassword);
  cy.get('#password-confirm-input')
    .clear()
    .type(newPasswordConfirm || newPassword);

  cy.get('.submit-button').click();
});
