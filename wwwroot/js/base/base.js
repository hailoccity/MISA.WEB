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
        this.getData();
        this.loadData();
        // gán sự kiện
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
        $('#tblistCustomer').on('click','tr',this.rowOnclick)
            //todo
        
        $("#btnRefresh").click(this.loadData.bind(this));

        $("#btnSave").click(this.saveData.bind(this));
    }
  
 loadData(){
     try {
        $('table#tblistCustomer tbody').empty();
        //lay du lieu ve
        var data = fakeData;
        $.each(this.Data,function(index, item){
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
      
   
        })
     } catch (error) {
         
     }

    
}

getData(){
    this.Data = [];
}
rowOnclick(){
  
}
btnloadData(){

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
    debugger;
}
}
//Dinh dang hien thi tien

var fakeData = [
    {
        CustomerCode: "KH001",
        CustomerName: "Le Doan Hieu",
        BirthDay: new Date(1997,5,2),
        PhoneOfNumber: "0392856231",
        DebitAmount: 1000000,
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