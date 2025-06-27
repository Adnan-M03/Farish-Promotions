  const form = document.querySelector('.contact-form');
  const status = document.getElementById('status-message');



  // Farish form customization using formspree
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mjkrkpkb", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        status.textContent = "Thanks for your message!";
        form.reset();
      } else {
        status.textContent = "Oops! Something went wrong.";
      }
    } catch (error) {
      status.textContent = "Error: " + error.message;
    }
  });
