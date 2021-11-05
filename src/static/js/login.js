$(function () {
    $('#submit').on("click", function () {
        let email = $("#email").val()
        let password = $("#password").val()

        if (email == "") {
            $("#help-id-login").text("* 아이디를 입력해주세요.")
            $("#email").focus()
            return;
        } else {
            $("#help-id-login").text("")
        }

        if (password == "") {
            $("#help-password-login").text("비밀번호를 입력해주세요.")
            $("#password").focus()
            return;
        } else {
            $("#help-password-login").text("")
        }

        $.ajax({
            type: "POST",
            url: "/login/api/sign_in",
            data: {
                email_give: email,
                password_give: password
            },
            success: function (response) {
                if (response['result'] == 'success') {
                    document.cookie = 'mytoken='+ response['token'] + ';path=/';
                    window.location.href = '/'
                } else {
                    alert(response['msg'])
                }
            }
        });
    });
})




