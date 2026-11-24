 const messages = [
            "Initializing Hacking",
            "Reading your Files",
            "Password files Detected",
            "Sending all passwords and personal files to server",
            "Cleaning up"
        ];

        const logs = document.getElementById("logs");

        async function startHacking() {

            for (const message of messages) {

                const delay = Math.floor(Math.random() * 7) + 1;

                const line = document.createElement("p");
                line.innerHTML = message + '<span class="dots"></span>';

                logs.appendChild(line);

                await new Promise(resolve => {
                    setTimeout(resolve, delay * 1000);
                });

                line.querySelector(".dots").remove();
                line.innerHTML += " 🇮🇳";
            }
        }

        startHacking();