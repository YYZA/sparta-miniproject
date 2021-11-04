<!--   한글, 영어만 작성 가능-->
$("#name, #breed ").keyup(function(event){

    if (!(event.keyCode >=37 && event.keyCode<=40)) {

        var inputVal = $(this).val();

        inputVal = inputVal.replace(/[^(가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z)]/gi,'').replace(/[()]/g,'');

        $(this).val(inputVal);

    }

}).blur(function(){

    if( $(this).val() != null && $(this).val() != '' ) {

        $(this).val( $(this).val().replace(/[^(가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z)]/gi, '').replace(/[()]/g,'') );

    }

});

<!--파일업로드-->
$("#file").on('change',function(){
    var fileName = $("#file").val();
    $(".upload-name").val(fileName);
});


<!--이미지 파일만 불러오게-->
function upload() {
    if (file.value==""){
        let file=$('#file').val();
        alert("img파일을 업로드해 주세요.");
        return;
    }

    <!--글자수 제한-->
    if (name.value==""){
        let name = $('#name').val();
        alert("이름을 입력해 주세요.");
        return flase;
    }


    <!--<숫자로만 입력-->
    if (age.value==""){
        let age=$('#age').val();
        alert("나이를 입력해 주세요.");
        return;
    }

    <!--글자수 제한-->
    if (breed.value==""){
        let bleed=$('#breed').val();
        alert("견종을 입력해 주세요.");
        return;
    }

    <!--글자수 제한-->
    if (intro.value==""){
        let intro=$('#intro').val();
        alert("소개글을 작성해 주세요.");
        return;
    }
    else{
        alert("등록완료");
    }
}