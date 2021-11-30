const LagInt = (x,y,xp,n) => {
var yp=0;

//alert(n);

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
$('#btnAdd').click(()=>{
  
 var iX = $('#txtX');
 var iY = $('#txtY');
var tblData =$('#tblData tbody'); 
 if(iX.val()!="" && iY!="")
   {
     tblData.append('<tr><td class="dX">'+iX.val()+'</td><td class="dY">'+iY.val()+'</td></tr>');
     
     iX.val('');
     iY.val('');
   }
  else{
   alert("Both X and Y id required!");
   }
  });
  
$('#btnGo').click(()=>{
var x=[];
var y=[];
var ip = $('#txtIP').val();
var tblDataTr =$('#tblData tbody tr');
  
if(tblDataTr.length<=2) alert("Invalid data!"); return;
 
$.each(tblDataTr, ()=>{
  
  
  });
  
  
});

});
