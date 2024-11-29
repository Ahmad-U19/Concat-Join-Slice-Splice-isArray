var a=["Ahmad","Hassaan"];

document.write(a+"<br><br>");

var b=a.concat("Jamal","Wasay","Khalil","Umer");

document.write(b+"<br><br>");

var c=b.join(" / ");

document.write(c+"<br><br>");

//var e=["Yasir","Arfat","Minhas","Faisal","Akram"];

var d=b.slice(0,2);
var x=0;

document.write(d+"<br><br>");

b.splice(2,0,"Hakeem","Luqman");

document.write(b+"<br><br>");

if(Array.isArray(x)){
    document.write("This is an Array");
}else{
    document.write("This is not an array");
}