
let tweetContentBox = document.querySelector('textarea');
let tweetDisplay = document.querySelector(".tweet-display");

let postBtn = document.querySelector(".post-tweet-btn");
postBtn.addEventListener("click", function(e){
    let tweetContent = tweetContentBox.value;
    if (tweetContent === '') {
        // Do nothing
    }
    else {
       let tweetContentDiv = document.createElement('div');
       tweetContentDiv.classList.add('tweet-content-box');
       tweetContentDiv.innerHTML = `
           <div class="profile-img">
               <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="">
           </div>
           <div class="tweet-content">
               <div class="profile-name-username">
                   <h1 class="profile-name">Harshit Shah</h1>
                   <h1 class="profile-username">@harshit.shah</h1>
               </div>
               <div class="tweet-content-text">
                   ${tweetContent}
               </div>
           </div>
           <div class="tweet-like-comment-box">
                       
                     </div>
       `;
       tweetDisplay.appendChild(tweetContentDiv);
       tweetContentBox.value = '';
    }
});

let regularHeart = document.querySelectorAll('.heart-icon');
let likedHeart = document.querySelectorAll('.liked-heart-icon');
let isLiked = false;

for (let j=0; j<regularHeart.length; j++ ) {
    regularHeart[j].addEventListener("click",function(e){
       if (!isLiked) {
        isLiked = true;
        regularHeart.classList.add('heart-icon-hide');
        likedHeart.style.visibility = 'visible';
       }
    })
}
for (let j=0; j<likedHeart.length; j++ ) {
    likedHeart[j].addEventListener("click", function(e){
        if (isLiked) {
            isLiked = false;
            regularHeart.classList.remove('heart-icon-hide');
            likedHeart.style.visibility = 'visible';
        }
    })
}