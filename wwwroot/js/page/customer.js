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
<<<<<<< HEAD
        // gán sự kiện
        try {
            this.loadData();
            this.initEvent();
           
        } catch (error) {
            
        }
 
        
=======
  

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
>>>>>>> 27ed1f96f83e37836fdb9d590666be39e9faaba7
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

var data = [
    {
        CustomerCode: "KH001",
        CustomerName: "Le Doan Hieu",
<<<<<<< HEAD
        DateOfBirth: new Date(1997,5,2),
        Mobile: "0392856231",
        DebiMoney: 1000000,
        IsMember5Food: true
=======
        BirthDay: new Date(1997,5,2),
        PhoneOfNumber: "0392856231",
        DebitAmount: 1200000,
        Is5FoodMember: true
>>>>>>> 27ed1f96f83e37836fdb9d590666be39e9faaba7

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