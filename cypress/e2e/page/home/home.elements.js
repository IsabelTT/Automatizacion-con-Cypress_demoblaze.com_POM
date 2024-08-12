export class HomeElements {
  static get elements() {
    return {// En este caso el metodo al tener un parametro NO se le puede poner GET, ya que daria un error.
      productLink(productName) {
        return cy.contains("a", productName)

      }
    }
  }
}