function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);

  // Close all other accordion items
    const allContents = document.querySelectorAll('.accordion-item .max-h-0');

    allContents.forEach((item, i) => {
        if (i !== index - 1) { // Adjusted index since your index starts from 1
            item.style.maxHeight = '0';
        }
    });

    // Toggle the content's max-height for smooth opening and closing
    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
      content.style.maxHeight = '0';
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
}
  
function overflowYScrollHidden() {
  document.body.style.overflowY = 'hidden';
}

function overflowYScrollAuto() {
  document.body.style.overflowY = 'auto'; 
}


document.addEventListener('DOMContentLoaded', function() {
    var accordionItems = document.querySelectorAll('#our-expertise div .accordion-list .accordion-item');

    accordionItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            var value = this.getAttribute('data-src');
            var menuImageHolder = document.querySelector('.menu-image-holder');

            // Check if the menuImageHolder exists
            if (menuImageHolder) {
                menuImageHolder.style.backgroundImage = 'url(' + value + ')';
                menuImageHolder.style.backgroundRepeat = 'no-repeat';
                menuImageHolder.style.backgroundSize = 'cover';
            }
        });
      
    });
});

    document.addEventListener('DOMContentLoaded', function() {
        AOS.init();
    });


 // Detect the scroll position
window.addEventListener('scroll', function() {
    let button = document.querySelector('.contact-button');
    let footer = document.getElementById('bw-footer');

    // Get the position of the footer relative to the viewport
    let footerTop = footer.getBoundingClientRect().top;

    console.log('footerTop')

    // If the footer is within 50px of the bottom of the viewport, trigger the slide-out
    if (footerTop <= window.innerHeight + 50) {
        button.classList.add('slide-out');
    } else {
        button.classList.remove('slide-out');
    }
}); 


