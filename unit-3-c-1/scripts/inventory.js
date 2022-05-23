function append(){
    let data=JSON.parse(localStorage.getItem("products")) || [];
    let all_products=document.getElementById("all_products");
    

     data.forEach(function(event,index){
         let div= document.createElement("div");
         let img= document.createElement('image');
         img.src=event.image;
         let typ =document.createElement('typ');
         typ.innerHTML=event.type;
         let dis =document.createElement('dis');
         dis.innerText=event.desc;
          let price=document.createElement('price');
         price.innerText=event.price;

         let btn= document.createElement("button");
         btn.innerText="Remove"
         btn.setAttribute("click",function () {
             remove(index);
         });
         

         div.append(img, typ, dis, price, btn);
         all_products.append(div);
     });
}
append();

// function remove(index){
//     console.log(index)
// }
function remove(index){
    let data = JSON.parse(localStorage.getItem("products")) || [];

    let newData =data.filter(function(el,i) {

            return i !== index;
        
    });

console.log(newData);
}
