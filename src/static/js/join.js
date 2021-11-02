window.addEventListener('load', () => {
    const forms = document.getElementsByClassName('validation-form');
    Array.prototype.filter.call(forms, (form) => {
        form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
        }, false);
    });
}, false);

const USER_PW = document.getElementById('pw')
const PW_CHECK = document.getElementById('check')
function check_pw() {
    let pw = USER_PW.value;
    let SC = ["!", "@", "#", "$", "%"];
    let check_SC = 0;

    if (pw.length < 6 || pw.length > 16) {
        window.alert('비밀번호는 6글자 이상, 16글자 이하만 이용 가능합니다.');
        USER_PW.value = '';
    }
    for (let i = 0; i < SC.length; i++) {
        if (pw.indexOf(SC[i]) != -1) {
            check_SC = 1;
        }
    }
    if (check_SC === 0) {
        window.alert('!,@,#,$,% 의 특수문자가 들어가 있지 않습니다.')
        USER_PW.value = '';
    }
    if (USER_PW.value !== '' && USER_PW.value !== '') {
        if (USER_PW.value === document.getElementById('pw2').value) {
            PW_CHECK.innerHTML = '비밀번호가 일치합니다.'
            PW_CHECK.style.color = 'blue';
        } else {
            PW_CHECK.innerHTML = '비밀번호가 일치하지 않습니다.';
            PW_CHECK.style.color = 'red';
        }
    }
}

function sendDB() {

    $.ajax({
        type: 'POST',
        url: "/join/",
        data: {
            email:$('#email').val(),
            nickname :$('#nickname').val(),
            name:$('#name').val(),
            pw:$('#pw').val(),
            pw2:$('#pw2').val()
        },
        success: function (response) {
            alert("회원가입이 완료되었습니다!");
        },
        error: function (error) {
            alert("Error!");
        }
    })
}