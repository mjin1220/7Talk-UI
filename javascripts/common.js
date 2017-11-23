var all_agree_changed = function(){
    var cb_status = false;
    if(document.getElementsByClassName('all_agree')[0].checked == true){
        cb_status = true;
    } else{
        cb_status = false;
    }

    var sub_agrees = document.getElementsByClassName('sub_agree');
    for(var i = 0 ; i < sub_agrees.length ; i++){
        sub_agrees[i].checked = cb_status;
    }
};

var sub_agree_changed = function(this){
    if(this.checked == true){
        return;
    } else {
        if(document.getElementsByClassName('all_agree')[0].checked == true){
            document.getElementsByClassName('all_agree')[0].checked == false;
        }
    }
};