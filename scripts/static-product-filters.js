(function () {
  const filters = document.querySelector("[data-product-category-filters]");
  const grid = document.querySelector("[data-product-grid]");
  const count = document.querySelector("[data-product-filter-count]");

  if (!filters || !grid || !count) return;

  const cards = Array.from(grid.querySelectorAll("[data-product-category]"));
  const validCategories = new Set(["all", ...cards.map((card) => card.dataset.productCategory)]);
  const requestedCategory = new URLSearchParams(window.location.search).get("category");
  let activeCategory = validCategories.has(requestedCategory) ? requestedCategory : "all";

  function updateUrl() {
    const url = new URL(window.location.href);
    if (activeCategory === "all") {
      url.searchParams.delete("category");
    } else {
      url.searchParams.set("category", activeCategory);
    }
    window.history.replaceState({}, "", url);
  }

  function render() {
    let visible = 0;
    cards.forEach((card) => {
      const matches = activeCategory === "all" || card.dataset.productCategory === activeCategory;
      card.hidden = !matches;
      if (matches) visible += 1;
    });

    filters.querySelectorAll("[data-product-category-filter]").forEach((button) => {
      const active = button.dataset.productCategoryFilter === activeCategory;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    const suffix = count.dataset.productCountSuffix || count.textContent.replace(/^\d+\s*/, "");
    count.dataset.productCountSuffix = suffix;
    count.textContent = `${visible} ${suffix}`.trim();

    let empty = grid.querySelector("[data-product-filter-empty]");
    if (!visible) {
      if (!empty) {
        empty = document.createElement("p");
        empty.className = "empty-state";
        empty.dataset.productFilterEmpty = "";
        empty.textContent = grid.dataset.emptyMessage || "No matching products.";
        grid.append(empty);
      }
    } else if (empty) {
      empty.remove();
    }
  }

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-product-category-filter]");
    if (!button) return;
    activeCategory = button.dataset.productCategoryFilter;
    updateUrl();
    render();
  });

  render();
}());
