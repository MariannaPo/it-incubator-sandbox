function areYouPlayingBanjo(name) {
    let one = name[0];
   if(one === 'R'){
    let yes = (`${name}` +  " plays banjo");
     return yes;
   } else if(one === 'r'){
     let maybe = (`${name}` +  " plays banjo");
     return maybe;
   } else {
   let no = (`${name}` +  ' does not play banjo');
     return no;
   }
   }