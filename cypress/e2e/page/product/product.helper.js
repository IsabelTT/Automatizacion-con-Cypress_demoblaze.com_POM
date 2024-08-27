import { ProductElements } from "./product.elements";

export class ProductHelper { //metodos y acciones

  static clickOnAddToProductButton() {
    ProductElements.elements.addToCartButton.click()
  }
}