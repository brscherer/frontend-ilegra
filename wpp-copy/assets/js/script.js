let conversations = document.getElementById('conversations-list');


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

let anotherContact = {
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
    contact, anotherContact
];

let conversation = {
    users: [ user, contact ],
}

contactList.forEach( contact => {
    conversations.innerHTML += `
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
    `;
})