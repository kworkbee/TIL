# OOP

Posted at 2021-06-30

> Object-oriented Programming

## 절차지향 vs 객체지향

### 절차지향

- 데이터와 프로시저를 별도의 모듈에 위치시킨다.
- 직관적으로 데이터의 흐름을 파악할 수 있다.
- 중간에 데이터 갯수나 타입이 변경되면 전체 흐름에서 변경이 일어나야 한다.
- 절차지향은 요구사항이 변경되었을때, 대응하는 비용이 크다.

### 객체지향

- 데이터와 프로시저를 객체에 모은다.
- 객체에 포함된 데이터는 해당 객체의 프로시저만 변경할 수 있다.
- 서로 다른 객체는 데이터를 변경할 수 없어야 한다.
- 객체 내부 변화를 예측하기 쉬우므로 변화에 따른 개발 비용이 적게 든다.

--> `캡슐화`, `상속`, `다형성`, `추상화`

> 객체지향의 핵심은 캡슐화를 이용해 의존성을 적절히 관리함으로써 객체 간의 결합도를 낮추는 것. 이를 통해 소프트웨어를 구성하는 모든 객체들이 자율적으로 행동하는 설계를 목표로 한다.

## 객체

- 핵심 : 기능 제공
    - 제공하는 **기능**으로 객체를 정의 (행위 / 책임 중심)
    - 객체가 가지고 있는 데이터와는 무관

### 인터페이스

- 객체가 제공하는 기능 명세
- 메서드 이름, 파라미터, 리턴 타입
- 클래스가 구현
- 클래스를 실제 메모리에 올리면 인스턴스

### 메시지

- 메시지 전달은 객체에 기능 실행을 요청하는 것
- 일반적인 언어에서 메서드 호출로 구현

## 역할과 책임, 그리고 협력

### 협력

- 어떤 객체가 다른 객체에 무언가 요청
- 한 객체는 어떤 것이 필요할 때 다른 객체에게 전적으로 위임하거나 서로 협력한다.
- 즉, 두 객체가 상호작용을 통해 더 큰 책임을 수행하는 것이다.
- **협력이 설계를 위한 문맥을 결정**
- *상태*는 객체가 행동하는 데 필요한 **정보**에 의해 결정되고, *행동*은 협력 안에서 **메시지**로 결정된다.
- 따라서 협력은 객체 설계에 필요한 문맥(context) 제공

### 책임

- 객체에 의해 정의되는 응집도 있는 행위 집합, 객체가 유지해야 하는 정보와 수행할 수 있는 행동에 대해 개략적으로 서술한 문장
- 책임은 메시지보다 추상적이고 개념적으로도 더 크다.
- 객체 지향 설계에서 책임을 얼마나 적절한 객체에게 할당하느냐가 설계의 전체적인 품질을 결정한다.

#### 책임 주도 설계

1. 시스템이 사용자에게 제공해야 하는 기능인 시스템 책임 파악
2. 시스템이 책임을 더 작은 책임으로 분할
3. 분할된 책임을 수행할 수 있는 적절한 객체 또는 역할을 찾아 책임을 할당
4. 객체가 책임을 수행하는 도중 다른 객체의 도움이 필요한 경우 이를 책임질 적절한 객체 또는 역할 파악
5. 해당 객체 또는 역할에 책임 할당으로 두 객체가 협력하도록 함

#### 메시지가 객체를 결정

- 객체가 최소한의 인터페이스를 가질 수 있게 된다.
- 객체는 충분히 추상적인 인터페이스를 가질 수 있게 된다.
- 객체가 충분히 추상적이면서 미니멀리즘을 따르는 인터페이스를 가지게 하고 싶다면 메시지가 객체를 선택하도록 한다.

### 역할

- 객체가 어떤 특정한 협력 안에서 수행하는 책임의 집합
- 협력이라는 문맥 안에서 필요한 책임을 추렸다면, 해당 책임을 가지고 있어야 할 역할이 무엇인지 개념을 뽑아내고 그 다음에 역할에 맞는 이름을 부여하여 클래스로 만든다.

#### 유연하고 재사용 가능한 협력

- 역할을 통해 유연하고 **재사용 가능한 협력**을 얻을 수 있다.
- 역할에 집중하면 추상적인 네이밍을 가져도 문맥은 유지가 되고, 비슷한 구현의 다른 객체를 추가하는데 큰 비용이 들지 않는다.
- 객체에게 중요한 것이 행동임은 변함이 없다. 역할은 동일한 협력을 **수행하는** 객체들을 추상화할 수 있다.

> 객체지향 프로그래밍에서는 객체는 하나의 *책임*을 가진 *역할*로서 *협력*에 참여하여 소프트웨어의 목적을 달성
> 협력 > 책임 > 역할 > 객체 > 클래스


## 결합도와 응집도

### 결합도

- 결합도는 *의존성의 정도*를 나타내며 다른 모듈에 얼마나 많은 지식을 갖고 있는지를 나타낸다.
- 어떤 모듈이 다른 모듈에 대해 *자세한 부분*을 알고 있다면 두 모듈은 *높은 결합도*를 가진다.
- 어떤 모듈이 다른 모듈에 대해 *필요한 지식*만을 알고 있다면 두 모듈은 *낮은 결합도*를 가진다.
- 결합도는 `협력에 필요한 적절한 수준의 관계만을 유지`하는 것이 중요
- **한 모듈이 변경되기 위해 다른 모듈의 변경을 요구하는 정도로 측정**
    - 내부 구현을 변경했을 때 다른 모듈에 영향을 미치는 경우 `높은 결합도`를 가짐
    - **Public Interface**를 수정했을 때만 다른 모듈에 영향을 미치는 경우 `낮은 결합도`를 가짐
    - 따라서 구현이 아닌 인터페이스에 의존하도록 코드를 작성해야 낮은 결합도를 얻을 수 있다.

### 응집도

- 모듈에 포함된 내부 요소들이 연관돼 있는 정도
- 모듈 내 요소들이 하나의 목적을 위해 긴밀하게 협력한다면 그 모듈은 높은 응집도를 가짐
- 모듈 내의 요소들이 서로 다른 목적을 추구한다면 그 모듈은 낮은 응집도를 가짐
- 객체지향 관점에서의 응집도는 객체/클래스에 얼마나 `관련이 높은 책임들을 할당했는지`를 나타낸다.

## 좋은 설계

- 요구되는 기능의 온전한 수행을 완성시킴은 물론, 추가되는 변경에도 유연하게 대응 가능한 설계
- 객체지향 프로그래밍은 *객체 사이 의존성*을 효율적으로 통제할 수 있는 다양한 방법을 제공함은 물론 좋은 설계를 도와주는 하나의 좋은 도구
- 올바른 객체에 올바른 책임을 할당하면서 **낮은 결합도와 높은 응집도**를 가진 구조를 만드는 행위