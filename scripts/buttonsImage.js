const buttomLike = document.getElementById("like");
const buttonComment = document.getElementById("add-comment");
const buttomSendMessage = document.getElementById("send-dm");

let likeValue = false;
let commentValue = false;
let sendMessageValue = false;

buttomLike.addEventListener("click", () => {
    if (likeValue == false) {
        buttomLike.className = "fa fa-heart";
        likeValue = true;
    } else {
        buttomLike.className = "far fa-heart";
        likeValue = false;
    };
});

buttonComment.addEventListener("click", () => {
    if (commentValue == false) {
        buttonComment.className = "fa fa-comment";
        boxText.disabled = false;
        buttomSubmit.disabled = false;

        commentValue = true;
    } else {
        buttonComment.className = "far fa-comment";
        boxText.disabled = true;
        buttomSubmit.disabled = true;

        commentValue = false;
    };
});

buttomSendMessage.addEventListener("click", () => {
    if (sendMessageValue == false) {
        buttomSendMessage.className = "fa fa-paper-plane";
        sendMessageValue = true;
    } else {
        buttomSendMessage.className = "far fa-paper-plane";
        sendMessageValue = false;
    };
});