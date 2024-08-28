import { CommonPageHelper } from "../common-page/common-page.helper";
import { SignUpElements } from "./sign-up.elements";

export class SignUpHelper {  // METODOS  y ACCIONES

  static generatedRandonUsername = (length = 10) => {

    let result = "";
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  };
  // el username del parametro sera el que le pasamos en type.
  static insertUsername(username) {
    //SignUpElements.elements.username.type(username)
    SignUpElements.elements.username.invoke("val", username)
    // Aqui utilizamos invoke ya esto nos permite que cypress escriba el username completo.

  }
  static insertPassword(password) {
    SignUpElements.elements.password.click()
    SignUpElements.elements.password.invoke("val", password)
    // SignUpElements.elements.password.type(password)
  }
  static clickonSignUpbutton() {
    SignUpElements.elements.signUpButton.click()
  }

  static createUserAccount(username, password) { // Metodo para crear cuenta de usuario
    //Sign up
    CommonPageHelper.clickOnSignUpOption();//click signup
    this.insertUsername(username); //Insertamos username
    this.insertPassword(password);
    this.clickonSignUpbutton();
  }
}




//Sign up  ( se ha refactorizado y pasado en otro metodo: createUserAccount, en Sign-up.helper.js)
//CommonPageHelper.clickOnSignUpOption();//click signup
//SignUpHelper.insertUsername(username); //Insertamos el valor de const username
//SignUpHelper.insertPassword(password);
//SignUpHelper.clickonSignUpbutton();







