let templateCode = document.createElement("template");

templateCode.innerHTML = `
<style>
.btn {
    text-align: center;
    padding: 10px 0;
    border-radius: 20px;
    color: #8b8b8b;
    font-size: 1rem;
    cursor: pointer;
}
</style>
<div class='btn'>
    <slot></slot>
</div>
`;

class eventBoxes extends HTMLElement {
  constructor() {
    super();
    let shadowRoot = this.attachShadow({ mode: "open" });
    let templateClone = templateCode.content.cloneNode(true);
    shadowRoot.append(templateClone);

    const btns = shadowRoot.querySelector(".btn");
    btns.style.backgroundColor = this.getAttribute("color");
  }
}

customElements.define("event-boxes", eventBoxes);
