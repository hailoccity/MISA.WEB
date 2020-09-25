var commonJS= {
    //Định dạng tiênf dư nợ
    formatMoney(money){
        return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1.');
    },
    // kiểm tra checkbox
    buildCheckBoxByValue(value){
        var checkBoxHTML = $(`<input type ="checkbox"/>`);
        if(value){
            checkBoxHTML = checkBoxHTML.attr("checked",true);
        }
        return checkBoxHTML[0].outerHTML;
    }

}