const input = document.getElementById("chat-widget__input");
const widget = document.querySelector(".chat-widget__side");
const message = document.querySelector(".chat-widget__messages");
const chatWindow = document.querySelector(".chat-widget__messages-container");
const botMassage = [
    "Как дела?",
    "Какая чудесная погода!",
    "И что мы с этим будем делать?",
    "Больше ни слова!",
    "Я в печали",
    "Может по пивку? ;)",
    "Полностью с Вами согласен!",
    "Воооот, а я ему и говорю:'Ничего-то ты не понимаешь в колбасных обрезках!' ",
    "Хочу спать....",
    "...ушел на обед...",
]

// check activity
function checkActivity() {
    var t;
    document.onkeydown = resetTimer;
    // можно добавить событий

    function checkOnline() {
        message.innerHTML += `
        <div class="message>
            <div class="message__time">${(new Date).getHours()}:${(new Date).getMinutes()}</div>
            <div class="message__text"> 
                Вы еще здесь?
            </div>
        </div>
        `;
        let position = chatWindow.scrollHeight;
        chatWindow.scrollTo(0, position);
    };

    function resetTimer() {
        console.log('start timer');
        clearTimeout(t);
        t = setTimeout(checkOnline, 30000);
    };
};

widget.addEventListener("click", () => {
    document.querySelector(".chat-widget").className += " chat-widget_active";
});

checkActivity()

input.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        
        //user message
        message.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${(new Date).getHours()}:${(new Date).getMinutes()}</div>
            <div class="message__text"> 
                ${input.value} 
            </div>
        </div>
        `;
        let position = chatWindow.scrollHeight;
        chatWindow.scrollTo(0, position);

        //chatbot message
        input.value = ""
        setTimeout (() => {
            message.innerHTML += `
            <div class="message>
                <div class="message__time">${(new Date).getHours()}:${(new Date).getMinutes()}</div>
                <div class="message__text"> 
                    ${botMassage[Math.floor(Math.random() * 9)]}
                </div>
            </div>
            `;
            let position = chatWindow.scrollHeight;
            chatWindow.scrollTo(0, position)
        }, 1000);
    };
});