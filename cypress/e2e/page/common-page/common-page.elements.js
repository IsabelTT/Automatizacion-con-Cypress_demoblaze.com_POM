export class CommonPageElements {
  //Web elements:Lo organizaremos por el tipo
  static get topMenu() {// Top Menu: que tendra metodos para acceder a las diferentes pestañas de barra de navegacion.
    return {
      get signUp() { // signup                                            
        return cy.get('#signin2')
      },

      get login() {  // Login
        return cy.get('#login2')
      }
    }

  }




}