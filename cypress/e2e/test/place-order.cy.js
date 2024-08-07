import { CommonPageHelper } from "../page/common-page/common-page.helper";


// Creamos los TEST y llamamos a los metodos creados.
describe('Place order', () => {
  it('Place order with newly created user account', () => {
    // Navegamos a la aplicacion( se crea un metodo comun en ComonpageHelper y lo llamamos)
    CommonPageHelper.navigatedToTheApplication();
    CommonPageHelper.clickOnSignUpOption();
    cy.wait(2000);

  })
})