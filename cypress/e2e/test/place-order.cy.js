import { CommonPageHelper } from "../page/common-page/common-page.helper";
import { LogInHelper } from "../page/login/log-in.helper";
import { SignUpConstant } from "../page/sign-up/sign-up.constant";
import { SignUpHelper } from "../page/sign-up/sign-up.helper";


// Creamos los TEST y llamamos a los metodos creados de commonpagehelper.
describe('Place order', () => {
  it('Place order with newly created user account', () => {
    //Guardamos en constantes el usuario random y psw
    const username = SignUpHelper.generatedRandonUsername();
    const password = SignUpConstant.testData.password;

    //Sign up
    CommonPageHelper.navigatedToTheApplication();//navegamos
    CommonPageHelper.clickOnSignUpOption();//click signup
    SignUpHelper.insertUsername(username); //Insertamos el valor de const username
    SignUpHelper.insertPassword(password);
    SignUpHelper.clickonSignUpbutton();

    //Login
    CommonPageHelper.clickOnloginOption();
    LogInHelper.insertUsername(username); // Pasamos el valor dela constante username-random
    LogInHelper.insertPassword(password);
    LogInHelper.clickOnLoginButton();




    cy.wait(5000);

  })
})