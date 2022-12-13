// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
    let res = "";
    console.log(url);
    if (url.startsWith("http://")){
      url = url.slice(7);
    }
    if (url.startsWith("https://")){
      url = url.slice(8);
    }
    console.log(url);
      if (url.startsWith("www.")){
      url = url.slice(4);
    }
    for (let i=0; i<url.length;i++){
        res += url[i];
      if (url[i] == "."){
        break;
      }
    }
    res = res.slice(0, -1);
    return res;
  }