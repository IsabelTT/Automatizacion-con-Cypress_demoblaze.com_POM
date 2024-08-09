export class LogInElements {
  static get elements() {
    return {
      get username() {
        return cy.get('#loginusername')
      },
      get password() {
        return cy.get('#loginpassword')
      },
      get loginUpButton() {
        return cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
      }
    }
  }
}