const mediaQuery = window.matchMedia("(max-width: 1023px)");
let isChanged = false;
window.addEventListener(
  "resize",

  function () {
    if (mediaQuery.matches) {
      if (!isChanged) {
        const header = document.querySelector("header");
        header.insertAdjacentHTML(
          "beforeend",
          `    <details class="menu" >
      <summary><img class="menu_img" src="./images/menu.png" alt="img"></summary>
    </details>`
        );
        const menu = document.querySelector(".menu");
        const menuEl = document.querySelectorAll(".menu_el");
        menuEl.forEach((el) => {
          menu.insertAdjacentHTML(
            "beforeend",
            `<p>
    ${el.outerText}</p>`
          );
        });
        isChanged = true;
      }
    } else {
      item = document.querySelectorAll(".menu");
      for (let i = 0; i < item.length; i++) {
        item[i].remove();
      }
      isChanged = false;
    }
    console.log(isChanged);
  }
);
