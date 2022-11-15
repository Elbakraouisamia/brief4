document.getElementById('reverse').onclick=function(){
    let inp="";
      let caros=document.getElementById('enter').value ;
      if(caros<=10){
        for (let i = 0; i <caros;i++) {
          inp=inp+"<input id=en"+i+">"
          document.getElementById('pr').innerHTML=inp
        }
      }
      else{
        document.getElementById('pr').innerHTML="enter valeur entre 1 et 10"
      }
    }
    document.getElementById('rechr').onclick=function(){
      let objt=document.getElementById('obj').value;
      let rpe="";
      for(let j=0 ; j<=10 ; j++){
        rpe=rpe+" "+document.getElementById("en"+j).value
        if(rpe.includes(objt)){
        document.getElementById('ed').innerHTML=" valeur à rechercher existe dans table "
        }
        else {
          document.getElementById('ed').innerHTML=" valeur à rechercher ne existe pas  "
        }
      }
  }
  