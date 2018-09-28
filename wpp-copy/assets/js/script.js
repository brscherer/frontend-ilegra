let conversations = document.getElementById('conversations-list');
let search = document.getElementById('search');
let conversationBoard = document.getElementById('conversation-board');

let user = {
    name: 'Bruno',
    image: 'assets/images/user.jpeg',
    messages: []
};

let contact = {
    name: 'ilegra',
    image: 'assets/images/contact.jpeg',
    messages: [
        {
            content: "Hey!",
            time: new Date(),
        }
    ]
};

let contact2 = {
    name: 'Goku',
    image: 'assets/images/goku.jpg',
    messages: [
        {
            content: "Where are you?!",
            time: new Date(),
        },
        {
            content: "I need your help",
            time: new Date(),
        }
    ]
};

let contactList = [
    contact, contact2
];

const buildConversationsList = (contactList) => {
    conversations.innerHTML = '';

    if (contactList === undefined || contactList == 0) conversations.innerHTML += `
    <div class="conversation-empty">
        <span>No chats, contacts or messages found</span>
    </div>
    `;
    else contactList.forEach(contact => {
        conversations.innerHTML += `
        <ul>
            <li>
                <div class="conversation" onclick="openConversation('${contact.name}')">
                    <img class="user-icon" src="${contact.image}">
                    <div class="conversation-info">
                        <div class="conversation-details">
                            <span class="conversation-title">${contact.name}</span>
                            <span class="conversation-time">${contact.messages[contact.messages.length - 1].time.getHours()}:${contact.messages[contact.messages.length - 1].time.getMinutes()}</span>
                        </div>
                        <span class="conversation-msg">${contact.messages[contact.messages.length - 1].content}</span>
                    </div>
                </div>
            </li>
        </ul>
        `;
    });
}

const buildConversationBoard = (contact) => {
    let friend = searchContact(contact)[0];
    conversationBoard.innerHTML = `
    <div class="content-conversation-bg"></div>
    <header class="content-conversation-header">
        <div class="conversation-title">
            <img class="user-icon icon-header" src="${friend.image}">
            <span class="conversation-title">${friend.name}</span>
        </div>
        <div class="header-actions conversation-actions">
            <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="#263238" fill-opacity=".5" d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"></path>
            </svg>
            <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="#263238" fill-opacity=".5" d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"></path>
            </svg>
            <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="#263238" fill-opacity=".6" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path>
            </svg>
        </div>
    </header>
    <div class="content-conversation-messages">
        <div class="first-message-spacement"></div>
        ${friend.messages.map(message => {
            return `
        <div class="message">
            <div class="message-box">
                <span class="message-text">${message.content}</span>
                <span class="message-time">${message.time.getHours()}:${message.time.getMinutes() < 10 ? '0' + message.time.getMinutes() : message.time.getMinutes()}</span> 
            </div>
        </div>
        `}
        ).join("")}
    </div>
    <footer>
        <svg viewBox="0 0 24 24" width="28" height="28">
            <path opacity=".45" fill="#263238" d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"></path>
        </svg>
        <div class="message-field">
            <input type="text" placeholder="Type a message">
        </div>
        <svg viewBox="0 0 24 24" width="26" height="26">
            <path fill="#263238" fill-opacity=".45" d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z"></path>
        </svg>
    </footer>
    `;
};

const searchContact = (name) => {
    return [contactList.find(contact => contact.name.toLowerCase().includes(name.toLowerCase()))];
}

const openConversation = (name) => {
    conversationBoard.classList.add('actived')
    buildConversationBoard(name);
};

search.addEventListener('keyup', () => {
    if (search.value.length > 2) buildConversationsList(searchContact(search.value));
    else if (search.value == '' || search.value.length == 0) buildConversationsList(contactList)
});

buildConversationsList(contactList);