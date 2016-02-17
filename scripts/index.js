window.onload=function(){
	var $=function(id){
		return document.getElementById(id);
	}
	 var text=$("fa"),anniu=$("anniu"),dakuai=$("dakuai"),zishu1=$("zishu1"),zishu2=$("zishu2")
	     kaiguan=false;
	text.onblur=function(){		        
	    if(!this.value){
	    this.value="请输入您的想法";

	    }
	    this.style.border="1px solid rgb(44, 192, 90)";
    }

	text.onfocus=function(){
	  if(this.value=="请输入您的想法"){
		this.value="";
	   }
    this.style.border="2px solid red"; 
	}
  
	
	var xiaokuai; 
     text.onkeyup=function(){    
           if(this.value==""){
           	anniu.style.background="rgb(189, 179, 186)";
           	anniu.removeAttribute("neng");
           	anniu.style.cursor="text";
           }else{
           		anniu.style.background="#FF4C4C";
           	anniu.setAttribute("neng","11");
           	anniu.style.cursor="pointer";
           }
           var zishu3=300-this.value.length;
              
             if(zishu3<0){
             	zishu2.innerHTML="已超出";
             	anniu.style.background="rgb(189, 179, 186)";
           	    anniu.removeAttribute("neng");
           	    anniu.style.cursor="text";
              }else{
              	zishu2.innerHTML="剩余可以打";
              }
             zishu1.innerHTML=Math.abs(zishu3);
          
     }
      anniu.onclick=function(){
      	if(anniu.getAttribute("neng")=="11"){
              xiaokuai=document.createElement("div");                          
              xiaokuai.setAttribute("class","xiaokuai");            
              xiaokuai.innerHTML='<div class="xiaoxiao"><img class="pic" src="./dd.jpg"></div><div class="kuai aa">'+text.value+'</div><div class="zan">&#xe600</div>';                                                         
             dakuai.insertBefore(xiaokuai,dakuai.firstElementChild);
             	anniu.style.background="rgb(189, 179, 186)";
           	anniu.removeAttribute("neng");
           	anniu.style.cursor="text";
           	text.value="";
           	zishu1.innerHTML=300;

         }   
      }
        

	

	dakuai.onclick=function(e){
		var ta=e.target;
		if(ta.getAttribute("class")!="zan"){
			return ;
		}

		if(!ta.hasAttribute("data")){
	      var span=document.createElement("span");
             span.setAttribute("class","da");
	       span.innerHTML="1";
	       ta.appendChild(span);
            ta.setAttribute("data","1");
          }else{
	        var data=Number(ta.getAttribute("data"));
	        ta.innerHTML='&#xe600<span class="da">'+(data+1)+'<span>';
	        ta.setAttribute("data",data+1);
	      }

	}
	dakuai.onmousedown=function(e){
		e.preventDefault();
	}
}