let conversations = document.getElementById('conversations-list');
let search = document.getElementById('search');

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
        }
    ]
};

let contactList = [
    contact, contact2
];

let conversation = {
    users: [user, contact],
}

const searchConversations = (name) => {
    let arr = [];
    arr.push(contactList.find(contact => contact.name.toLowerCase().includes(name.toLowerCase())));
    buildConversationsList(arr);
}

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
                    <div class="conversation">
                        <img class="user-icon" src="${contact.image}">
                        <div class="conversation-info">
                            <div class="conversation-details">
                                <span class="conversation-title">${contact.name}</span>
                                <span class="conversation-time">${contact.messages[this.length].time.getHours()}:${contact.messages[this.length].time.getMinutes()}</span>
                            </div>
                            <span class="conversation-msg">${contact.messages[this.length].content}</span>
                        </div>
                    </div>
                </li>
            </ul>
            `;
    });
}

buildConversationsList(contactList);

search.addEventListener('keyup', () => {
    if (search.value.length > 2) searchConversations(search.value);
    else if (search.value == '' || search.value.length == 0) buildConversationsList(contactList)
});

