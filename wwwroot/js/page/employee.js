$(document).ready(function () {
    try {
        employeeJs = new EmployeeJS();
    } catch (error) {

    }
    //load du lieu

});
/**
 * Class quản lý các sự kiện cho trang customer
 */
class EmployeeJS {
    constructor() {
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
    loadData() {
        try {
            $('table#tblistCustomer tbody').empty();
            //lay du lieu ve
            var data = fakeData;
            $.each(data, function (index, employee) {
                var CustomerInfoHTML =
                    `<tr>
            <td>`+ employee['CustomerCode'] + `</td>
            <td class="text-left">`+ employee['CustomerName'] + `</td>
            <td>`+ employee['BirthDay'] + `</td>
            <td class="text-center">`+ employee['PhoneOfNumber'] + `</td>
            <td>`+ commonJS.formatMoney(employee['DebitAmount']) + `</td>
            <td class="text-center">`+ commonJS.buildCheckBoxByValue(employee['Is5FoodMember']) + `</td>
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
    initEvent() {
        $("#btnAdd").click(function () {
            $("#frDialog").show();
        })
        $("#btnClose").click(function () {
            $("#frDialog").hide();

        })
        $("#btnCloseX").click(function () {
            $("#frDialog").hide();

        })
        $('tr').click(function () {

        })
        // bao hàm tất cả các thẻ được bao
        $('#tblistCustomer').on('click', 'tr', this.rowOnclick);

        $('#btnRefresh').click(this.btnReloadData.bind(this));

        $("#btnRefresh").click(this.loadData.bind(this));

        $("#btnSave").click(this.saveData.bind(this));

    }
    rowOnclick() {
        $(this).siblings().removeClass('row-selected');
        $(this).addClass('row-selected');
    }
    btnReloadData() {
        this.loadData();
    }
    //
    saveData() {
        //luu dữ liệu
        var customerName = $("#txtCustomerName").val(),
            customerCode = $("#txtCustomerCode").val(),
            birthday = $("#dtBirth").val(),
            mobile = $("#txtMobile").val(),
            debitAmount = $("#txtDebiAmount").val(),
            check5food = $("#check5Food").is(':checked')
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

var fakeData = [
    {
        CustomerCode: "KH001",
        CustomerName: "Le Doan Hieu",
        BirthDay: new Date(1997, 5, 2),
        PhoneOfNumber: "0392856231",
        DebitAmount: 1000000,
        Is5FoodMember: true

    },

    {
        CustomerCode: "KH002",
        CustomerName: "Le Van Dong",
        BirthDay: new Date(1997, 5, 2),
        PhoneOfNumber: "0392856231",
        DebitAmount: 1000000,
        Is5FoodMember: false

    },



]