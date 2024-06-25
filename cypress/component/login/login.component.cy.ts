import { LoginComponent } from 'src/app/login/login.component';
import { mount } from 'cypress/angular';

describe('LoginComponent', () => {
  beforeEach(() => {
    mount(LoginComponent);
  });

  it('should display the logo', () => {
    cy.get('img[src="assets/logo.svg"]').should('be.visible');
  });

  it('should display the header with the text 'Teleafya', () => {
    cy.get('.header h2').contains('Teleafya');
  });
});
