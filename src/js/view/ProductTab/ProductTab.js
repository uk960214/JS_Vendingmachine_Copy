import { CONFIRM_DELETE_MESSAGE } from '../../constants';
import { createMainElement, selectDom } from '../../utils/dom';
import {
  productTabTemplate,
  productUpdateTableRowTemplate,
  productTableRowTemplate,
} from './ProductTabTemplate';

export default class ProductTab {
  #vendingMachine;
  #productContainer;
  #addProductForm;
  #addProductNameInput;
  #addProductPriceInput;
  #addProductStockInput;
  #productStatusTable;

  constructor(machine, snackbar) {
    this.#vendingMachine = machine;
    this.snackbar = snackbar;

    this.#productContainer = createMainElement(productTabTemplate);
    this.#addProductForm = selectDom('#add-product-form', this.#productContainer);
    this.#addProductNameInput = selectDom(
      '#add-product-name-input',
      this.#productContainer
    );
    this.#addProductPriceInput = selectDom(
      '#add-product-price-input',
      this.#productContainer
    );
    this.#addProductStockInput = selectDom(
      '#add-product-stock-input',
      this.#productContainer
    );
    this.#productStatusTable = selectDom('.product-status-table', this.#productContainer);

    this.#addProductForm.addEventListener('submit', this.#handleAddProductForm);
    this.#productStatusTable.addEventListener('click', this.#handleProductStatus);
  }

  get tabElements() {
    this.#renderInitialProducts();
    return this.#productContainer;
  }

  #renderInitialProducts() {
    const { productList } = this.#vendingMachine;
    const productTableRows = [...Object.entries(productList)].reduce(
      (htmlString, [id, { name, price, stock }]) =>
        `${htmlString}${productTableRowTemplate({ name, price, stock, id })}`,
      ''
    );
    this.#productContainer
      .querySelectorAll('.product-table-row')
      .forEach((element) => element.remove());

    this.#productStatusTable.insertAdjacentHTML('beforeend', productTableRows);
  }

  #handleAddProductForm = (e) => {
    e.preventDefault();
    const name = this.#addProductNameInput.value;
    const price = this.#addProductPriceInput.valueAsNumber;
    const stock = this.#addProductStockInput.valueAsNumber;

    try {
      const id = this.#vendingMachine.addProduct({ name, price, stock });

      this.#productStatusTable.insertAdjacentHTML(
        'beforeend',
        productTableRowTemplate({ name, price, stock, id })
      );
      this.#resetInput();
    } catch ({ message }) {
      this.snackbar.addToMessageList(message);
    }
  };

  #resetInput() {
    this.#addProductNameInput.value = '';
    this.#addProductPriceInput.value = '';
    this.#addProductStockInput.value = '';
    this.#addProductNameInput.focus();
  }

  #handleProductStatus = ({ target }) => {
    const { classList } = target;

    if (classList.contains('update-product-button')) {
      this.#handleProductUpdate(target);
    }

    if (classList.contains('remove-product-button')) {
      this.#handleProductRemove(target);
    }

    if (classList.contains('confirm-update-button')) {
      this.#handleProductUpdateConfirm(target);
    }

    if (classList.contains('cancel-update-button')) {
      this.#handleProductUpdateCancel(target);
    }
  };

  #handleProductUpdate = (target) => {
    const targetTableRow = target.closest('tr');
    const name = selectDom('.product-name', targetTableRow).textContent;
    const price = selectDom('.product-price', targetTableRow).textContent;
    const stock = selectDom('.product-stock', targetTableRow).textContent;
    const { productId: id } = target.dataset;

    targetTableRow.insertAdjacentHTML(
      'afterend',
      productUpdateTableRowTemplate({ name, price, stock, id })
    );
    targetTableRow.remove();
  };

  #handleProductUpdateConfirm = (target) => {
    const targetTableRow = target.closest('tr');
    const name = selectDom('.update-product-name-input', targetTableRow).value;
    const price = selectDom('.update-product-price-input', targetTableRow).valueAsNumber;
    const stock = selectDom('.update-product-stock-input', targetTableRow).valueAsNumber;
    const { productId: id } = target.dataset;

    try {
      this.#vendingMachine.updateProduct(id, { name, price, stock });
      targetTableRow.insertAdjacentHTML(
        'afterend',
        productTableRowTemplate({ name, price, stock, id })
      );
      targetTableRow.remove();
    } catch ({ message }) {
      this.snackbar.addToMessageList(message);
    }
  };

  #handleProductUpdateCancel = (target) => {
    const targetTableRow = target.closest('tr');
    const { productId: id } = target.dataset;

    try {
      const { name, price, stock } = this.#vendingMachine.productList[id];
      targetTableRow.insertAdjacentHTML(
        'afterend',
        productTableRowTemplate({ name, price, stock, id })
      );
      targetTableRow.remove();
    } catch ({ message }) {
      this.snackbar.addToMessageList(message);
    }
  };

  #handleProductRemove = (target) => {
    const productRow = target.closest('tr');
    const productName = selectDom('.product-name', productRow).textContent;
    const confirmProductDeleteMessage = `${productName}: ${CONFIRM_DELETE_MESSAGE}`;

    if (window.confirm(confirmProductDeleteMessage)) {
      const { productId: id } = target.dataset;
      try {
        this.#vendingMachine.removeProduct(id);
        productRow.remove();
      } catch ({ message }) {
        this.snackbar.addToMessageList(message);
      }
    }
  };
}
