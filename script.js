document.addEventListener('DOMContentLoaded', () => {
  // Show the loading screen animation for 7 seconds
  setTimeout(() => {
      // Hide the loading screen
      document.getElementById('loading-screen').style.display = 'none';
      
      // Show the main content
      document.querySelectorAll('.hidden').forEach(el => el.classList.remove('hidden'));
  }, 7000); // 7 seconds duration
});

// Constants for buttons and popups
const signInButton = document.getElementById('signInButton');
const popup = document.getElementById('popup');
const editPopup = document.getElementById('editPopup'); // Edit Details popup
const signInForm = document.getElementById('signInForm');
const editForm = document.getElementById('editForm'); // Edit Form
const navbar = document.querySelector('.navbar');
const userPopup = document.getElementById('userPopup');
const displayUsername = document.getElementById('displayUsername');
const displayEmail = document.getElementById('displayEmail');
const displayPassword = document.getElementById('displayPassword');
const displayDate = document.getElementById('displayDate');
const settings = document.getElementById('settings')

// Check if user data exists in localStorage
const storedUserData = localStorage.getItem('userData');

if (storedUserData) {
  const userData = JSON.parse(storedUserData);
  renderUserLink(userData.username);
}

// Show sign-in pop-up
signInButton.addEventListener('click', () => {
  popup.style.display = 'flex';
});

// Handle form submission
signInForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form reload

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Validate fields
  if (!username || !email || !password) {
      showAlert("All fields are required. Please fill out the form according to the rules.");
      return;
  }

  if (!validateUsername(username)) {
      showAlert("Username must be a single word.");
      return;
  }

  if (!validateEmail(email)) {
      showAlert("Email must be in a valid format (e.g., user@gmail.com).");
      return;
  }

  if (!validatePassword(password)) {
      showAlert(
          "Password must be at least 8 characters long, contain at least one uppercase letter, and one special character like @, $, or &."
      );
      return;
  }

  const signInDate = new Date().toLocaleString();

  // Save user data in localStorage
  const userData = { username, email, password, signInDate };
  localStorage.setItem('userData', JSON.stringify(userData));

  // Update Navbar with username as an anchor tag
  renderUserLink(username);

  // Close Sign-In pop-up
  popup.style.display = 'none';
  window.location.reload();
});

// Handle "Home" button click to bypass inputs and hide the popup
document.getElementById('homeButtonEnter').addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default behavior
  popup.style.display = 'none'; // Close the popup immediately
  // Ensure no rules or alerts are shown
});

// Render user name as an anchor tag
function renderUserLink(username) {
  navbar.innerHTML = `
      <button class="user-link" id="userLink"><div class="userbutton-container"><img src="usericon.png" alt="icon" class="usericon">${username}</div></button>
  `;

  document.getElementById('userLink').addEventListener('click', (event) => {
      event.preventDefault();
      openUserPopup();
  });
}

function openUserPopup() {
  const userData = JSON.parse(localStorage.getItem('userData'));
  if (userData) {
      displayUsername.textContent = userData.username;
      displayEmail.textContent = userData.email;
      displayPassword.textContent = '********';
      displayDate.textContent = userData.signInDate;

      const buttonContainer = document.querySelector('.button-container');
      buttonContainer.innerHTML = `
          <button id="button" class="home-button" onclick="goHome()">Home</button>
          <button id="button" class="edit-button" onclick="openEditPopup()">Edit Details</button>
          <button id="button" class="sign-out-button" onclick="signOut()">Sign Out</button>`;
  }
  userPopup.style.display = 'flex';
}

function openSettingsPopup() {
  settings.style.display = 'flex';
}
// Open edit pop-up
function openEditPopup() {
  editPopup.style.display = 'flex';
}

