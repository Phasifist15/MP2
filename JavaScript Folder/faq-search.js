document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const accordionItems = document.querySelectorAll('.accordion-item');
  const notFound = document.getElementById('notFound');

  searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    let found = false;

    accordionItems.forEach(item => {
      const question = item.querySelector('.accordion-button').innerText.toLowerCase();
      const answer = item.querySelector('.accordion-body').innerText.toLowerCase();
      const matchSearch = question.includes(searchTerm) || answer.includes(searchTerm);
      if (matchSearch) {
        item.style.display = 'block';
        found = true;
      } else {
        item.style.display = 'none';
      }
    });

    if (!found) {
      notFound.style.display = 'block';
    } else {
      notFound.style.display = 'none';
    }
  });

  clearBtn.addEventListener('click', function() {
    searchInput.value = '';
    accordionItems.forEach(item => {
      item.style.display = 'block';
    });
    notFound.style.display = 'none';
  });
});
