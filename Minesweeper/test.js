function outerFunc(){
  var x = 10;//x를 자유변수
  var innerFunc = function(){ console.log(x);};
  return innerFunc;
}
var inner = outerFunc();
inner();
/* Closure
자신을 포함하고 있는 외부함수보다 내부함수가 더 오래 유지되는 경우,
외부 함수 밖에서 내부함수가 호출되더라도 외부함수의 지역 변수에 접근할 수 있는데
이러한 함수를 클로저라고 부른다
클로저는 함수와 그 함수가 선언됐을 때의 렉시컬 환경과의 조합이다.
즉, 클로저는 자신이 생성될 때의 환경을 기억하는 함수다.
클로저라는 이름은 자유변수에 함수가 닫혀있다라는 의미, 자유변수가 엮여있는 함수라는 뜻
*/
//클로저가 메모리 차원에서는 손해를 볼수 있지만 사용해야 하는 이유
//클로저 상태유지 - 현재 상태를 기억하고 변경된 최신 상태를 유지 하는것




// var increase = (function () {
//     // 카운트 상태를 유지하기 위한 자유 변수
//     var counter = 0;
//     console.log('local '+ counter)
//     // 클로저를 반환
//     return function () {
//         console.log('inner '+ counter)
//       return ++counter;
//     };
//   }());

//   increase();
//   increase();
//   console.dir(increase())
//   console.dir(increase)
//   increase();
//   increase();
//   increase();
//   increase();
//   increase();
//   increase();