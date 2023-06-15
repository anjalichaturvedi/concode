const rotatingWordsElement = document.querySelector(".rotating-words");
      const rotatingWords = ["developing", "creativity", "designing"];
      let currentIndex = 0;

      function changeWord() {
        rotatingWordsElement.innerHTML = rotatingWords[currentIndex];
        currentIndex = (currentIndex + 1) % rotatingWords.length;
      }

      setInterval(changeWord, 2000); // Change every 2 seconds
      function toggleOverlay(sectionNumber) {
        const overlay = document.querySelector(".overlay");
        const overlayTitle = document.querySelector("#overlay-title");
        const overlayDescription = document.querySelector(
          "#overlay-description"
        );

        // Update overlay content based on section number
        if (sectionNumber === 1) {
          overlayTitle.textContent = "Section 1";
          overlayDescription.textContent =
            "Information about Section 1 goes here.";
        } else if (sectionNumber === 2) {
          overlayTitle.textContent = "Section 2";
          overlayDescription.textContent =
            "Information about Section 2 goes here.";
        } else if (sectionNumber === 3) {
          overlayTitle.textContent = "Section 3";
          overlayDescription.textContent =
            "Information about Section 3 goes here.";
        }

        // Show the overlay
        overlay.classList.add("active");
      }

      function closeOverlay() {
        const overlay = document.querySelector(".overlay");

        // Hide the overlay
        overlay.classList.remove("active");
      }