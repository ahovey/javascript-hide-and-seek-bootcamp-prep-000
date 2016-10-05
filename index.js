function getFirstSelector(selector){
  var selector = document.querySelector(selector)
  return selector
}

function nestedTarget(){
      return document.querySelector("#nested, .target")
}

function increaseRankBy(n){
    const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
    for (let i = 0, l = lis.length; i < l; i++) {
  lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
}
}

function deepestChild(){
  var x = document.getElementById('grand-node')
  var y = x.querySelectorAll('div')
  for(var i = 0; i < y.length; i++){
    return y[0]
  }
}
