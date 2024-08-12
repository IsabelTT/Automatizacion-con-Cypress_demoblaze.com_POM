import { CommonPageHelper } from "../page/common-page/common-page.helper";
import { HomeConstants } from "../page/home/home.constants";
import { HomeHelper } from "../page/home/home.helper";
import { LogInHelper } from "../page/login/log-in.helper";
import { SignUpConstant } from "../page/sign-up/sign-up.constant";
import { SignUpHelper } from "../page/sign-up/sign-up.helper";


// Creamos los TEST y llamamos a los metodos creados de commonpagehelper.
describe('Place order', () => {
  it('Place order with newly created user account', () => {
    //Guardamos en constantes el usuario random y psw
    const username = SignUpHelper.generatedRandonUsername();
    const password = SignUpConstant.testData.password;
    const productName = HomeConstants.testData.productName;
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
    CommonPageHelper.verifySignedUser(username); // Pasamos el valor de username para validad el nombre del usuario en la pagina

    //Homepage
    CommonPageHelper.clickOnHomePage();
    HomeHelper.clickOnProductName(productName);




    cy.wait(5000);

  })
})