import { CommonPageConstants } from "./common-page-constants";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageHelper {  // Metodos comunes y ACCIONES 

  static navigatedToTheApplication() { // Metodo para navegar a la URL de la app. ( La URL esta guardada en constants)
    cy.visit(CommonPageConstants.applicationUrl)

  }

  static clickOnSignUpOption() { // Llamamos al metodo de comonpageElements
    CommonPageElements.topMenu.signUp.click();
  }

  static clickOnloginOption() {

    CommonPageElements.topMenu.login.click();
  }

  static verifySignedUser(username) { // Metodo para verficar que contenga el nombre de usuario logeado
    CommonPageElements.topMenu.nameOfUser.should('contain', `Welcome ${username}`)
  }

  static clickOnHomePage() {
    CommonPageElements.topMenu.home.click()

  }

  static clickOnCartOption() {
    CommonPageElements.topMenu.cart.click()
  }

}