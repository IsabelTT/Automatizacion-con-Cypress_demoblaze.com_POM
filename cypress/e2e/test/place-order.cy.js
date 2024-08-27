import { CartHelper } from "../page/cart/cart.helper";
import { CommonPageHelper } from "../page/common-page/common-page.helper";
import { HomeConstants } from "../page/home/home.constants";
import { HomeHelper } from "../page/home/home.helper";
import { LogInHelper } from "../page/login/log-in.helper";
import { ProductHelper } from "../page/product/product.helper";
import { SignUpConstant } from "../page/sign-up/sign-up.constant";
import { SignUpHelper } from "../page/sign-up/sign-up.helper";


// Creamos los TEST y llamamos a los metodos creados de commonpagehelper y otros.
describe('Place order', () => {
  it('Place order with newly created user account', () => {
    //Guardamos en constantes el usuario random y psw
    const username = SignUpHelper.generatedRandonUsername();
    const password = SignUpConstant.testData.password;
    const productName = HomeConstants.testData.productName;// guardamos el valor productName ( Samsung...)
    //Sign up
    CommonPageHelper.navigatedToTheApplication();//navegamos
    CommonPageHelper.clickOnSignUpOption();//click signup
    SignUpHelper.insertUsername(username); //Insertamos el valor de const username
    SignUpHelper.insertPassword(password);
    SignUpHelper.clickonSignUpbutton();

    //Login
    CommonPageHelper.clickOnloginOption();
    LogInHelper.insertUsername(username); // Pasamos el valor de la constante username-random
    LogInHelper.insertPassword(password);
    LogInHelper.clickOnLoginButton();
    CommonPageHelper.verifySignedUser(username); // Pasamos el valor de username para validar el nombre del usuario logeado en la pagina

    //Homepage
    CommonPageHelper.clickOnHomePage();
    HomeHelper.clickOnProductName(productName); // Pasamos el valor del ProductName

    //Products:
    ProductHelper.clickOnAddToProductButton();
    //Cart: click en carro de compras 
    CommonPageHelper.clickOnCartOption();
    CartHelper.clickOnPlaceOrderButton();

    cy.wait(5000);

  })
})