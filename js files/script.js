class todoList extends HTMLElement {
  constructor() {
    super();

    let shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./style.css">
    <div class="today">
        <h3>today</h3>
        <div><img src="./imgs/plus.svg" alt="" /></div>
    </div>

    <div class="percentage">
        <div class="purple"></div>
    </div>

    <p class='progress'>33% complete</p>
    `;
  }
}

customElements.define("todo-list", todoList);
