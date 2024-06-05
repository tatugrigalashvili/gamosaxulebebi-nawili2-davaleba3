var pattern = /[7|8]/;

var str = "78hello world";

var result = str.match(pattern);

if (result !== null) {
     document.write("ნამდვილად წერია");
} 


document.write("<br>")



var pattern = /\s/;

var str = "hello world" ;

var result = str.match(pattern);

if (result !== null) {
    document.write("ცარიელი ადგილი არსებობს");
}
