class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="footer">
            huinya
        </div>
      `;
  }
}

customElements.define("footer-my", Footer);
