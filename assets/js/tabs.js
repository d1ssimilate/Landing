const showTab = (elTabBtn) => {
  const elTab = elTabBtn.closest(".market");
  if (elTabBtn.classList.contains("market__tabs-item--active")) {
    return;
  }
  const targetId = elTabBtn.dataset.targetId;
  const elTabPane = elTab.querySelector(
    `.market__coins[data-id="${targetId}"]`
  );
  if (elTabPane) {
    const elTabBtnActive = elTab.querySelector(".market__tabs-item--active");
    elTabBtnActive.classList.remove("market__tabs-item--active");
    const elTabPaneShow = elTab.querySelector(".market__coins-show");
    elTabPaneShow.classList.remove("market__coins-show");
    elTabBtn.classList.add("market__tabs-item--active");
    elTabPane.classList.add("market__coins-show");
  }
};

document.addEventListener("click", (e) => {
  if (e.target && !e.target.closest(".market__tabs-item")) {
    return;
  }
  const elTabBtn = e.target.closest(".market__tabs-item");
  showTab(elTabBtn);
});
