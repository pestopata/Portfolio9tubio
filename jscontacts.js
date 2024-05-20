
		document.getElementById("contactForm").addEventListener("submit", function(event) {
			event.preventDefault();

			var name = document.getElementById("name").value;
			var email = document.getElementById("email").value;
			var phone = document.getElementById("phone").value;
			var message = document.getElementById("message").value;

			if (name == "" || email == "" || phone == "" || message == "") {
				alert("Please fill in all fields.");
				return;
			}

			if (!validateEmail(email)) {
				alert("Please enter a valid email address.");
				return;
			}

			if (!validatePhone(phone)) {
				alert("Please enter a valid phone number.");
				return;
			}

			alert("Form submitted successfully!");

			// Clear form fields
			document.getElementById("name").value = "";
			document.getElementById("email").value = "";
			document.getElementById("phone").value = "";
			document.getElementById("message").value = "";
		});

		function validateEmail(email) {
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(String(email).toLowerCase());
		}

		function validatePhone(phone) {
			var re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
			return re.
		}

    