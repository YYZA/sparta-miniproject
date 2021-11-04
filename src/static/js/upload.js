function getRealPath(obj){
  obj.select();
  document.upimage.real_path.value = document.selection.createRangeCollection()[0].text.toString();

}

function upload(){
     if (uploadInput.value==""){
        let file = $('#uploadInput').val();
        alert("img파일을 업로드해 주세요.");
        uploadInput.focus()
        return false;
    }

    if (name.value==""){
        let name = $('#name').val();
        alert("이름을 입력해 주세요.");
        name.focus()
        return false;
    }



    if (age.value==""){
        let age=$('#age').val();
        alert("나이를 입력해 주세요.");
        age.focus()
        return false;
        }


    if (breed.value==""){
        let bleed=$('#breed').val();
        alert("견종을 입력해 주세요.");
        breed.focus()
        return false;
        }



    if (intro.value==""){
        let intro=$('#intro').val();
        alert("소개글을 작성해 주세요.");
        intro.focus()
        return false;
        }
 }