(function () {
    emailjs.init('6T_JPv4IFd9gIfXRb')
})();

// home page
const btn = document.getElementById('sendButton');

document.getElementById('emailForm')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.innerHTML = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_68n6eim';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.innerHTML = 'Send Email';
                alert('Sent!');
                document.getElementById('emailForm').reset();
            }, (err) => {
                btn.innerHTML = 'Send  Email';
                alert(JSON.stringify(err));
            });
    });


document.getElementById("newsletter-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
     
        const btn = document.getElementById('scribe');
        // Send the email address to your email list using EmailJS
        emailjs.sendForm("default_service", 'template_czm9a4o', this)
           .then(function(response) {
            btn.value = 'Sending...';
              console.log("Subscription email sent successfully!", response);
              // Optionally, you can display a success message to the user
              alert("Thank you for subscribing!");
              // Clear the form
              document.getElementById("newsletter-form").reset();
           }, function(error) {
              console.log("Subscription email send failed:", error);
              // Optionally, you can display an error message to the user
              alert("Subscription failed. Please try again later.");
           });
     });
   
     
     
     
     