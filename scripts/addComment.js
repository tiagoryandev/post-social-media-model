const commentsBox = document.getElementById("comments");
const boxText = document.getElementById("box-comment");
const buttomSubmit = document.getElementById("submit");

buttomSubmit.addEventListener("click", () => {
        if (boxText.value.length > 0) {
            const content = boxText.value;
            const user = document.createElement("div");
            user.className = "user";

            const username = document.createElement("span");
            const usernameContent = document.createTextNode("tiagoinsany");
            username.appendChild(usernameContent);

            user.appendChild(username)
            user.innerHTML = `${user.innerHTML} ${content}`;

            commentsBox.appendChild(user);
            boxText.value = "";
            commentsBox.disabled = true;
            buttomSubmit.disabled = true;
        };
});