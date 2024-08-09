import { LogInElements } from "./log-in.elements";

export class LogInHelper { // Metodos

  static insertUsername(username) {
    LogInElements.elements.username.type(username)
  }
  static insertPassword(password) {
    LogInElements.elements.password.click()
    LogInElements.elements.password.type(password)
  }
  static clickOnLoginButton() {
    LogInElements.elements.loginUpButton.click()
  }

}