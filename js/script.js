// Initialize EmailJS with your User ID and Service ID
emailjs.init("2excpr0wKxqbw6OHl");

// Function to send the email
function sendEmail(event) {
  event.preventDefault();

  const form = document.getElementById("myForm");
  const formData = new FormData(form);

  const emailData = {
    from_name: "Petesauto",
    to_name: "Recipient Name",
    message: formData.get("message"),
    to_email: formData.get("email"),
  };

  // Send the email using the EmailJS API
  emailjs
    .send("service_1nugp28", "template_co49z7p", emailData)
    .then((response) => {
      console.log("Email sent successfully!", response);
      alert("sent successfully");
      // Reset the form after a successful email submission
      form.reset();
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
    });
}

// Attach the sendEmail function to the form submission
document.getElementById("myForm").addEventListener("submit", sendEmail);
