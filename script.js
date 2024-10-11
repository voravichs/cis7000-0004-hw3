// Gets the original text of the document by reading in a text document
async function getText() {
   const response = await fetch('bionicreading.txt')
   const text = await response.text()
   return text;
}

// Given a section, highlights a subsection
let previousSection = null;
function highlightSection(section) {
   // Remove previous highlights
   if (previousSection) {
      const prevSelectedSection = document.getElementById(previousSection);
      if (prevSelectedSection) {
         // Remove existing highlights by stripping the <mark> tags
         prevSelectedSection.innerHTML = prevSelectedSection.innerHTML.replace(/<\/?mark[^>]*>/gi, '');
      }
   }

   // Get current section
   const selectedSection = document.getElementById(section);
   if (!selectedSection) return; // Guard clause if the section is not found
   
   // Highlight the whole section by wrapping the entire content in a <mark> tag
   const text = selectedSection.innerHTML;
   selectedSection.innerHTML = `<mark class='highlight'>${text}</mark>`;

   // Update the previousSection variable to the current section
   previousSection = section;

   // Scroll to the section in the text
   selectedSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
