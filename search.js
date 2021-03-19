window.onload = function(){
  var But = document.getElementById("searchbutton");
  var oDiv = document.getElementById("searchdiv");
  But.onclick = function (e) {
    console.log(1)         //点击出现
    oDiv.style.display = "block";
    e.stopPropagation();         //阻止冒泡
  }
  // 点击空白消失

  $(document).bind('click', function(e) {  
      var e = e || window.event; //浏览器兼容性   
      var elem = e.target || e.srcElement;  
      while (elem) { //循环判断至跟节点，防止点击的是div子元素   
          if (elem.id && (elem.id == 'search-container')) {  
              return;  
          }  
          elem = elem.parentNode;  
      }
      // var oDiv = document.getElementById("searchdiv");  
      $("#searchdiv").css('display', 'none'); //点击的不是div或其子元素   
  });  
        

//   document.onclick = function (e) {
//     oDiv.style.display = "none";
// }

}
