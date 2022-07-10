// owl carousel start
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    margin: 15,
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 500,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      600: {
        items: 2,
        dots: false,
      },
      1000: {
        items: 3,
        dots: false,
      },
    },
  });
});
// owl carousel end

// copy start
const rek1 = document.getElementById("rek1");
const salin1 = document.getElementById("salin1");

salin1.onclick = () => {
  rek1.select(); // Selects the text inside the input
  document.execCommand("copy"); // Simply copies the selected text to clipboard
  Swal.fire({
    //displays a pop up with sweetalert
    icon: "success",
    title: "No. Rekening Berhasil di Salin",
    showConfirmButton: false,
    timer: 1000,
  });
};

const rek2 = document.getElementById("rek2");
const salin2 = document.getElementById("salin2");

salin2.onclick = () => {
  rek2.select(); // Selects the text inside the input
  document.execCommand("copy"); // Simply copies the selected text to clipboard
  Swal.fire({
    //displays a pop up with sweetalert
    icon: "success",
    title: "No. Rekening Berhasil di Salin",
    showConfirmButton: false,
    timer: 1000,
  });
};
// copy end
