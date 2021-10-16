export default class View {
  constructor(data, parentElement){
    this.data = data;
    this.parentElement = parentElement;
  }
  render(data) {
    this.data = data;
    const markup = this.generateMarkUp();
    this.clear();
    this.parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  clear() {
    this.parentElement.innerHTML = '';
  }

  renderLoader() {
    const markup = `  <div class="loader">
                        <img class="load-icon" src="" />
                    </div>`;
    this.clear();
   parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
