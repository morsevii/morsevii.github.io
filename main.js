var LagInt = () => {

for(var i=1;i<=n;i++) 	{ 		
  var p=1;
  for(var j=1;j<=n;j++) {
    if(i!=j) {
      	p = p* (xp - x[j])/(x[i] - x[j]); 			 
    }
  } 		 

  yp = yp + p * y[i];
}

}

$(()=>{
$('#btnGo').click(()=>{
 alert(123)
});

});
