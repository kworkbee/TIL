# `equals` And `hashCode`

---

## `equals`

- 레퍼런스의 동일 여부 확인 (동일성 비교)

```java
public boolean equals(Object obj) {
    return (this == obj);
}
```

- 오직 자기 자신과만 같다고 인식

### 재정의

- 논리적 동치성 비교가 필요한 경우

### 재정의 불필요

- 인스턴스가 둘 이상 만들어지지 않음을 보장하는 클래스 (e.g. enum)

### 메서드 규약

- 반사성
```java
x.equals(x); # true
```

- 대칭성
```java
# if
x.equals(y);
# is true then
y.equals(x); # is true
```

- 추이성
```java
# if
x.equals(y);
# is true and
y.equals(z);
# is true then
x.equals(z); # is true
```

- 일관성
```java
# repeated
x.equals(y); # calls are the same
```

- not null
```java
x.equals(null); # false
```

::: info
#### Liskov 치환 원칙
- 어떤 타입에 있어 중요한 속성이면 그 하위 타입에서도 중요
- 그 타입의 모든 메서드가 하위 타입에도 똑같이 잘 작동해야
:::

### equals 재정의할 때 Key Point
- **`hashCode` 메서드도 반드시 재정의**
- `instanceof` operator로 올바른 타입인지 확인
- `==` operator로 자기 자신의 참조인지 확인
- 입력 객체의 타입 형변환이 유효한지 확인
- 입력 객체와 자기 자신의 대응되는 핵심 필드가 모두 일치하는지 확인

## `hashCode`

- 객체를 식별하는 하나의 값

```java
# java.util.Arrays
public static int hashCode(Object[] a) {
    if (a == null)
        return 0;
    
    int result = 1;

    for (Object element : a)
        result = 31 * result + (element == null ? 0 : element.hashCode());

    return result;
}

# java.lang.String
public int hashCode() {
    int h = hash;
    if (h == 0 && !hashIsZero) {
        h = isLatin1() ? StringLatin1.hashCode(value)
                       : StringUTF16.hashCode(value);

        if (h == 0) {
            hashIsZero = true;
        } else {
            hash = h;
        }
    }
    return h;
}
```

### 메서드 규악
- `equals` 비교에 사용되는 정보의 변경이 없다면 애플리케이션이 실행되는 동안 `hashCode`는 반복 호출해도 항상 동일 값이 반환된다.
- `equals` 비교 결과로 두 객체가 다르다는 결과가 나와도 `hashCode`가 동일할 수 있다. (Collision)
- `equals` 비교 결과로 두 객체가 같다는 결과가 나오면 `hashCode` 값은 항상 동일하다.

::: warning
#### equals 재정의할 때 hashCode를 재정의하지 않으면?
- 같은 값을 가진 객체가 서로 다른 해시값을 가지게 된다.
:::

### 31?

- 소수이면서 홀수
- 만약 곱하는 값이 짝수라면 그 결과가 Overflow되면서 정보 일부가 사라지는 결과가 발생할 수 있다.
  - Bit Shift와 동일하기 때문
  - `31 * i = (i << 5) - i`
- See https://stackoverflow.com/questions/299304/why-does-javas-hashcode-in-string-use-31-as-a-multiplier


### HashTable

- Key - Value pair로 데이터를 저장하며, 이 때 hash function을 사용해 key를 기준으로 고유한 식별값 (해시)를 만든다. 이 해시 값을 버킷에 저;장한다.
- 테이블 크기가 한정적이므로 서로 다른 객체라도 동일 해시값을 가질 수 있다. (Hash Collision) 이 경우 버킷에 LinkedList 형태로 객체를 추가한다.

```java
# java.util.HashTable
public synchronized int hashCode() {
    int h = 0;
    if (count == 0 || loadFactor < 0)
        return h;

    loadFactor = -loadFactor;
    Entry<?,?>[] tab = table;
    for (Entry<?,?> entry : tab) {
        while (entry != null) {
            h += entry.hashCode();
            entry = entry.next;
        }
    }

    loadFactor = -loadFactor;

    return h;
}

public synchronized V get(Object key) {
    Entry<?,?> tab[] = table;
    int hash = key.hashCode();
    int index = (hash & 0x7FFFFFFF) % tab.length;
    for (Entry<?,?> e = tab[index] ; e != null ; e = e.next) {
        if ((e.hash == hash) && e.key.equals(key)) {
            return (V)e.value;
        }
    }
    return null;
}

public synchronized V put(K key, V value) {
    // Make sure the value is not null
    if (value == null) {
        throw new NullPointerException();
    }

    // Makes sure the key is not already in the hashtable.
    Entry<?,?> tab[] = table;
    int hash = key.hashCode();
    int index = (hash & 0x7FFFFFFF) % tab.length;
    @SuppressWarnings("unchecked")
    Entry<K,V> entry = (Entry<K,V>)tab[index];
    for(; entry != null ; entry = entry.next) {
        if ((entry.hash == hash) && entry.key.equals(key)) {
            V old = entry.value;
            entry.value = value;
            return old;
        }
    }

    addEntry(hash, key, value, index);
    return null;
}
```

::: warning
#### equals 재정의할 때 hashCode를 재정의하지 않으면? - 2
- `hashCode`를 재정의하지 않으면 같은 VO라도 hash 값이 다르게 도출될 수 있으므로 HashTable에서 해당 객체가 저장된 버킷을 찾을 수 없다.
- 반대로 `equals`를 재정의하지 않으면 `hashCode`로 객체가 저장된 버킷을 찾을 수 있지만 논리적 동치성 비교가 안되기 때문에 null이 리턴된다.
:::
