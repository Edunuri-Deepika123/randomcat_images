let url="https://api.thecatapi.com/v1/images/search";

let btn=document.querySelector(".btn");
btn.addEventListener("click",function(){
        getimage();

});



async function getimage(){
  try{
    btn.innerText="Loading...";
    let res= await axios.get(url);
    let event= res.data[0].url;
    let img=document.querySelector("#images");
    img.setAttribute("src",event);
    img.style.display="block";
    btn.innerText="Click me!";

  }catch(error){
    console.log("error",error);
  }
  
}
