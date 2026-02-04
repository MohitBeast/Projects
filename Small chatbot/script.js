// PLEASE NOTE THAT HE BELLOW IS JUST A POTOTYPE AND DOSEN'T GIVE ANSWER TO HE COMPLEX QUEASTIONS.
// BUT BELLOW THIS IS FULL-FLEDGE CODE BUT YOU HAVE TO ADD AN PORPER api TO THE CODE.


document.addEventListener("DOMContentLoaded", () => {
    const chatbotToggler = document.querySelector(".chatbot-toggler");
    const chatbotCloseBtn = document.querySelector(".chatbot .close-btn");
    const chatbot = document.querySelector(".chatbot");
    const chatbox = document.querySelector(".chatbox");
    const sendBtn = document.getElementById("send-btn");
    const chatInput = document.querySelector(".chat-input textarea");

    const botResponses = [
        { pattern: /hi|hello|hey|hlo/i, response: "Hello! How can I help you today?" },
        { pattern: /how are you/i, response: "I'm just a bot, but I'm here to help you!" },
        { pattern: /what is your name/i, response: "I am a chatbot created by OpenAI. You can call me ChatGPT." },
        { pattern: /bye|goodbye/i, response: "Goodbye! Have a great day!" },
        { pattern: /what you do/, response: "I am a chatBot and my work is to provide information!" },
        { pattern: /.*/, response: "I'm not sure I understand you. Can you please elaborate?" }
    ];

    function toggleChatbot() {
        document.body.classList.toggle("show-chatbot");
    }

    function appendMessage(content, sender) {
        const message = document.createElement("li");
        message.classList.add("chat", sender);
        
        if (sender === "incoming") {
            const botIcon = document.createElement("span");
            botIcon.classList.add("material-symbols-outlined");
            botIcon.textContent = "smart_toy";
            message.appendChild(botIcon);
        }

        const messageText = document.createElement("p");
        messageText.innerHTML = content;
        message.appendChild(messageText);
        chatbox.appendChild(message);
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    function getBotResponse(userMessage) {
        for (const { pattern, response } of botResponses) {
            if (pattern.test(userMessage)) {
                return response;
            }
        }
    }

    function sendMessage() {
        const userMessage = chatInput.value.trim();
        if (userMessage === "") return;

        appendMessage(userMessage, "outgoing");
        const botMessage = getBotResponse(userMessage);
        setTimeout(() => {
            appendMessage(botMessage, "incoming");
        }, 500);

        chatInput.value = "";
    }

    chatbotToggler.addEventListener("click", toggleChatbot);
    chatbotCloseBtn.addEventListener("click", toggleChatbot);
    sendBtn.addEventListener("click", sendMessage);
    chatInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    });
});


// PLEASE NOTE THAT HE ABOVE IS JUST A POTOTYPE AND DOSEN'T GIVE ANSWER TO HE COMPLEX QUEASTIONS. THE BELLOW IS A PROPER CODE BUT YOU HAVE TO ADD AN PORPER api TO THE CODE.

// document.addEventListener('DOMContentLoaded', (event) => {
//     const chatbotToggler = document.querySelector('.chatbot-toggler');
//     const chatbot = document.querySelector('.chatbot');
//     const closeBtn = document.querySelector('.close-btn');
//     const chatInput = document.querySelector('.chat-input textarea');
//     const sendBtn = document.querySelector('#send-btn');
//     const chatbox = document.querySelector('.chatbox');

//     // Toggle chatbot visibility
//     chatbotToggler.addEventListener('click', () => {
//         document.body.classList.toggle('show-chatbot');
//     });

//     // Close chatbot
//     closeBtn.addEventListener('click', () => {
//         document.body.classList.remove('show-chatbot');
//     });

//     // Append message to the chatbox
//     function appendMessage(message, sender) {
//         const messageElement = document.createElement('li');
//         messageElement.classList.add('chat', sender);
//         const messageContent = document.createElement('p');
//         messageContent.textContent = message;
//         messageElement.appendChild(messageContent);
//         if (sender === 'incoming') {
//             const icon = document.createElement('span');
//             icon.classList.add('material-symbols-outlined');
//             icon.textContent = 'smart_toy';
//             messageElement.insertBefore(icon, messageContent);
//         }
//         chatbox.appendChild(messageElement);
//         chatbox.scrollTop = chatbox.scrollHeight;
//     }

//     // Send message to the API
//     function sendMessage() {
//         const message = chatInput.value.trim();
//         if (message === '') return;

//         appendMessage(message, 'outgoing');
//         chatInput.value = '';
//         sendBtn.style.visibility = 'hidden';

//         fetch('https://api.example.com/chat', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ message: message })
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data && data.reply) {
//                 appendMessage(data.reply, 'incoming');
//             } else {
//                 appendMessage('Sorry, no reply was received.', 'incoming');
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             appendMessage('Sorry, something went wrong.', 'incoming');
//         });
//     }

//     // Send message when the send button is clicked
//     sendBtn.addEventListener('click', sendMessage);

//     // Show the send button when there is input
//     chatInput.addEventListener('input', () => {
//         sendBtn.style.visibility = chatInput.value.trim() ? 'visible' : 'hidden';
//     });

//     // Send message when pressing Enter
//     chatInput.addEventListener('keypress', (event) => {
//         if (event.key === 'Enter' && !event.shiftKey) {
//             event.preventDefault();
//             sendMessage();
//         }
//     });
// });

