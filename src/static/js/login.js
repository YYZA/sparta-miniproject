const email = document.querySelector('#email');
const password = document.querySelector('#password');
function checkForm() {
    if (email.value == "" || !(email.value !== "@")) {

//경고창 출력
        alert("아이디를 입력하세요");
        email.focus(); //id가 id인 태그에 커서깜빠거리는 포커스 주기
        //현재 submit이벤트를 중지하는 개념(즉, 전송을 막는다->페이지안넘김)
    }

    if (password.value == "") {//입력받은 비밀번호값이 없으면
        alert("암호를 입력하세요");
송
    } else { //아이디와 비밀번호를 잘 입력받았다면
            let email = $('#email').val()
            let password = $('#password').val()
            $.ajax({
                type: 'POST',
                url: "/login/",
                data: {email_give: email,password_give:password},
                success: function (response) {
                    alert("로그인 되었습니다 !");
                },
                error: function (error) {
                    alert("Error!");
                }
            })
            console.log(email,password)
        }//form안에 있는 데이터를 action속성의 주소로 전
}

