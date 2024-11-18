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
