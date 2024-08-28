import { CartHelper } from "../page/cart/cart.helper";
import { CommonPageHelper } from "../page/common-page/common-page.helper";
import { HomeConstants } from "../page/home/home.constants";
import { HomeHelper } from "../page/home/home.helper";
import { LogInHelper } from "../page/login/log-in.helper";
import { PlaceOrderConstants } from "../page/place-order/place-order.constants";
import { PlaceOrderHelper } from "../page/place-order/place-order.helper";
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
    const orderTestData = PlaceOrderConstants.testData;

    CommonPageHelper.navigatedToTheApplication();//navegamos
    SignUpHelper.createUserAccount(username, password)  //sign up
    LogInHelper.login(username, password)  // login

    //Homepage
    CommonPageHelper.clickOnHomePage();
    HomeHelper.clickOnProductName(productName); // Pasamos el valor del ProductName

    //Products: añadir un producto
    ProductHelper.clickOnAddToProductButton();
    //Cart: click en carro de compras 
    CommonPageHelper.clickOnCartOption();
    CartHelper.clickOnPlaceOrderButton();

    // Place order
    PlaceOrderHelper.insertName(orderTestData.name),
      PlaceOrderHelper.insertCountry(orderTestData.country),
      PlaceOrderHelper.insertCity(orderTestData.city),
      PlaceOrderHelper.insertCreditCard(orderTestData.creditCard),
      PlaceOrderHelper.insertMonth(orderTestData.month),
      PlaceOrderHelper.insertYear(orderTestData.year)
    PlaceOrderHelper.clickOnPurchaseButton(); // click en boton
    PlaceOrderHelper.verifyPurchaseSuccessful();

    //cy.wait(5000);// Lo eliminamos, en las buenas practicas no deberia estar, lo hemos puesto para las pruebas.





  })
})