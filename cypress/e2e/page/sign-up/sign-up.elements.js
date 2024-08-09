export class SignUpElements {
  // Web elements de username  y password
  static get elements() {
    return {
      get username() {
        return cy.get('#sign-username')
      },
      get password() {
        return cy.get('#sign-password')
      },
      get signUpButton() {
        return cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
      },

    }
  }

}