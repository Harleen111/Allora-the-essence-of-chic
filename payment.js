document.querySelector(".paynow").addEventListener("click", check);

function check() {
  var cardnum = document.getElementById("card-number").value;
  var expiry = document.getElementById("card-expiry").value;
  var cvv = document.getElementById("cvv").value;
  var upi = document.getElementById("upinum").value;
  if (cardnum.length !== 16) {
    alert("please fill 16 digit card number");
    return;
  }
  if (expiry.length !== 5) {
    alert("please fill correct expiry date");
    return;
  }
  if (cvv.length !== 3 || cvv === "") {
    alert("please fill correct cvv");
    return;
  }

  window.location.href = "otp.html";
}
document.querySelector(".paynow1").addEventListener("click", check1);

function check1() {
  var upi = document.getElementById("upinum").value;
  if (upi !== "8209633900@oksbi") {
    alert("please fill correct upi id");
    return;
  }

  window.location.href = "sign-in.html";
}
document.querySelector(".upi-way").addEventListener("click", showupi);

function showupi() {
  document.querySelector(".upi-way").classList.add("upy-way1");
  document.querySelector(".card1").classList.add("card11");
  document.querySelector(".card-way").classList.add("card-way1");
  document.querySelector(".card2").classList.add("card22");
}

document.querySelector(".card-way").addEventListener("click", showcard);

function showcard() {
  document.querySelector(".upi-way").classList.remove("upy-way1");
  document.querySelector(".card1").classList.remove("card11");
  document.querySelector(".card-way").classList.remove("card-way1");
  document.querySelector(".card2").classList.remove("card22");
}

document.querySelector(".img1").addEventListener("click", img1bor);

function img1bor() {
  document.querySelector(".img1").classList.add("img11");
  document.querySelector(".img2").classList.remove("img21");
  document.querySelector(".img3").classList.remove("img31");
  document.querySelector(".img4").classList.remove("img41");
}

document.querySelector(".img2").addEventListener("click", img2bor);

function img2bor() {
  document.querySelector(".img1").classList.remove("img11");
  document.querySelector(".img2").classList.add("img21");
  document.querySelector(".img3").classList.remove("img31");
  document.querySelector(".img4").classList.remove("img41");
}
document.querySelector(".img3").addEventListener("click", img3bor);

function img3bor() {
  document.querySelector(".img1").classList.remove("img11");
  document.querySelector(".img2").classList.remove("img21");
  document.querySelector(".img3").classList.add("img31");
  document.querySelector(".img4").classList.remove("img41");
}
document.querySelector(".img4").addEventListener("click", img4bor);

function img4bor() {
  document.querySelector(".img1").classList.remove("img11");
  document.querySelector(".img2").classList.remove("img21");
  document.querySelector(".img3").classList.remove("img31");
  document.querySelector(".img4").classList.add("img41");
}

document.querySelector("#singup").addEventListener("click", toggleStep);
document.querySelector("#addres_nav").addEventListener("click", toggleStep);
document.querySelector("#payment").addEventListener("click", toggleStep);

function toggleStep(event) {
  const target = event.target.closest('div');
  const steps = ['#singup', '#addres_nav', '#payment'];

  
  steps.forEach(step => {
    document.querySelector(step).classList.remove("active");
  });

  
  target.classList.add("active");

 
  const stepId = target.id;
  if (stepId === "singup") {
   
  } else if (stepId === "addres_nav") {
    
  } else if (stepId === "payment") {
    
  }
}
