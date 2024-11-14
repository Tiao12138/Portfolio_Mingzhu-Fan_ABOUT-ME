document.addEventListener("DOMContentLoaded", function () {
  const navContainer = document.getElementById('nav-container');
  const navItems = document.querySelectorAll(".link");

  loadContent('p1.html');  // Initial content load

  navItems.forEach(item => {
    item.addEventListener("click", function () {
      const contentNav = this.getAttribute('nav-content');

      let contentUrl = '';
      switch (contentNav) {
        case 'p1': contentUrl = 'p1.html'; break;
        default: contentUrl = 'p1.html';
      }
      loadContent(contentUrl);  // Load the selected content
    });
  });
  
  // Function to load content into navContainer
  function loadContent(contentUrl) {
    fetch(contentUrl)
      .then(response => response.text())
      .then(data => {
        navContainer.innerHTML = data;  
        applyHoverTextListeners();      
        applyP3ClickListeners();
  
        // Add scroll functionality and click listener for back-to-top button after content loads
        const backToTopButton = document.getElementById("backToTop");
        if (backToTopButton) {
          window.onscroll = function () {
            if (document.documentElement.scrollTop > 200) {
              backToTopButton.style.display = "block";
            } else {
              backToTopButton.style.display = "none";
            }
          };
  
          backToTopButton.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
          });
        }
      })
      .catch(error => console.error('Error loading content:', error));
  }   

});
