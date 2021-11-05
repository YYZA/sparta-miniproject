// Input tag
const USER_PW = document.getElementById('pw');
const USER_PW2 = document.getElementById('pw2');
const EMAIL = document.getElementById('email')
const NICKNAME = document.getElementById('nickname')

// Check span tag
const EMAIL_CHECK = document.getElementById('email_check');
const PW_CHECK = document.getElementById('pw_check');
const PW2_CHECK = document.getElementById('pw2_check');
const NICKNAME_CHECK = document.getElementById('nickname_check');

// Regex
const REGEX_PWD = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/; // 아이디와 패스워드가 적합한지 검사할 정규식
const REGEX_EMAIL = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;




function check(regex, tag, message) {
    if(regex.test(tag.value)) {
        return true;
    }
    alert(message);
    tag.value = "";
    tag.focus();
}


function checkForm() {

    if(USER_PW.value != USER_PW2.value) {
        alert("비밀번호가 다릅니다. 다시 입력해주세요.");
        USER_PW.value = "";
        USER_PW2.value = "";
        PW_CHECK.innerHTML = "";
        PW2_CHECK.innerHTML = "";
        USER_PW.focus();
        return false;
    }

    if(!check(REGEX_PWD,USER_PW,"비밀번호는 특수문자, 문자, 숫자 포함 형태의 8~15자리입니다.")) {
        return false;

    }
    if(!check(REGEX_EMAIL, EMAIL, "적합하지 않은 이메일 형식입니다.")) {
        return false;
    }
}

function pwdRegexCheck() {

    if(REGEX_PWD.test(USER_PW.value)) {
        PW_CHECK.innerHTML = "사용하셔도 괜찮은 비밀번호입니다.";
        PW_CHECK.style.color = 'blue';
    } else {
        PW_CHECK.innerHTML = "비밀번호는 특수문자, 문자, 숫자 포함 형태의 8~15자리입니다.";
        PW_CHECK.style.color = 'red';
    }
}

// 패스워드, 패스워드 확인 일치여부 span 태그에 출력
function pwdEqualCheck() {


    if (USER_PW.value !== '' && USER_PW2.value !== '') {
        if (USER_PW.value === USER_PW2.value) {
            PW2_CHECK.innerHTML = '비밀번호가 일치합니다.'
            PW2_CHECK.style.color = 'blue';
        } else {
            PW2_CHECK.innerHTML = '비밀번호가 일치하지 않습니다.';
            PW2_CHECK.style.color = 'red';
        }
    }
}

function emailDuplicateCheck() {
    $.ajax({
        type: "POST",
        url: "/join/check_dup",
        data: {
            username_give: $(this).val()
        },
        success: function (response) {
            if (response["exists"]) {
                EMAIL_CHECK.innerHTML = "이미 존재하는 아이디입니다.";
                EMAIL_CHECK.style.color = "red";
                EMAIL.focus();
            } else {
                EMAIL_CHECK.innerHTML = "사용할 수 있는 아이디입니다.";
                EMAIL_CHECK.style.color = "blue";
            }
        }
    });
}



function init() {
    $("#pw").on("propertychange change keyup paste input", pwdRegexCheck);
    $("#pw2").on("propertychange change keyup paste input", pwdEqualCheck);

    $("#email").change(emailDuplicateCheck);


}

init();