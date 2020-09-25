$(document).ready(function (){
    //load du lieu
    customerJs = new CustomerJS();
});
/**
 * Load du lieu
 * 
 */
class CustomerJS{
    constructor(){
  

        this.loadData();
        $("#btnAdd").click(function(){
            $("#frDialog").show();
        })  
        $("#btnClose").click(function(){
            $("#frDialog").hide();
        
        })
        $("#btnCloseX").click(function(){
            $("#frDialog").hide();
        
        })
        // Xử lý các nút thêm sửa xoá...
        $("#btnEdit").click(function(){

        })
        $("#btnDelete").click(function(){

        })
        $("#btnRefresh").click(function(){

        })
        
        $("#tblistCustomer").on('click','tr',function(){
            $(this).siblings().removeClass('row-selected');
            $(this).addClass('row-selected');
        })
           
        
        $("#btnSave").click(this.saveData.bind(this));
        //this.loadDataForm.bind(this);
    }
           

 loadData(){
    $('table#tblistCustomer tbody').empty();
  //lay du lieu ve
  var data = fakeData;
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
}
// Validation data on form
valiDateData(){
    var customerName = $("#txtCustomerName"),
        customerCode = $("#txtCustomerCode")
        birthday =  $("#dtBirth"),
        mobile= $("#txtMobile"),
        debitAmount =$("#txtDebiAmount"),
        check5food =$("#check5Food")
    
}
//
saveData(){
    //luu dữ liệu
    var customerName = $("#txtCustomerName").val(),
    customerCode = $("#txtCustomerCode").val(),
    birthday =$("#dtBirth").val(),
    mobile= $("#txtMobile").val(),
    debitAmount =$("#txtDebiAmount").val(),
    check5food =$("#check5Food").is(':checked');

    //var phone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    
    if(customerName == "" || customerName == null){
        alert("Không được để trống phần tên !!!!!");
        return false;
    
    } 
    
    
    

// từ dữ liệu thu thập được
    var custumer = {
        CustomerCode: customerCode,
        CustomerName: customerName,
        BirthDay: new Date(birthday),
        PhoneOfNumber: mobile,
        DebitAmount: debitAmount,
        Is5FoodMember: check5food
    }
   
// lưu vào database
    fakeData.push(custumer);
// Hiển thị thông báo thành công
    alert("Thêm thành công");
//đóng form
    $("#frDialog").hide();
//load lại dữ liệu
    this.loadData();
    this.loadDataForm();
    //debugger;
}
// delete on form
loadDataForm(){
    var customerName = $("#txtCustomerName").val(""),
        customerCode= $("#txtCustomerCode").val(""),
        birthday =  $("#dtBirth").val(""),
        mobile= $("#txtMobile").val(""),
        debitAmount =$("#txtDebiAmount").val(""),
        check5food =$("#check5Food").prop('checked',false)
    

}

}
//Dinh dang hien thi tien

var fakeData = [
    {
        CustomerCode: "KH001",
        CustomerName: "Le Doan Hieu",
        BirthDay: new Date(1997,5,2),
        PhoneOfNumber: "0392856231",
        DebitAmount: 1200000,
        Is5FoodMember: true

    },
    
    {
        CustomerCode: "KH002",
        CustomerName: "Le Van Dong",
        BirthDay: new Date(1997,5,2),
        PhoneOfNumber: "0392856231",
        DebitAmount: 1000000,
        Is5FoodMember: false

    },


]