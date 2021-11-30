const LagInt = (x,y,xp,n) => {
var yp=0;

alert(n);

for(var i=0;i<n;i++) 	{ 		
  var p=1;
  for(var j=0;j<n;j++) {
    if(i!=j) {
      	p = p* (xp - x[j])/(x[i] - x[j]); 			 
    }
  } 		 

  yp = yp + p * y[i];
}
return yp;
}

$(()=>{
$('#btnGo').click(()=>
 var iX = $('#txtX');
 var iY = $('#txtY');
var tblData =$('#tblData tbody'); 
 if(iX.val()!=""&&iY!="")
   {
     tbldata.append('<tr><td>'+iX.val()+'</td><td>'+iY.val()+'</td></tr>');
     
     iX.val();
     iY.val();
   }
  else{
   alert("Both X and Y id required!");
   }
  });
  
$('#btnGo').click(()=>{
var x=[5,7,11,13,17];
var y=[150,392,1452,2366,5202];
var ip = $('#txtIP').val();

 alert(LagInt(x,y,ip,5))
});

});
