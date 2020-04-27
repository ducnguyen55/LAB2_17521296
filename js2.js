const deg=6;
const hr=document.querySelector("#hr");
const mn=document.querySelector("#mn");
const sc=document.querySelector("#sc");
const timeclock=document.querySelector("#timeclock");
const date=document.querySelector("#day");
const ngay=document.querySelector("#ngay");
const gio=document.querySelector("#gio");
const phut=document.querySelector("#phut");
const giay=document.querySelector("#giay");

setInterval(()=>
{
let day= new Date();
let eventday=new Date("January 1,2021 00:00:00");;

let hh= day.getHours() *30;
let mm= day.getMinutes() * deg;
let ss= day.getSeconds() * deg;

hr.style.transform = 'rotate('+ (hh + mm/12) + 'deg)';
mn.style.transform = 'rotate('+ mm + 'deg)';
sc.style.transform = 'rotate('+ ss + 'deg)';
timeclock.innerHTML= hh/30 + ":" + mm/6 + ":" + ss/6 + " AM";
date.innerHTML=day.getDate() + "/" +(day.getMonth()+1) + "/"+ day.getFullYear();

var currentTime=day.getTime();
var eventTime=eventday.getTime();
var Time=eventTime-currentTime;
let sec=Math.floor(Time/1000);
let min=Math.floor(sec/60);
let hours=Math.floor(min/60);
let days=Math.floor(hours/24);

sec%=60;
min%=60;
hours%=24;

sec = (sec<10) ? "0" + sec : sec;
min = (min<10) ? "0" + min : min;
hours = (hours<10) ? "0" + hours : hours;

ngay.innerHTML=days;
gio.innerHTML=hours;
phut.innerHTML=min;
giay.innerHTML=sec;
});
