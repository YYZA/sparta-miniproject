function likeClick(user_name, like_users_name) {
    let heartStatus = document.getElementsByClassName("btn-like");
    if (heartStatus.innerHTML === "<i class=\"far fa-heart icon-heart\"></i>") {
        $.ajax({
            type: "POST",
            url: "/like",
            data: {user_name_give: user_name, like_users_give: like_users_name},
            success: function (response) {
                if (response["result"] == "success") {
                    window.location.reload();
                }
            }
        })
        heartStatus.innerHTML = "<i class=\"fas fa-heart\"></i>"
    } else {
        $.ajax({
            type: "POST",
            url: "/cancel",
            data: {user_name_give: user_name, like_users_give: like_users_name},
            success: function (response) {
                if (response["result"] == "success") {
                    alert(response["msg"]);
                    window.location.reload();
                }
            }
        })
        heartStatus.innerHTML = "<i class=\"far fa-heart\"></i>"
    }
}

// function postCard() {
//     $.ajax({
//         type: 'GET',
//         url: '/post',
//         data: {},
//         success: function (response) {
//             let petInfo = response['pet_info']
//             let i = 0;
//             while (i < petInfo.length) {
//                 let user_name = petInfo[i]['user_name']
//                 let image = petInfo[i]['image']
//                 let pet_name = petInfo[i]['pet_name']
//                 let pet_age = petInfo[i]['pet_age']
//                 let pet_species = petInfo[i]['pet_species']
//                 let pet_intro = petInfo[i]['pet_intro']
//                 let like_counts = petInfo[i]['like_counts']
//                 i += 1;
//
//                 let temp_html = `<div class="card-container">
//                                     <span class="card-username">${user_name}</span>
//                                     <span class="card-btn">
//                                         <button class="btn-like" onclick="likeClick()"><i class="far fa-heart"></i></button>
//                         <!--                <button id="btn-like-status"><i class="fas fa-heart" id="icon-full-heart"></i></button>-->
//                                         <button class="btn-comment"><i class="far fa-comment-dots"></i></button>
//                                     </span>
//                                     <img src="../static/${image}"
//                                          alt="card-image" class="card-img">
//                                     <div class="card-desc">
//                                         <div class="pet-desc">
//                                             <p>제 이름은 ${pet_name} 에요!</p>
//                                             <p>나이는 ${pet_age}살 이구요,</p>
//                                             <p>${pet_species} 랍니다!</p>
//                                         </div>
//                                         <p class="pet-intro">${pet_intro}</p>
//                                     </div>
//                                 </div>`
//
//                 $('.card-container').append(temp_html)
//             }
//         }
//     });
// }

function sortByDate() {
    $.ajax({
        type: 'GET',
        url: '/sort/date',
        data: {},
        success: function (response) {
            let cardInfo = response['card_info']
            let i = 0;
            while (i < cardInfo.length) {
                let user_name = cardInfo[i]['user_name']
                let image = cardInfo[i]['image']
                let pet_name = cardInfo[i]['pet_name']
                let pet_age = cardInfo[i]['pet_age']
                let pet_species = cardInfo[i]['pet_species']
                let pet_intro = cardInfo[i]['pet_intro']
                let like_counts = cardInfo[i]['like_counts']
                i += 1;

                let temp_html = `<div class="card-container">
                                    <span class="card-username">${user_name}</span>
                                    <span class="card-btn">
                                        <button class="btn-like" onclick="likeClick()"><i class="far fa-heart"></i></button>
                        <!--                <button id="btn-like-status"><i class="fas fa-heart" id="icon-full-heart"></i></button>-->
                                        <button class="btn-comment"><i class="far fa-comment-dots"></i></button>
                                    </span>
                                    <img src="../static/${image}"
                                         alt="card-image" class="card-img">
                                    <div class="card-desc">
                                        <div class="pet-desc">
                                            <p>제 이름은 ${pet_name} 에요!</p>
                                            <p>나이는 ${pet_age}살 이구요,</p>
                                            <p>${pet_species} 랍니다!</p>
                                        </div>
                                        <p class="pet-intro">${pet_intro}</p>
                                    </div>
                                </div>`

                $('.card-container').append(temp_html)
            }
        }
    });
}

function sortByLike() {
    $.ajax({
        type: 'GET',
        url: '/sort/like',
        data: {},
        success: function (response) {
            let cardInfo = response['card_info']
            let i = 0;
            while (i < cardInfo.length) {
                let user_name = cardInfo[i]['user_name']
                let image = cardInfo[i]['image']
                let pet_name = cardInfo[i]['pet_name']
                let pet_age = cardInfo[i]['pet_age']
                let pet_species = cardInfo[i]['pet_species']
                let pet_intro = cardInfo[i]['pet_intro']
                let like_counts = cardInfo[i]['like_counts']
                i += 1;

                let temp_html = `<div class="card-container">
                                    <span class="card-username">${user_name}</span>
                                    <span class="card-btn">
                                        <button class="btn-like" onclick="likeClick()"><i class="far fa-heart"></i></button>
                        <!--                <button id="btn-like-status"><i class="fas fa-heart" id="icon-full-heart"></i></button>-->
                                        <button class="btn-comment"><i class="far fa-comment-dots"></i></button>
                                    </span>
                                    <img src="../static/${image}"
                                         alt="card-image" class="card-img">
                                    <div class="card-desc">
                                        <div class="pet-desc">
                                            <p>제 이름은 ${pet_name} 에요!</p>
                                            <p>나이는 ${pet_age}살 이구요,</p>
                                            <p>${pet_species} 랍니다!</p>
                                        </div>
                                        <p class="pet-intro">${pet_intro}</p>
                                    </div>
                                </div>`

                $('.card-container').append(temp_html)
            }
        }
    });
}

// Modal JS
const body = document.querySelector('body')
const modal = document.querySelector('#modal');
const btnPost = document.querySelector('.btn-post');
const btnModalClose = document.querySelector('.modal-close')

btnPost.addEventListener('click', () => {
    modal.style.display = 'block';
    body.style.overflow = 'hidden';
});

btnModalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    body.style.overflow = 'auto';
});

Scroll
let didScroll;
let lastScrollTop = 0;
let delta = 5;
let navBarHeight = $('.header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;}
    }, 250);

function hasScrolled() {
    let status = $(this).scrollTop();
    if (Math.abs(lastScrollTop - status) <= delta)
        return;

    if (status > lastScrollTop && status > navBarHeight) {
        $('.header').removeClass('nav-down').addClass('nav-up');
    } else {
        if (status + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    lastScrollTop = status;
}
