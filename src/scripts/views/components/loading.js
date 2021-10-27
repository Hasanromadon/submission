class Loading extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="spinner">
                        <img src="images/icons/icon-spinner.svg"/>
                      </div>`;
  }
}

customElements.define('loading-comp', Loading);