// Handle edit details form submission
editForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const newUsername = document.getElementById('newUsername').value.trim();  // Get new username value
  const newEmail = document.getElementById('newEmail').value.trim();        // Get new email value
  const previousPassword = document.getElementById('previousPassword').value.trim();  // Get previous password value
  const newPassword = document.getElementById('newPassword').value.trim();  // Get new password value
  
  let userData = JSON.parse(localStorage.getItem('userData'));  // Retrieve current user data from localStorage
  
  // Validate username
  if (!validateUsername(newUsername)) {
      showAlert("Username must be a single word.");
      return;
  }

  // Validate email
  if (!validateEmail(newEmail)) {
      showAlert("Email must be in a valid format (e.g., user@gmail.com).");
      return;
  }

  // Validate previous password
  if (previousPassword !== userData.password) {
      showAlert("Previous password is incorrect.");
      return;
  }

  // Validate new password
  if (!validatePassword(newPassword)) {
      showAlert("New password must be at least 8 characters long, contain at least one uppercase letter, and one special character like @, $, or &.");
      return;
  }

  // Update the user data with the new values
  userData.username = newUsername;
  userData.email = newEmail;
  userData.password = newPassword; // Update the password with new value

  // Save the updated user data back to localStorage
  localStorage.setItem('userData', JSON.stringify(userData));

  // Update the User Link in Navbar with the new username
  renderUserLink(userData.username);

  // Close Edit pop-up
  editPopup.style.display = 'none';

  showAlert("Details updated successfully.");
});


// Go back to home
function goHome() {
  userPopup.style.display = 'none';
}

// Sign out function
function signOut() {
  localStorage.removeItem('userData');
  window.location.reload(); // Reload to prompt for sign-in again
}

// Utility functions
function validatePassword(password) {
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@$&])[A-Za-z\d@$&]{8,}$/;
  return passwordRegex.test(password);
}

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/;
  return emailRegex.test(email);
}

function validateUsername(username) {
  return /^[A-Za-z]+$/.test(username);
}

function showAlert(message) {
  const alertPopup = document.getElementById('alertPopup');
  const alertMessage = document.getElementById('alertMessage');

  alertMessage.textContent = message;
  alertPopup.style.display = 'block';

  setTimeout(() => {
      alertPopup.style.display = 'none';
  }, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
  const settingsPopup = document.getElementById('settingsPopup');
  const closeSettingsButton = document.getElementById('closeSettingsButton');
  const saveSettingsButton = document.getElementById('saveSettingsButton');
  const soundToggle = document.getElementById('soundToggle');
  const darkModeToggle = document.getElementById('darkModeToggle');
  const notificationsToggle = document.getElementById('notificationsToggle');

  // Open Settings Pop-up
  document.getElementById('settingsIcon').addEventListener('click', () => {
    const settingsPopup = document.getElementById('settingsPopup');
    settingsPopup.style.display = 'flex';
  });
  // Close Settings Pop-up
  closeSettingsButton.addEventListener('click', () => {
      settingsPopup.style.display = 'none';
  });

  // Save Settings
  saveSettingsButton.addEventListener('click', () => {
      const settings = {
          sound: soundToggle.checked,
          darkMode: darkModeToggle.checked,
          notifications: notificationsToggle.checked,
      };

      // Save settings to localStorage
      localStorage.setItem('settings', JSON.stringify(settings));

      // Apply settings immediately (if necessary)
      applySettings();

      // Close the pop-up
      settingsPopup.style.display = 'none';
      alert('Settings saved!');
  });

  // Load and apply saved settings
  function applySettings() {
      const savedSettings = JSON.parse(localStorage.getItem('settings')) || {};

      if (savedSettings.darkMode) {
          document.body.classList.add('dark-mode');
      } else {
          document.body.classList.remove('dark-mode');
      }

      // Update toggles based on saved settings
      soundToggle.checked = savedSettings.sound ?? true;
      darkModeToggle.checked = savedSettings.darkMode ?? false;
      notificationsToggle.checked = savedSettings.notifications ?? true;
  }

  // Apply settings on page load
  applySettings();
});

const openDevAbout = document.getElementById('devAboutOpener');
const devAboutPopup = document.getElementById('about-dev');
const closeDevAbout = document.getElementById('closeBtn');

openDevAbout.addEventListener('click', () => {
  openDevAbout.classList.add('active');
  devAboutPopup.style.display = 'flex';
  document.getElementById('overlay').style.display = 'flex';
});

closeDevAbout.addEventListener('click', () => {
  openDevAbout.classList.remove('active');
  devAboutPopup.style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
});