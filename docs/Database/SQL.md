# SQL

Posted at 21-07-18

---

## Subqueries

### Scalar Subquery

- `SELECT` clause에서 사용하는 서브쿼리
- 결과가 `하나의 행`으로 구성

### Inline View

- `FROM` clause에서 사용하는 서브쿼리

### (Nested) Subquery

- `WHERE` clause에서 사용하는 서브쿼리
- 단일 / 복수 여부에 따라 단일행 / 복수행 서브쿼리로 명명

> 일반적으로 서브 쿼리보다 JOIN을 사용하는 것이 퍼포먼스가 더 나음

---

## JOIN

### Cartesian Product (Cross Join)

- `FROM` clause에 multi table이 존재하고, 이들 테이블 간의 JOIN 조건이 기술되지 않은 경우 테이블 간 모든 행이 무조건적으로 결합하여, 결과적으로 테이블에 존재하는 행 갯수를 곱한 만큼의 결과값이 반환되는 것을 일컫음

### Equi (Inner) Join

- 양쪽 테이블에서 조인 조건이 일치하는 행만 가져옴
--> `Equality Condition (=)` 에 의한 Join
- `ON` clause가 없으면 `CROSS` Join과 동일한 결과 출력

#### Natural Join

- 동일한 열이 있으면 자동 JOIN --> `ON` clause 생략 가능
- 다른 테이블에 동일한 열이 여러 개일 경우 원하는 JOIN이 불가능

### Non Equi Join

- 테이블의 어떤 Column도 Join할 테이블의 column에 일치하지 않을 때 사용
- Join 조건은 Equality 이외 연산자를 가짐
- BETWEEN, AND, IS NULL, IS NOT NULL, IN, NOT IN

### Outer Join

- 두 개 이상의 테이블에서 교집합과 조건을 만족하지 못한 특정시킨 Join 테이블의 행도 포함
- 조건을 만족하지 않는 행도 가져옴
- 외부 조인하려는 한쪽 column에 `(+)` 표기
- `LEFT`, `RIGHT`, `FULL`

### Self Join

- 자신의 테이블을 join
- 별칭을 사용

### Semi Join

- 서브쿼리를 사용해 서브쿼리에 존재하는 데이터만 메인쿼리에서 추출
- `IN`, `EXIST`를 사용한 조인
- `1:N`의 관계를 가진다

### Anti Join

- 서브쿼리의 테이블에는 없는 메인 쿼리 테이블의 데이터만 추출
- `NOT IN`, `NOT EXIST` 사용