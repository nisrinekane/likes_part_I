// get html object using querySelector
let likeObj = document.querySelector('#likeNum');

// function to increment like count
function incrementLike() {
    likeObj.innerText++;
}

// get like text
let likeText = document.querySelector('#likeText');

// function to check if like is plural
function incrementText() {
    if (likeObj.innerText >= 2) {
        likeText.innerText = 'likes';
    }
}