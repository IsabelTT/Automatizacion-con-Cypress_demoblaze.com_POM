export class cartElements {
  static get elements() {
    return {
      get placeOrderButton() { // boton place order
        return cy.get('.col-lg-1 > .btn')
      }

    }
  }

}