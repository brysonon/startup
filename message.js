// Get the message input and messages container elements
const messageInput = document.getElementById('message-input');
const messagesContainer = document.getElementById('messages-container');

// Function to create and append a message bubble to the messages container
function appendMessageBubble(message, isUser) {
  // Create the message bubble element
  const messageBubble = document.createElement('div');
  messageBubble.classList.add('message-bubble');
  messageBubble.classList.add(isUser ? 'user-bubble' : 'bot-bubble');
  messageBubble.innerText = message;

  // Append the message bubble to the messages container
  messagesContainer.appendChild(messageBubble);

  // Scroll to the bottom of the messages container
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Function to handle sending a message
function sendMessage() {
  // Get the message text from the input
  const message = messageInput.value;

  // Clear the input
  messageInput.value = '';

  // Append the user message bubble to the messages container
  appendMessageBubble(message, true);

  // TODO: Send the message to a server for processing and get the bot response

  // Append the bot message bubble to the messages container
  //const botResponse = 'Your message above has been sent!';
  //appendMessageBubble(botResponse, false);
}

// Add a listener for the Enter key on the message input to send the message
messageInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

const caregiverName = document.querySelector('.caregiver-name');
caregiverName.textContent = this.getCaregiverName();

function getCaregiverName() {
  return localStorage.getItem('username') ?? 'Anonymous user';
}