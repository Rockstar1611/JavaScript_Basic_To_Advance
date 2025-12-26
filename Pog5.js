/* Browser Control */
//Log
console.log("Hello,World");
//error
console.error("This is an error Message.");
//warning
console.warn("This is a warn Messagae");
//information
console.info('jhyhbuig#@$%^&*()(*&^%$# Color Message.!','color:blue; font-size:18px; font-weight:bold;');
//table
console.table([{Name:"Ram",Age:23},{Name:"Ravi",Age:21},{Name:"Bangaram",Age:20}]);
//time
console.time('timer1');
function loops(){
  for(let i=0;i<=10000;i++)
  {

  }
}
loops()
console.timeEnd('timer1');
//assert
console.assert(5>10,"This is a Faild message.!");
//group 
console.group('User Information');
console.log('Name : Ritik');
console.log('Age: 30');
console.groupEnd();
//count
console.count("CountLablel");
console.count("CountLablel");
console.count("CountLablel");
console.count("CountLablel");
console.count("CountLablel");
//trace
function a(){
  b()
}
function b(){
  c()
}
function c(){
  console.trace()
}
a()