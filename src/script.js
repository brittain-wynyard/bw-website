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