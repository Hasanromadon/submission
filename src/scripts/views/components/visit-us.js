class VisitUs extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<section class="section section__subscribe">
                          <div class="section__subscribe__wrapper">
                              <p>Kunjungi kami untuk tetap dapat update menarik seputar restoran!</p>
                          </div>
                      </section>`;
  }
}

customElements.define('visitus-comp', VisitUs);
