export class CommonPageElements {

  static get topMenu() {//Web elements:Lo organizaremos por el tipo Top Menu: que tendra metodos para acceder a las diferentes pestañas de barra de navegacion.
    return {
      get signUp() { // Creamos metodo signup                                                                         
        return cy.get('a[data-target="#logInModal"]')
      }
    }

  }




}