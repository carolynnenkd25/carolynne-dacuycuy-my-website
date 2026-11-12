// Find every ingredient checklist on the page.
const ingredientLists = document.querySelectorAll(
  ".ingredient-checklist"
);

ingredientLists.forEach(function (list) {
  const checkboxes = list.querySelectorAll(
    'input[type="checkbox"]'
  );

  const progress = list.querySelector(
    ".ingredient-progress"
  );

  function updateProgress() {
    const checkedIngredients = list.querySelectorAll(
      'input[type="checkbox"]:checked'
    );

    progress.textContent =
      checkedIngredients.length +
      " of " +
      checkboxes.length +
      " ingredients ready";
  }

  // Update the message when a checkbox changes.
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", updateProgress);
  });

  updateProgress();
});