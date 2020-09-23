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
    }

 loadData(){
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
}
//Dinh dang hien thi tien

var fakeData = [
    {
        CustomerCode: "KH001",
        CustomerName: "Le Doan Hieu",
        BirthDay: new Date(1997,5,2),
        PhoneOfNumber: "0392856231",
        DebitAmount: 1000000,
        Is5FoodMember: false

    },
    {
        CustomerCode: "KH002",
        CustomerName: "Le Van Dong",
        BirthDay: new Date(1997,5,2),
        PhoneOfNumber: "0392856231",
        DebitAmount: 1000000,
        Is5FoodMember: false

    },
    {
        CustomerCode: "KH003",
        CustomerName: "Le Doan Hieu",
        BirthDay: "20/05/1997",
        PhoneOfNumber: "0392856231",
        DebitAmount: 1000000,
        Is5FoodMember: true
    }

    

]