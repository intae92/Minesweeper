var increase = (function () {
    // 카운트 상태를 유지하기 위한 자유 변수
    var counter = 0;
    console.log('local '+ counter)
    // 클로저를 반환
    return function () {
        console.log('inner '+ counter)
      return ++counter;
    };
  }());

  increase();
  increase();
  console.dir(increase())
  console.dir(increase)
  increase();
  increase();
  increase();
  increase();
  increase();
  increase();