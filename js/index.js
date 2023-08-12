// window.onload = showlivetime();
// 					function showlivetime(){
// 						let dateobject = new Date();
// 						let livetime = dateobject.toLocaleTimeString();
// 						let gettimebox = document.getElementsByClassName('timebox')[0];
// 						gettimebox.innerHTML = livetime;
// 						setInterval(showlivetime,1000);
// 					}
let login=document.querySelector(".login-btn")
let chat=document.getElementById("append-button")

login.addEventListener("click",()=>{
	console.timeLog("hello")
	window.location.href="./html/login.html"
})





// const urlParams = new URLSearchParams(window.location.search);
// const userId = urlParams.get('userId');
// console.log(userId);
// fetch(`http://localhost:7678/user/getuser/?id=${userId}`)
// .then((res)=>res.json())
// .then((data)=>{
// 	console.log(data)
// 	if(data.user){
// 		login.innerText=data.user.name
// 	}
// })


// chat.addEventListener("click",()=>{
// 	window.location.href=`http://localhost:7678/user/chat/?id=${userId}`
// })