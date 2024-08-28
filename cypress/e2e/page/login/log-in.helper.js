import { CommonPageHelper } from "../common-page/common-page.helper";
import { LogInElements } from "./log-in.elements";

export class LogInHelper { // Metodos, accion y validaciones

  static insertUsername(username) {
    //LogInElements.elements.username.type(username)
    LogInElements.elements.username.invoke("val", username) // Aqui utilizamos invoke ya esto nos permite que cypress escriba el username completo. ( ya que cypress tipeaba solo una parte del nombre y fallaba)
  }
  static insertPassword(password) {
    LogInElements.elements.password.click()
    LogInElements.elements.password.invoke("val", password)
    //LogInElements.elements.password.type(password)
  }
  static clickOnLoginButton() {
    LogInElements.elements.loginUpButton.click()
  }

  static login(username, password) {
    CommonPageHelper.clickOnloginOption();
    this.insertUsername(username); // Pasamos el valor de la constante username-random
    this.insertPassword(password);
    this.clickOnLoginButton();
    CommonPageHelper.verifySignedUser(username); // Pasamos el valor de username para validar el nombre del usuario logeado en la pagina
  }
}

//Login ( se ha refactorizado, esto estaba en el test place order, y se ha pasado a este file)
//CommonPageHelper.clickOnloginOption();
//LogInHelper.insertUsername(username); // Pasamos el valor de la constante username-random
//LogInHelper.insertPassword(password);
//LogInHelper.clickOnLoginButton();
//CommonPageHelper.verifySignedUser(username); // Pasamos el valor de username para validar el nombre del usuario logeado en la pagina