function makeRed() {
  document.body.style.backgroundColor = "green";
}

document.getElementById("make-blue").addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
});

document.getElementById("submit-btn").addEventListener("click", function () {
  const inputField = document.getElementById("input-field");
  const inputText = inputField.value;
  const p = document.getElementById("defult-text");
  p.innerText = inputText;
  inputField.value = ""
});


document.getElementById('cmnt-btn').addEventListener('click', function(){
    const commentBox = document.getElementById('cmt-box');
    const commentText = commentBox.value;

    const commentArea = document.getElementById('cmnt-container');
    const p = document.createElement('p');
    p.innerText=commentText;
    commentArea.appendChild(p);
    commentBox.value = '';
    console.log(commentText);
})
