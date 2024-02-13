let template = document.createElement("template");

class listItems extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });

    template.innerHTML = `
    <link rel="stylesheet" href="./style.css" />

    <div class="flexbox">
      <input type="checkbox" id=${this.getAttribute("id")} />
      <label for=${this.getAttribute("id")} class="customCheckboxLabel"></label>
      <slot class='check-text'></slot>
    </div>
`;

    const templateContent = template.content.cloneNode(true);
    shadowRoot.append(templateContent);
  }
}

customElements.define("list-items", listItems);
