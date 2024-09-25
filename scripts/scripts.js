let totalAmount = 5500;
const totalAmountElement = document.getElementById("total-money");
totalAmountElement.textContent = `${totalAmount} BDT`;

// Function to show the confirmation modal
function showConfirmationModal() {
  const modal = document.getElementById("my_modal_1");
  modal.showModal();
}

// Function to handle donations
function handleDonation(donateInputId, amountDisplayId, title) {
  const donateAmount = document.getElementById(donateInputId).value;
  const amountDisplay = document.getElementById(amountDisplayId);

  if (donateAmount && !isNaN(donateAmount) && donateAmount > 0) {
    const amount = parseInt(donateAmount);

    if (amount <= totalAmount) {
      totalAmount -= amount;
      totalAmountElement.textContent = `${totalAmount} BDT`;

      const currentDonationAmount = parseInt(amountDisplay.textContent);
      amountDisplay.textContent = `${currentDonationAmount + amount} BDT`;

      showConfirmationModal();
      addHistoryEntry(title, amount);
    } else {
      alert("Not enough funds available for this donation.");
    }
  } else {
    alert("Please enter a valid donation amount.");
  }
}

// Add entry to donation history
function addHistoryEntry(title, amount) {
  const historyContainer = document.getElementById("history-items");
  const newHistoryEntry = document.createElement("div");
  const currentTime = new Date().toString();

  newHistoryEntry.classList.add("border", "p-3", "rounded-lg", "my-2");
  newHistoryEntry.innerHTML = `<p>${amount} Taka is donated for ${title}, Bangladesh</p>
                                 <p>Date: ${currentTime}</p>`;
  historyContainer.appendChild(newHistoryEntry);
}

// Event listeners for the donation buttons
document
  .getElementById("button-donate-1")
  .addEventListener("click", function () {
    handleDonation("donate-1", "amount-display-1", "Flood at Noakhali");
  });

document
  .getElementById("button-donate-2")
  .addEventListener("click", function () {
    handleDonation("donate-2", "amount-display-2", "Flood at Feni");
  });

document
  .getElementById("button-donate-3")
  .addEventListener("click", function () {
    handleDonation("donate-3", "amount-display-3", "Quota Movement Aid");
  });

// Toggle between donation and history views
document
  .getElementById("donation-button")
  .addEventListener("click", function () {
    document.getElementById("donation-items").classList.remove("hidden");
    document.getElementById("history-section").classList.add("hidden");
    this.classList.add("bg-[#B4F461]");
    document.getElementById("history-button").classList.remove("bg-[#B4F461]");
  });

document
  .getElementById("history-button")
  .addEventListener("click", function () {
    document.getElementById("donation-items").classList.add("hidden");
    document.getElementById("history-section").classList.remove("hidden");
    this.classList.add("bg-[#B4F461]");
    document.getElementById("donation-button").classList.remove("bg-[#B4F461]");
  });

// Function to toggle between FAQ and donation sections
function toggleFAQ() {
  const faqSection = document.getElementById("faq-section");
  const donationItems = document.getElementById("donation-items");
  const blogButtonText = document.getElementById("blog-button-text");

  // Toggle visibility of the donation items and FAQ section
  if (faqSection.classList.contains("hidden")) {
    donationItems.classList.add("hidden");
    faqSection.classList.remove("hidden");
    blogButtonText.textContent = "Home"; // Change button text to Home
  } else {
    donationItems.classList.remove("hidden");
    faqSection.classList.add("hidden");
    blogButtonText.textContent = "Blog"; // Change button text back to Blog
  }
}

// Event listener for the blog button
document.getElementById("blog").addEventListener("click", toggleFAQ);
