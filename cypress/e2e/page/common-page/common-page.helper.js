import { CommonPageConstants } from "./common-page-constants";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageHelper {  // Metodos comunes y ACCIONES 

  static navigatedToTheApplication() { // Metodo para navegar a la URL de la app. ( La URL esta guardada en constants)
    cy.visit(CommonPageConstants.applicationUrl)

  }

  static clickOnSignUpOption() { // Llamamos al metodo de comonpageElements
    CommonPageElements.topMenu.signUp.click();
  }
}