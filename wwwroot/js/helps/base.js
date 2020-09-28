$(document).ready(function (){
    try {
        baseJs = new BaseJS();
    } catch (error) {
        
    }
    //load du lieu

});
/**
 * Class quản lý các sự kiện cho trang customer
 */
class BaseJS{
    constructor(){
        // gán sự kiện
        try {
            this.getData();
            this.loadData();
            this.initEvent();
           
        } catch (error) {
            
        }
 
        
    }
    getData(){
        this.Data=[];
    }
  /**
 * Load du lieu
 * 
 */
 loadData(){
     try {
         // Đọc thông tin từ các cột dũ liệu
        var data = this.Data;
        var fields = $(`table#tblistCustomer thead th`);
        $each(data , function(index, obj){
            var tr = $(`<tr></tr>`);
            $.each(fields,function(index, field){
                var fieldName = $(field).attr(`fieldName`);
                var value = obj[fieldName];
                var td = $(`<td>`+ value +`</td>`);
                $(tr).append(td);
            })
            $('table#tblistCustomer tbody').append(tr);
        })
        
     } catch (error) {
         
     }
    
     
}
/**
 * Gán sự kiện cho các thành phần
 * Create by Hieu
 */
initEvent(){
    $("#btnAdd").click(function(){
        $("#frDialog").show();
    })
    $("#btnClose").click(function(){
        $("#frDialog").hide();
    
    })
    $("#btnCloseX").click(function(){
        $("#frDialog").hide();
    
    })
    $('tr').click(function(){
        
    })
    // bao hàm tất cả các thẻ được bao
    $('#tblistCustomer').on('click','tr',this.rowOnclick);
              
    $('#btnRefresh').click(this.btnReloadData.bind(this));
    
    $("#btnRefresh").click(this.loadData.bind(this));

    $("#btnSave").click(this.saveData.bind(this));

}
rowOnclick(){
    $(this).siblings().removeClass('row-selected');
    $(this).addClass('row-selected');
}
btnReloadData(){
    this.loadData();
}
//
saveData(){
    //luu dữ liệu
    var customerName = $("#txtCustomerName").val(),
    customerCode = $("#txtCustomerCode").val(),
    birthday =$("#dtBirth").val(),
    mobile= $("#txtMobile").val(),
    debitAmount =$("#txtDebiAmount").val(),
    check5food =$("#check5Food").is(':checked')
// từ dữ liệu thu thập được
    var custumer = {
        CustomerCode: customerCode,
        CustomerName: customerName,
        DateOfBirth: new Date(birthday),
        Mobile: mobile,
        DebitMoney: debitAmount,
        IsMember5Food: check5food
    }
   
// lưu vào database
    fakeData.push(custumer);
// Hiển thị thông báo thành công
    alert("Thêm thành công");
//đóng form
    $("#frDialog").hide();
//load lại dữ liệu
    this.loadData();
    debugger;
}
}
//Dinh dang hien thi tien

var data = [
    {
        CustomerCode: "KH001",
        CustomerName: "Le Doan Hieu",
        DateOfBirth: new Date(1997,5,2),
        Mobile: "0392856231",
        DebitMoney: 1000000,
        IsMember5Food: true

    },
    
   


]