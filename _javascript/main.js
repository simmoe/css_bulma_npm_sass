document.addEventListener('DOMContentLoaded', () => {

  document.addEventListener('click', function(event){
    console.log(event.target.matches('.navbar-item'));
    if(!event.target.matches('.navbar-item')){
      console.log('skrider');
      return;
    }

    const menuItems = document.getElementsByClassName('page');
    for (let item of menuItems) {
      item.classList.add('is-hidden');
    }
    if (event.target.matches('#nav-1')) {
      document.getElementById('dash-1').classList.remove('is-hidden');
    }
    if (event.target.matches('#nav-2')) {
      document.getElementById('dash-2').classList.remove('is-hidden');
    }
  });

  const pages = document.getElementsByClassName('page');
  for(let item of pages){
    item.classList.add('animated','slideInRight');
  }


  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});