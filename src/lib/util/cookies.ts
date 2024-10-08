export function delete_cookie( name: string, path: string, domain:string ) {
    if( get_cookie( name ) ) {
      document.cookie = name + "=" +
        ((path) ? ";path="+path:"")+
        ((domain)?";domain="+domain:"") +
        ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }
  }

  export function get_cookie(name: string) {
    return document.cookie.split(';').some(c => {
        return c.trim().startsWith(name + '=');
    });
}

export function setCookie(name:string,value:string,days:number) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}