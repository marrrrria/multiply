module.exports = function multiply(first, second) {
  
  let answer=[];
  let numbers_f=[];
  let numbers_s=[];
  numbers_f=first.split('');
  numbers_s=second.split('');
  numbers_f.reverse();
  numbers_s.reverse();
  let multiple=[];
  for (i=0; i<numbers_f.length; i++) {
    for (j=0; j<numbers_s.length; j++) {
      multiple[i+j]= multiple[i+j]? multiple[i+j]+numbers_f[i]*numbers_s[j] : numbers_f[i]*numbers_s[j];
    }
  }

  for (i=0; i<multiple.length; i++) {
    if (multiple[i]>=10)
    {
      answer[i]=multiple[i]%10;
      multiple[i+1]= multiple[i+1] ? multiple[i+1] + Number.parseInt(multiple[i]/10) :Number.parseInt(multiple[i]/10);

    } 
    else {
        if (!answer[i]) {
          answer[i]=0;
          answer[i]=answer[i] + multiple[i];
        }
        else {
          answer[i]=answer[i] + multiple[i];
        }
     } 

  }
  let string=answer.reverse().join('');
  return string;

}
