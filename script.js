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

       // Save tweet to local storage
       saveTweetToLocalStorage(tweetContent);
    }
});

// Function to save tweet to local storage
function saveTweetToLocalStorage(tweetContent) {
    let tweets = [];
    if (localStorage.getItem('tweets')) {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    tweets.push(tweetContent);
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Load tweets from local storage on page load
window.addEventListener('load', function() {
    loadTweetsFromLocalStorage();
});

// Function to load tweets from local storage
function loadTweetsFromLocalStorage() {
    let tweets = JSON.parse(localStorage.getItem('tweets'));
    if (tweets) {
        tweets.forEach(function(tweetContent) {
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
        });
    }
}
