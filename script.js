// Logic for toggling the active class on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

//Docs download
function downloadPDF(buttonId, fileName) {
  const button = document.querySelector(buttonId);
  
  // Ensure the cursor is always a pointer
  button.style.cursor = "pointer";

  button.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default navigation

    const link = document.createElement("a");
    link.href = `/pdf/${fileName}`;
    // link.download = fileName;
    link.setAttribute("download", fileName);

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

// Attach event listeners for each button
downloadPDF("#overviewpdf", "MotormojoOverview.pdf");
downloadPDF("#Vehiclepdf", "VehicleGuide.pdf");
downloadPDF("#Motorpdf", "MotorGuide.pdf");
downloadPDF("#OtherFeatures", "OtherFeatures.pdf");



// document.querySelectorAll('.nav-link').forEach(link => {
//     link.addEventListener('click', () => {
//     var offcanvas = document.getElementById('offcanvasNavbar');
//     // var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
//     offcanvas.className = 'offcanvas offcanvas-end';
//     offcanvas.removeAttribute('aria-modal');
//     offcanvas.removeAttribute('role');
//     // Select the div by its id and remove it from the DOM
//     const div = document.getElementsByClassName('offcanvas-backdrop');
//     console.log(div[0]);
//     div[0].remove(); // This completely removes the div from the DOM
//     });
// });