const dropMenu = {
  wrap: ".krds-drop-wrap",
  btn: ".drop-btn",
  menu: ".drop-menu",
  init: () => {
    const $wrap = document.querySelectorAll(dropMenu.wrap);
    // const $btn = $wrap.querySelectorAll(dropMenu.btn);
    $wrap.forEach((item) => {
      const el = document.createElement("span");
      el.classList.add("sr-only");
      el.innerHTML = "열기";
      item.querySelector(dropMenu.btn).appendChild(el);
      item.querySelector(dropMenu.btn).addEventListener("click", (e) => {
        const $target = e.target;
        const $dropMenu = $target.closest(dropMenu.wrap);
        // .querySelector(dropMenu.menu)

        if (!$dropMenu.classList.contains("active")) {
          $dropMenu.classList.add("active");
          $target.querySelector("span").innerHTML = "닫기";
        } else {
          $dropMenu.classList.remove("active");
          $target.querySelector("span").innerHTML = "열기";
        }
      });
    });
    console.log($wrap);
    // console.log($btn);
  },
};

window.addEventListener("DOMContentLoaded", () => {
  dropMenu.init();
});
