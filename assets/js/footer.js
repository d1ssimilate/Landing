class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="footer__container">
            <div class="footer__logo">
                <img src="/assets/img/LogoFooter.png" />

                <div class="footer__community">
                    <span>Community-</span>

                    <img
                    src="assets/icons/socials/discord.svg"
                    class="footer__community-icon"
                    />
                    <img
                    src="assets/icons/socials/telegram.svg"
                    class="footer__community-icon"
                    />
                    <img
                    src="assets/icons/socials/instagram.svg"
                    class="footer__community-icon"
                    />
                    <img
                    src="assets/icons/socials/inlinks.svg"
                    class="footer__community-icon"
                    />
                    <img
                    src="assets/icons/socials/youtube.svg"
                    class="footer__community-icon"
                    />
                </div>
            </div>

            <hr class="footer__line" />

            <ul class="footer__links">
                <li class="footer__links-item">
                    <h2 class="footer__links-title">Crypto Brains</h2>

                    <a class="footer__links-link">About Us</a>
                    <a class="footer__links-link">Our Team</a>
                    <a class="footer__links-link">Road Map</a>
                    <a class="footer__links-link">Risk Disclosure</a>
                </li>
                <li class="footer__links-item">
                    <h2 class="footer__links-title">Knowledge</h2>

                    <a class="footer__links-link">F.A.Q.</a>
                    <a class="footer__links-link">Articals</a>
                    <a class="footer__links-link">Video Tutorial</a>
                    <a class="footer__links-link">Beginner’s Guide</a>
                </li>
                <li class="footer__links-item">
                    <h2 class="footer__links-title">Services</h2>

                    <a class="footer__links-link">API Service</a>
                    <a class="footer__links-link">Token Listing</a>
                    <a class="footer__links-link">API Document</a>
                    <a class="footer__links-link">Ticket Services</a>
                </li>
                <li class="footer__links-item">
                    <h2 class="footer__links-title">Exchange</h2>

                    <a class="footer__links-link">P2P</a>
                    <a class="footer__links-link">Referral</a>
                    <a class="footer__links-link">Markets</a>
                    <a class="footer__links-link">Affiliate Program</a>
                </li>
                <li class="footer__links-item">
                    <h2 class="footer__links-title">Support Sevice</h2>

                    <a class="footer__links-link">
                    Career <span>( We Are Hiring )</span>
                    </a>
                    <a class="footer__links-link">Comunity</a>
                    <a class="footer__links-link">Customer Chat</a>
                    <a class="footer__links-link">Technical Support</a>
                </li>
                <li class="footer__links-item">
                    <h2 class="footer__links-title">Press</h2>

                    <a class="footer__links-link">Blog</a>
                    <a class="footer__links-link">News</a>
                    <a class="footer__links-link">Events</a>
                </li>
            </ul>

            <hr class="footer__line" />

            <div class="footer__bottom">
                <div class="footer__bottom-copyright">
                    <span>©Copyright 2022 All Rights Are Reserved.</span>
                    <i></i>
                    <span>Privacy Policy</span>
                    <i></i>
                    <span>Terms of Use</span>
                </div>

                <div class="footer__bottom-langs">
                    <div class="footer__bottom-input">
                        <span>English</span>

                        <img src="assets/img/arrow.svg" />
                    </div>

                    <div class="footer__bottom-input">
                        <span>INR</span>

                        <img src="assets/img/arrow.svg" />
                    </div>
                </div>
            </div>
        </div>
      `;
  }
}

customElements.define("my-footer", Footer);
