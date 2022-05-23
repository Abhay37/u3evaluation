//store the products array in localstorage as "products"
var form=document.querySelector("#products")
form.addEventListener("submit",addproduct)
var arr=[];
function addproduct(){
   event.preventDefault()
    var obj={
        
        Type:products.type.value,
        Disc:products.desc.value,
        Price:products.price.value,
        Url:products.image.value,
    }
   
    arr.push(obj)
    console.log(arr)
    localStorage.setItem("product",JSON.stringify(arr));
    


}



 