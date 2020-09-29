$(document).ready(function (){
    try {
        employeeJs = new EmployeeJS();
    } catch (error) {
        
    }
    //load du lieu

});
/**
 * Class quản lý các sự kiện cho trang employee
 */
class EmployeeJS{
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
        var employees = data;
        $.each(employees,function(index, employee){
          var trHTML =$(`<tr class="btnTr">
            <td>`+employee['EmployeeCode']+`</td>
            <td class="text-left">`+employee['EmployeeName']+`</td>
            <td>`+employee['Gender']+`</td>
            <td>`+employee['DateOfBirth']+`</td>
            <td class="text-center">`+employee['Mobile']+`</td>
            <td>`+employee['Salary']+`</td>
            
          </tr>`);
            
          $('table#tblistCustomer tbody').append(trHTML);
      
        
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

    // bao hàm tất cả các thẻ được bao
    $('table#tblistCustomer').on('click','tr',this.rowOnclick);
              
    $('#btnRefresh').click(this.btnReloadData.bind(this));
    
    $("#btnRefresh").click(this.loadData.bind(this));

    //$("#btnSave").click(this.saveData.bind(this));

}
rowOnclick(){
    $(this).siblings().removeClass('row-selected');
    $(this).addClass('row-selected');
}
btnReloadData(){
    this.loadData();
}


/*
saveData(){
    //luu dữ liệu
    var customerName = $("#txtCustomerName").val(),
    customerCode = $("#txtCustomerCode").val(),
    birthday =$("#dtBirth").val(),
    mobile= $("#txtMobile").val(),
    debitAmount =$("#txtDebiAmount").val(),
    check5food =$("#check5Food").is(':checked');

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
        IsMember5Food: check5food,
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
*/

}

//Dinh dang hien thi tien

var data = [
    {
        EmployeeCode: "KH001",
        EmployeeName: "Le Doan Hieu",
        Gender:"nam",
        DateOfBirth: new Date(1997,5,2),
        Mobile: "0392856231",
        Salary:1000000,


    },
   

]