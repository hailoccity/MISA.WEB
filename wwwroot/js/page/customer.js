$(document).ready(function () {
    try {
        customerJs = new CustomerJS();
    } catch (error) {

    }
    //load du lieu

});
/**
 * Class quản lý các sự kiện cho trang customer
 */
class CustomerJS extends BaseJS {
    constructor() {
        super();
    }
    getData() {
        this.Data = fakeData;
    }




    /**
     * Gán sự kiện cho các thành phần
     * Create by Hieu
     */


/*
    saveData() {
        //luu dữ liệu
        var customerName = $("#txtCustomerName").val(),
            customerCode = $("#txtCustomerCode").val(),
            birthday = $("#dtBirth").val(),
            mobile = $("#txtMobile").val(),
            debitAmount = $("#txtDebiAmount").val(),
            check5food = $("#check5Food").is(':checked');

        if (customerName == "" || customerName == null) {
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

        // lưu vào table
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
    loadDataForm() {
        var customerName = $("#txtCustomerName").val(""),
            customerCode = $("#txtCustomerCode").val(""),
            birthday = $("#dtBirth").val(""),
            mobile = $("#txtMobile").val(""),
            debitAmount = $("#txtDebiAmount").val(""),
            check5food = $("#check5Food").prop('checked', false)


    }
    */
}



//Dinh dang hien thi tien



var fakeData = [
    {
        CustomerCode: "KH001",
        CustomerName: "Le Doan Hieu",
        DateOfBirth: new Date('1997, 5, 20'),
        Mobile: "0392856231",
        DebitMoney: 1200000,
        IsMember5Food: true,

    },
    {
        CustomerCode: "KH001",
        CustomerName: "Le Doan Hieu",
        DateOfBirth: new Date('1997, 5, 20'),
        Mobile: "0392856232",
        DebitMoney: 1200000,
        IsMember5Food: true,

    },
    {
        CustomerCode: "KH001",
        CustomerName: "Le Doan Hieu",
        DateOfBirth: new Date('1997, 5, 20'),
        Mobile: "0392856231",
        DebitMoney: 1200000,
        IsMember5Food: true,

    },



];

