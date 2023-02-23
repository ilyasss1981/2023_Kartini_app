const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          menuItems = menu.querySelectorAll('li'),
          photos = document.querySelectorAll('.portfolio-wrapper .portfolio-block'),
          noPhotos = document.querySelector('.portfolio-no');

    menu.addEventListener('click', (e) => {
        let target = e.target;
        if (target && target.nodeName == 'LI' && !target.classList.contains('active')) {
            noPhotos.style.display = 'none';

            photos.forEach(photo => {
                photo.style.display = 'none';
                photo.classList.remove('animated', 'fadeIn');

                if (photo.classList.contains(target.className)) {
                    photo.style.display = 'block'
                    photo.classList.add('animated', 'fadeIn')
                } else {
                    noPhotos.style.display = 'block';
                }
            })

            menuItems.forEach(item => {
                item.classList.remove('active');
            })
            target.classList.add('active');
        }
    })
}

export default filter;