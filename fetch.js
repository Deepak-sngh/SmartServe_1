
let temp =``;

fetch("https://s3.amazonaws.com/open-to-cors/assignment.json").then((res) => {
  res.json().then((data) => {
    
    if (Object.keys(data).length > 0) { 

      Object.keys(data.products).forEach((val) => {
    
    
        temp += `<tr> <td>  ${data.products[val].title} </td>
        <td>   ${data.products[val].subcategory}  </td>
        <td>   ${data.products[val].price}  </td>
        <td>   ${data.products[val].popularity}  </td>
         <td>   ${data.count[val]}  </td>
        </tr>`;

      });
 

      document.getElementById("myTable").innerHTML = temp;
    }
  });
});


