class VariantSelects extends HTMLElement {
    connectedCallback() {
      this.calculatePrice();
    }
  
    calculatePrice() {
      const price = document.getElementById("price-item-js");
      const quantityInput = document.querySelector(`[id="Quantity-${this.getAttribute("data-section-id")}"]`);
      const btnText = document.getElementById("pric-btn-js");
  
      if (!price || !quantityInput || !btnText) {
        console.error("Missing required elements");
        return;
      }
  
      let mainPriceValue, subPriceValue;
  
      const updateBtnText = () => {
        let quantityInputValue = +quantityInput.value;
        let priceValue = +price.textContent;
        let btnTextContent = quantityInputValue * priceValue;
  
        if (quantityInputValue > 0) {
          mainPriceValue = btnTextContent.toFixed(2).split('.')[0];
          subPriceValue = btnTextContent.toFixed(2).split('.')[1];
  
          btnText.innerHTML = `${shop_symbol}${mainPriceValue}<sup>${subPriceValue}</sup>`;
        } else {
          btnText.innerHTML = '';
        }
      };
  
      quantityInput.addEventListener("change", updateBtnText);
  
      document.addEventListener("DOMContentLoaded", updateBtnText);
    }
  }
  
  customElements.define('variant-selects', VariantSelects);
  
  

