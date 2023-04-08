const searchBox = document.getElementById('search');
const projectList = document.getElementById('project-list');

// Event listener for search box
searchBox.addEventListener('keyup', function() {
  const searchTerm = searchBox.value.toLowerCase();
  const listItems = projectList.getElementsByTagName('li');
  Array.from(listItems).forEach(function(item) {
    const project = item.textContent;
    if (project.toLowerCase().indexOf(searchTerm) !== -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});
