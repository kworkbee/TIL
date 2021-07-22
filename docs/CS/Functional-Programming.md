# 함수형 프로그래밍

Posted at 21-07-20

## Overview

- `프로그래밍 패러다임`은 프로그래머에게 프로그래밍의 `관점`을 갖게 하고 코드를 어떻게 작성할 지 결정하는 역할 수행

- `명령형` (Imperative) 프로그래밍
    - 프로그래밍의 `상태`와 상태를 변경시키는 `구문`의 관점에서 연산을 설명
    - 알고리즘을 명시하고 목표는 명시하지 않음
    - 절차지향 프로그래밍
        - 수행되어야 할 *순차적* 처리 과정을 포함
    - 객체지향 프로그래밍
        - 객체들의 *집합*으로 프로그램의 *상호작용*을 표현

- `선언형` (Declarative) 프로그래밍
    - 어떤 방법으로 해야 하는지 (`How`)보다 무엇과 같은지 (`What`)을 설명
    - 알고리즘 명시하지 않고 목표만 명시
    - **함수형 프로그래밍**
        - 순수 함수를 조합하고 소프트웨어를 만드는 방식

## 주요 개념

- `First Object` (1급 객체)
    - 다음 조건을 만족하는 객체이다.
        - 변수나 데이터 구조 안에 담을 수 있다.
        - 파라미터로 전달할 수 있다.
        - 반환값으로 사용할 수 있다.
        - 할당에 사용된 이름과 관계 없이 고유한 구별이 가능하다.
        - 동적으로 프로퍼티 할당이 가능하다.

> 자바스크립트에서 함수는 객체이므로 `1급 함수`로 불린다.

- 고차 함수
    - 람다 계산법에서 만들어진 용어로, 아래 조건을 만족하는 함수이다.
        - 함수에 함수를 파라미터로 전달할 수 있다.
        - 함수의 반환값으로 함수를 사용할 수 있다.

> 고차 함수는 `1급 함수`의 Subset이다.

- 불변성 (Immutability)
    - 함수형 프로그래밍에서는 데이터가 변할 수 없다. (자바스크립트는 가능)
    - 데이터 변경이 필요한 경우, 원본 데이터 구조를 변경하지 않고 그 데이터 복사본을 만들어 일부를 변경하고, 이 복사본을 사용해 작업을 진행

```javascript
// Mutable
function rateMovie(movie, rating) {
    movie.rating = rating;
    return movie;
}

console.log(rateMovie(movie1, 5), rating); // 5
console.log(movie1.rating) // 5

// Immutable
function rateMovie(movie, rating) {
    return Object.assign({}, movie, { rating });
}

console.log(rateMovie(movie1, 5), rating); // 5
console.log(movie1.rating); // 0, Not changed

```

> `const`와는 구분되는 특성이다. `const`의 경우 `Object` 타입 데이터가 대입된 경우 변경 가능하다.

- 순수 함수
    - 함수형 프로그래밍에 필요한 개념으로 아래 조건을 만족한다.
        - 동일한 입력에는 항상 같은 값이 반환된다.
        - 함수의 실행이 프로그램 실행에 영향을 주어서는 안된다. (No Side effect, 함수 내부에서 인자 값을 바꾸거나 프로그램 상태를 변경하는 등)

- 합성 함수 (Function composition)
    - 새로운 함수를 만들거나 계산하기 위해 둘 이상의 함수를 조합

## 함수형 프로그래밍의 구현
- 함수형 프로그래밍은 `순수 함수`를 조합하고 `공유 상태`, `변경 가능한 데이터`, 그리고 `부작용`을 피해 소프트웨어를 만드는 프로세스이다.
- `Imperative`가 아닌 `Declarative`이다.
- 애플리케이션 `상태`는 `순수 함수`를 통해 전달된다.

## 특징

- 불변성 (Immutable)
    - 어떤 값의 상태를 변경하지 않는다 (변경은 부수 효과를 발생 - 함수형 프로그래밍에서는 이를 제한함)

- 참조 투명성 (Referential Transparency)
    - 프로그램 변경 없이 어떤 표현식을 값으로 대체 가능
    - e.g. `y = f(x)`일 때, f(x)는 y를 대체 가능
        ```javascript
        const name = 'G1';

        function printName() {
            console.log(`Name : ${name}`);
        }
        ```
        > `console.log()`, `name`이라는 외부 값을 참조하고 있어 참조에 투명하지 않음, `name`이 바뀌면 `printName()` 값도 자연스럽게 변경됨

        ```javascript
        function printName(name) {
            return `Name : $(name}`;
        }

        function main() {
            const message = printName('G1');
            console.log(message);
        }

        main();
        ```
        > 위의 코드로 변경하면 `printName`이 항상 일관적으로 반환하기 때문에 참조에 투명함.

- 1급 함수 (First-class Function)

- 게으른 평가 (Lazy Evaluation)
    - 값이 필요한 시점에 평가됨. 실제로 필요한 시점까지 실행하지 않아 시간이 오래 걸리는 작업도 쉽게 동작 가능
    ```javascript
    function* printValueLoop(val = 0) {
        yield val;
        yield* printValueLoop(val + 1);
    }

    const iterator = printValueLoop();
    console.log(iterator.next().value); // 0
    console.log(iterator.next().value); // 1
    console.log(iterator.next().value); // 2
    console.log(iterator.next().value); // 3
    console.log(iterator.next().value); // 4
    console.log(iterator.next().value); // 5
    console.log(iterator.next().value); // 6 ...
    ```

## 장점

- 순수한 영역과 Side Effect를 분리
    - 예측 가능하게 되어 버그 발생 확률 감소 가능

- 일급 함수 도입으로, 기능 추가 / 수정 시 관련 없는 모듈의 수정 필요 감소, 인터페이스 확장 용이
    - 클래스, 함수가 하나의 일만 하여 재사용성이 높아지고, 의존성 주입을 통한 테스트 용이