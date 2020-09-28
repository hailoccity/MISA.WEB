$(document).ready(function (){
    try {
        customerJs = new CustomerJS();
    } catch (error) {
        
    }
    //load du lieu

});
/**
 * Class quản lý các sự kiện cho trang customer
 */
class CustomerJS{
    constructor(){
        // gán sự kiện
        try {
            this.loadData();
            this.initEvent();
           
        } catch (error) {
            
        }
 
        
    }
  /**
 * Load du lieu
 * 
 */
 loadData(){
     try {
        $('table#tblistCustomer tbody').empty();
        //lay du lieu ve
        var Data = data;
        $.each(data,function(index, item){
            var CustomerInfoHTML =
            `<tr>
            <td>`+item['CustomerCode']+`</td>
            <td class="text-left">`+item['CustomerName']+`</td>
            <td>`+item['BirthDay']+`</td>
            <td class="text-center">`+item['PhoneOfNumber']+`</td>
            <td>`+commonJS.formatMoney(item['DebitAmount'])+`</td>
            <td class="text-center">`+commonJS.buildCheckBoxByValue(item['Is5FoodMember'])+`</td>
          </tr>`;
            
          $('table#tblistCustomer tbody').append(CustomerInfoHTML);
      
            debugger;
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
    data.push(custumer);
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
        DebiMoney: 1000000,
        IsMember5Food: true

    },
    
    {
        CustomerCode: "KH001",
        CustomerName: "Le Doan Hieu",
        DateOfBirth: new Date(1997,5,2),
        Mobile: "0392856231",
        DebiMoney: 1000000,
        IsMember5Food: true

    },
    {
        CustomerCode: "KH001",
        CustomerName: "Le Doan Hieu",
        DateOfBirth: new Date(1997,5,2),
        Mobile: "0392856231",
        DebiMoney: 1000000,
        IsMember5Food: true

    },
   
    


]