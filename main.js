window.onload = init;

function init() {
  var pointToElements = document.getElementsByClassName('point-to');
  for (let elm of pointToElements) {
    elm.onclick = function() {
      let target = document.getElementById(this.dataset.target);
      var currentActivePage = document.getElementsByClassName('active');
      currentActivePage[0].className = (() => {
        let tmpClassList = [];
        for (let className of currentActivePage[0].classList) {
          if (className !== 'active') {
            tmpClassList.push(className);
          }
        }
        return tmpClassList.join(' ');
      })();
      target.className = (() => {
        let tmpClassList = [];
        target.classList.forEach((item) => {
          if (item !== 'active') {
            tmpClassList.push(item);
          }
        })
        tmpClassList.push('active');
        return tmpClassList.join(' ');
      })();
    }
  }
}
