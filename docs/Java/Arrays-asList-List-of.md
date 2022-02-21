# Arrays.asList vs. List.of

Posted at 2022-02-21

---

## 차이점

- **`List.of`** 는 `set`으로 값 변경이 불가능, 값을 변경하려 시도하면 컴파일 에러 발생

```java
List<Integer> asList = Arrays.asList(1, 2, 3);
List<Integer> listOf = List.of(1, 2, 3);

asList.set(0, 10);
listOf.set(0, 10); // UnsupportedOperationException
```

- **`List.of`** 는 `null`을 허용하지 않는다.
- **`List.of`** 는 `contains` 확인도 못한다.

```java
List<Integer> asList = Arrays.asList(1, 2, null);
List<Integer> listOf = List.of(1, 2, null); // NPE
```

- **`Arrays.asList`** 는 원본의 배열 변화에 반응한다.

```java
Integer[] arr = {1, 2, 3};

List<Integer> asList = Arrays.asList(arr);
List<Integer> listOf = List.of(arr);

arr[0] = 10;

System.out.println(asList); // [10, 2, 3]
System.out.println(listOf); // [1, 2, 3]
```

## References

- [[Java] Arrays.asList와 List.of의 차이점에 대해](https://bepoz-study-diary.tistory.com/349)
