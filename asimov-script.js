//comments system placeholder script. 


//We are effectively manipulating the DOM. 

   function substitute(){
   var myValue=document.getElementById('myNameBox').value; 
   var mySecondValue=document.getElementById('myCommentBox').value; 
   
     if(myValue.length == 0 || mySecondValue.length == 0){
      alert('please enter a real value into the text box!'); 
	  return; //no more code to exicute in the function so we use return
     }
     var myTitle=document.getElementById('printer'); 
	      var myTitle2=document.getElementById('printer2'); 
	 myTitle.innerHTML = myValue; 
	 
	 myTitle2.innerHTML = mySecondValue; 
	 
   };
   
   
  var printLaws=function(){
  
  //storing the desired content within variables start
  
   var lawsInfo1 = "<p> A robot may not injure a human being or, through inaction, allow a human being to come to harm.  </p>"; 
   var lawsInfo2 = "<p>  A robot must obey the orders given to it by human beings, except where such orders would conflict with the First Law.</p>"; 
   var lawsInfo3 = "<p>    A robot must protect its own existence as long as such protection does not conflict with the First or Second Laws.</p>"; 
 
   
  //storing the desired content within variables end
				 
				
 //printing out the desired content through DOM start
   document.getElementById('lawsPrint1').innerHTML=lawsInfo1;
   document.getElementById('lawsPrint2').innerHTML=lawsInfo2;
   document.getElementById('lawsPrint3').innerHTML=lawsInfo3;
   // document.getElementById('domImage1').src="gorilla.png";
	// document.getElementById('domImage3').src="robot.png";
//printing out the desired content through DOM end






   
				 
				 };
				 
				 
				 
	var canvExp = function(){		

//canvas

//var colorPick=Math.floor(Math.random()*100); 
//var my_gradient=ctx.createLinearGradient(colorPick,colorPick,colorPick,colorPick);

var spont = Math.floor(Math.random()*610); 
var c = document.getElementById('practise'); 
var ctx = c.getContext('2d');
ctx.fillStyle="#caff90"; 
for(var i=0; i<=10; i++){

ctx.fillRect(spont,spont,spont,spont);

}			

setTimeout(canvExp,20); // call canvExp() in 100 milla seconds.
				 
	}; 			 
	
	