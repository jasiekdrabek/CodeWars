// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function outOfRange(x){
    if (x > 255){
      x=255;
    }
    if (x<0){
      x =0;
    }
    return x;
  }
  function rgb(r, g, b){
    r = outOfRange(r);
    g = outOfRange(g);
    b = outOfRange(b);
    let res ="";
    let resu="";
    resu = r.toString(16);
    if (resu.length == 1){
      res += '0' + resu;
    }else{
      res += resu;
    }
    resu = g.toString(16);
      if (resu.length == 1){
      res += '0' + resu;
    }else{
      res += resu;
    }
    resu = b.toString(16);
      if (resu.length == 1){
      res += '0' + resu;
    }else{
      res += resu;
    }
    res = res.toUpperCase()
    console.log(res);
    return res;
      
    }
  