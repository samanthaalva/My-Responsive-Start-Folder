// Inject dynamic year in footer. 
const currentYear = new Date ();
document.querySelector('#year').textContent = currentYear.getFullYear();
//currentYear is the full date. This includes minutes, seconds, ect. getFullYear dumbs it down to the calendar year only (2025). querySelector is what pastes the date to the document, and #year is the ID that lets the computer know where to paste this information in the HTML. In this case, #year is referenced in the HTML footer using a <span> tag. 