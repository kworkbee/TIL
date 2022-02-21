# Law of Demeter

Posted at 2022-02-21

---

::: tip Overview
다른 객체가 어떠한 자료를 갖고 있는지 속사정을 몰라야 한다.
객체에게 자료를 숨기는 대신, 함수를 공개하도록 한다.
디미터 법칙은 결합도와 관련된 것이며, 객체의 내부 구조가 외부로 노출되는 것에 관한 것이다.
:::

> 객체지향 프로그래밍에서 가장 중요한 것은 *"객체가 어떤 데이터를 가지고 있는가?"* 가 아니라, **"객체가 어떤 메세지를 주고 받는가?"** 이다.

## 디미터 법칙 위반 사례

```java
@Getter
public class User {
    private String email;
    private String name;
    private Address address;
}

@Getter
public class Address {
    private String region;
    private String details;
}
```

```java
@Service
public class NotificationService {
    public void sendMessageForSeoulUser(final User user) {
        if ("Seoul".equals(user.getAddress().getRegion())) {
            sendNotification(user);
        }
    }
}
```

::: danger Why does it matters?
**객체에게 메세지를 보내는 것이 아니라, 객체가 가지는 자료를 확인** 하고 있고, 다른 객체가 어떤 자료를 갖고 있는지 지나치게 잘 알기 때문
:::

## 위반 사례 교정

```java
public class Address {
    private String region;
    private String details;

    public boolean isSeoulRegion() {
        return "Seoul".equals(region);
    }
}

public class User {
    private String email;
    private String name;
    private Address address;

    public boolean isSeoulUser() {
        return address.isSeoulRegion();
    }
}

@Service
public class NotificationService {
    public void sendMessageForSeoulUser(final User user) {
        if (user.isSeoulUser()) {
            sendNotification(user);
        }
    }
}
```

객체에게 보내는 메세지를 구현하면 불필요한 `@Getter`를 지워줄 수 있고, 각 객체가 지니는 데이터를 지닌지 모른 채 메세지 전송이 가능하다.

## References

- [[OOP] 디미터의 법칙(Law of Demeter)](https://mangkyu.tistory.com/147)