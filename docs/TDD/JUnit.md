# JUnit

Posted at 2021-06-30

> 자바의 단위 테스트 작성을 위한 프레임워크

*Gradle 기준 설명*

## Check if Gradle set up

```cli
gradle -v
```

## Declaration

In `build.gradle`

```gradle
test {
    useJUnitPlatform()
}
```

## Assertj

Java 라이브러리로 테스트에 사용되는 assertions 작성에 도움을 준다. 테스트 코드 가독성을 높이고 사용하기 쉽게 디자인 되어 있다.

[Assertj](https://assertj.github.io/doc/)

In `build.gradle`,
```gradle
testImplementation("org.assertj:assertj-core:3.20.2")
```

## hamcrest

`JUnit`에 사용되는 matcher 라이브러리.

> * Matcher 라이브러리 : 필터 / 검색 등을 위한 값 비교 시에 좀 더 편리하게 사용하도록 도와주는 라이브러리

### packages

|패키지|설명|
|---|---|
|org.hamcrest.core|오브젝트, 값에 대한 기본적인 matcher들|
|org.hamcrest.beans|java bean과 그 값 비교에 사용되는 matcher|
|org.hamcrest.collection|배열과 컬렉션 matcher|
|org.hamcrest.number|수 비교 위한 matcher|
|org.hamcrest.object|오브젝트와 클래스 비교하는 matcher|
|org.hamcrest.test|문자열 비교|
|org.hamcrest.xml|XML 문서 비교|


## Creating Tests

```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

@Test
public void testCertainFunction() {
    assertEquals(625, Integer.sum(600, 25));
}
```

## Assertion

- `assertTrue(x)` : 값이 True인지 확인
- `assertFalse(y)` : 값이 False인지 확인
- `assertEquals(expect, actual)` : 두 객체의 값이 일치하면 통과
    - 실수의 가능성이 높기 때문에 `assertThat` 고려

- `assertArrayEquals(x, y)` : 두 배열이 일치함을 확인 
- `assertNull(o)` : 객체가 null인지 확인
- `assertNotNull(o)` : 객체가 null이 아닌지 확인
- `assertSame(ox, oy)` : ox, oy가 같은 객체를 참조하면 통과
- `assertNotSame(ox, oy)` : ox, oy가 같은 객체를 참조하지 않으면 통과
- `assertfail()` : 바로 실패 처리

- `assertThat(T actual, Matcher<? super T> matcher)` : actual이 matcher의 expected와 일치하는지 확인
    > `JUnit 4.4 ~ `

### Matchers

- `allOf`
    - 내부에 선언된 모든 matcher가 정상일 경우 통과
    ```java
    assertThat("kworkbee", allOf(startsWith("G1"), endsWith("Tommy")));
    ```

- `anyOf`
    - 내부에 선언된 matcher 중 하나 이상 정상일 경우 통과

- `both` `and`
    - matcher 각각이 정상일 경우 통과
    - `both(matcher).and(matcher2)`
    ```java
    assertThat("Tommy", both(containsString("o").and(containsString("m"))));
    ```

- `either` `or`
    - matcher 중 하나가 정상일 경우 통과
    - `either(matcher).or(matcher2)`

- `describedAs`
    - matcher 내부 메시지 변경 가능
    ```java
    assertThat(new BigDecimal("19970011", describedAs("Number you said is : %0", equalTo(varDecimal), varDecimal.toPlainString())));
    ```

- `everyItem`
    - 배열을 순회하며 matcher 실행
    ```java
    assertThat(Arrays.asList("ABBB", "BBAB"), everyItem(endsWith("B")));
    ```

- `is`
    - 1. 비교값의 일치 여부
    ```java
    assertThat("Dummy Text", is("Dummy Text"));
    ```

    - 2. 다른 matcher를 꾸미는 용도. matcher에 영향을 미치지 않음. 표현력을 위함
    ```java
    assertThat("Dummy Text", is(not("Dummy Text")));
    ```

- `isA`
    - 비교되는 값이 특정 클래스일 경우 통과
    - `is(instanceOf(ClassName.class))`와 동일
    ```java
    assertThat(electricCar, isA(Car.class));
    ```

- `anything`
    - 항상 true 반환

- `hasItem`
    - 배열에서 matcher가 통과하는 값이 하나 이상인지 확인
    ```java
    assertThat(Arrays.asList("A", "B", "C"), hasItem("B"));
    ```

- `hasItems`
    - 배열에서 matcher가 통과하는 값 모두 하나 이상 있는지 확인

- `equalTo`
    - 두 값의 일치 여부 확인. `is`와 동일

- `any`
    - 비교 값이 matcher 타입과 동일한지 확인
    - `instanceOf`와 달리 matcher 값은 비교 값의 타입의 자식과만 비교 가능

- `instanceOf`
    - 비교 값이 matcher 타입과 동일한지 확인
    - `any`와 달리 matcher 값은 비교 값과 연관 없어도 사용 가능

    ```java
    assertThat(new ElectricCar(), instanceOf(Bicycle.class));
    ```

- `not`
    - `is`와 동일하게 두 가지 경우로 사용
    - 값이 같지 않을 경우 정상

- `nullValue`
    - 비교 값이 null인 경우 정상

- `notNullValue`
    - 비교 값이 null이 아닐 경우 정상

- `sameInstance` / `theInstance`
    - 비교 matcher 값과 같은 인스턴스일 경우 정상
    ```java
    assertThat("Test", not(sameInstance("Not same instance")));
    ```

- `containsString`
    - 특정 문자열 확인

- `startsWith`
    - 특정 문자열로 시작하는지 확인

- `endsWith`
    - 특정 문자열로 종료하는지 확인

## References

- [JUnit5 Documentation](https://junit.org/junit5/docs/current/user-guide)