import { profile } from "./profile.js";

let contentSummary = ``;

profile.forEach((profileInfo) => {
    contentSummary += `
    <div class="post-container">
        <img src="${profileInfo.image}" alt="">
        <div class="post-content">
            <div class="post-user-info">
                <div class="username">${profileInfo.userName}</div>
                <div class="nickname">
                    ${profileInfo.nickName} 
                    <span>
                        <img src="${profileInfo.tickMark}" alt="Tick">
                    </span>
                </div>
            </div>
            <p>
                ${profileInfo.content}
            </p>

            ${profileInfo.postImg ? `<div class="post-img"><img src="${profileInfo.postImg}" alt="Post image"></div>` : ''}

            <div class="tweet-icon">
                <div>
                    <img src="icons/reply.png">
                    <span>${profileInfo.footerStats.Reply}</span>
                </div>
                <div>
                    <img src="icons/repost.png">
                    <span>${profileInfo.footerStats.Repost}</span>
                </div>
                <div>
                    <img src="icons/like.png">
                    <span>${profileInfo.footerStats.Likes}</span>
                </div>
                <div>
                    <img src="icons/views.png">
                    <span>${profileInfo.footerStats.Views}</span>
                </div>

                <div class="side-icon">
                    <img src="icons/bookmark.png" alt="">
                    <img src="icons/share.png">
                </div>
            </div>
        </div>
    </div>
    `;
});

const mainContent = document.querySelector('.js-main-content');
mainContent.insertAdjacentHTML('beforeend', contentSummary);
