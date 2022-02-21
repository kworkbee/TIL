<template><h1 id="oop" tabindex="-1"><a class="header-anchor" href="#oop" aria-hidden="true">#</a> OOP</h1>
<p>Posted at 2021-06-30</p>
<blockquote>
<p>Object-oriented Programming</p>
</blockquote>
<h2 id="절차지향-vs-객체지향" tabindex="-1"><a class="header-anchor" href="#절차지향-vs-객체지향" aria-hidden="true">#</a> 절차지향 vs 객체지향</h2>
<h3 id="절차지향" tabindex="-1"><a class="header-anchor" href="#절차지향" aria-hidden="true">#</a> 절차지향</h3>
<ul>
<li>데이터와 프로시저를 별도의 모듈에 위치시킨다.</li>
<li>직관적으로 데이터의 흐름을 파악할 수 있다.</li>
<li>중간에 데이터 갯수나 타입이 변경되면 전체 흐름에서 변경이 일어나야 한다.</li>
<li>절차지향은 요구사항이 변경되었을때, 대응하는 비용이 크다.</li>
</ul>
<h3 id="객체지향" tabindex="-1"><a class="header-anchor" href="#객체지향" aria-hidden="true">#</a> 객체지향</h3>
<ul>
<li>데이터와 프로시저를 객체에 모은다.</li>
<li>객체에 포함된 데이터는 해당 객체의 프로시저만 변경할 수 있다.</li>
<li>서로 다른 객체는 데이터를 변경할 수 없어야 한다.</li>
<li>객체 내부 변화를 예측하기 쉬우므로 변화에 따른 개발 비용이 적게 든다.</li>
</ul>
<p>--&gt; <code>캡슐화</code>, <code>상속</code>, <code>다형성</code>, <code>추상화</code></p>
<blockquote>
<p>객체지향의 핵심은 캡슐화를 이용해 의존성을 적절히 관리함으로써 객체 간의 결합도를 낮추는 것. 이를 통해 소프트웨어를 구성하는 모든 객체들이 자율적으로 행동하는 설계를 목표로 한다.</p>
</blockquote>
<h2 id="객체" tabindex="-1"><a class="header-anchor" href="#객체" aria-hidden="true">#</a> 객체</h2>
<ul>
<li>핵심 : 기능 제공
<ul>
<li>제공하는 <strong>기능</strong>으로 객체를 정의 (행위 / 책임 중심)</li>
<li>객체가 가지고 있는 데이터와는 무관</li>
</ul>
</li>
</ul>
<h3 id="인터페이스" tabindex="-1"><a class="header-anchor" href="#인터페이스" aria-hidden="true">#</a> 인터페이스</h3>
<ul>
<li>객체가 제공하는 기능 명세</li>
<li>메서드 이름, 파라미터, 리턴 타입</li>
<li>클래스가 구현</li>
<li>클래스를 실제 메모리에 올리면 인스턴스</li>
</ul>
<h3 id="메시지" tabindex="-1"><a class="header-anchor" href="#메시지" aria-hidden="true">#</a> 메시지</h3>
<ul>
<li>메시지 전달은 객체에 기능 실행을 요청하는 것</li>
<li>일반적인 언어에서 메서드 호출로 구현</li>
</ul>
<h2 id="역할과-책임-그리고-협력" tabindex="-1"><a class="header-anchor" href="#역할과-책임-그리고-협력" aria-hidden="true">#</a> 역할과 책임, 그리고 협력</h2>
<h3 id="협력" tabindex="-1"><a class="header-anchor" href="#협력" aria-hidden="true">#</a> 협력</h3>
<ul>
<li>어떤 객체가 다른 객체에 무언가 요청</li>
<li>한 객체는 어떤 것이 필요할 때 다른 객체에게 전적으로 위임하거나 서로 협력한다.</li>
<li>즉, 두 객체가 상호작용을 통해 더 큰 책임을 수행하는 것이다.</li>
<li><strong>협력이 설계를 위한 문맥을 결정</strong></li>
<li><em>상태</em>는 객체가 행동하는 데 필요한 <strong>정보</strong>에 의해 결정되고, <em>행동</em>은 협력 안에서 <strong>메시지</strong>로 결정된다.</li>
<li>따라서 협력은 객체 설계에 필요한 문맥(context) 제공</li>
</ul>
<h3 id="책임" tabindex="-1"><a class="header-anchor" href="#책임" aria-hidden="true">#</a> 책임</h3>
<ul>
<li>객체에 의해 정의되는 응집도 있는 행위 집합, 객체가 유지해야 하는 정보와 수행할 수 있는 행동에 대해 개략적으로 서술한 문장</li>
<li>책임은 메시지보다 추상적이고 개념적으로도 더 크다.</li>
<li>객체 지향 설계에서 책임을 얼마나 적절한 객체에게 할당하느냐가 설계의 전체적인 품질을 결정한다.</li>
</ul>
<h4 id="책임-주도-설계" tabindex="-1"><a class="header-anchor" href="#책임-주도-설계" aria-hidden="true">#</a> 책임 주도 설계</h4>
<ol>
<li>시스템이 사용자에게 제공해야 하는 기능인 시스템 책임 파악</li>
<li>시스템이 책임을 더 작은 책임으로 분할</li>
<li>분할된 책임을 수행할 수 있는 적절한 객체 또는 역할을 찾아 책임을 할당</li>
<li>객체가 책임을 수행하는 도중 다른 객체의 도움이 필요한 경우 이를 책임질 적절한 객체 또는 역할 파악</li>
<li>해당 객체 또는 역할에 책임 할당으로 두 객체가 협력하도록 함</li>
</ol>
<h4 id="메시지가-객체를-결정" tabindex="-1"><a class="header-anchor" href="#메시지가-객체를-결정" aria-hidden="true">#</a> 메시지가 객체를 결정</h4>
<ul>
<li>객체가 최소한의 인터페이스를 가질 수 있게 된다.</li>
<li>객체는 충분히 추상적인 인터페이스를 가질 수 있게 된다.</li>
<li>객체가 충분히 추상적이면서 미니멀리즘을 따르는 인터페이스를 가지게 하고 싶다면 메시지가 객체를 선택하도록 한다.</li>
</ul>
<h3 id="역할" tabindex="-1"><a class="header-anchor" href="#역할" aria-hidden="true">#</a> 역할</h3>
<ul>
<li>객체가 어떤 특정한 협력 안에서 수행하는 책임의 집합</li>
<li>협력이라는 문맥 안에서 필요한 책임을 추렸다면, 해당 책임을 가지고 있어야 할 역할이 무엇인지 개념을 뽑아내고 그 다음에 역할에 맞는 이름을 부여하여 클래스로 만든다.</li>
</ul>
<h4 id="유연하고-재사용-가능한-협력" tabindex="-1"><a class="header-anchor" href="#유연하고-재사용-가능한-협력" aria-hidden="true">#</a> 유연하고 재사용 가능한 협력</h4>
<ul>
<li>역할을 통해 유연하고 <strong>재사용 가능한 협력</strong>을 얻을 수 있다.</li>
<li>역할에 집중하면 추상적인 네이밍을 가져도 문맥은 유지가 되고, 비슷한 구현의 다른 객체를 추가하는데 큰 비용이 들지 않는다.</li>
<li>객체에게 중요한 것이 행동임은 변함이 없다. 역할은 동일한 협력을 <strong>수행하는</strong> 객체들을 추상화할 수 있다.</li>
</ul>
<blockquote>
<p>객체지향 프로그래밍에서는 객체는 하나의 <em>책임</em>을 가진 <em>역할</em>로서 <em>협력</em>에 참여하여 소프트웨어의 목적을 달성
협력 &gt; 책임 &gt; 역할 &gt; 객체 &gt; 클래스</p>
</blockquote>
<h2 id="결합도와-응집도" tabindex="-1"><a class="header-anchor" href="#결합도와-응집도" aria-hidden="true">#</a> 결합도와 응집도</h2>
<h3 id="결합도" tabindex="-1"><a class="header-anchor" href="#결합도" aria-hidden="true">#</a> 결합도</h3>
<ul>
<li>결합도는 <em>의존성의 정도</em>를 나타내며 다른 모듈에 얼마나 많은 지식을 갖고 있는지를 나타낸다.</li>
<li>어떤 모듈이 다른 모듈에 대해 <em>자세한 부분</em>을 알고 있다면 두 모듈은 <em>높은 결합도</em>를 가진다.</li>
<li>어떤 모듈이 다른 모듈에 대해 <em>필요한 지식</em>만을 알고 있다면 두 모듈은 <em>낮은 결합도</em>를 가진다.</li>
<li>결합도는 <code>협력에 필요한 적절한 수준의 관계만을 유지</code>하는 것이 중요</li>
<li><strong>한 모듈이 변경되기 위해 다른 모듈의 변경을 요구하는 정도로 측정</strong>
<ul>
<li>내부 구현을 변경했을 때 다른 모듈에 영향을 미치는 경우 <code>높은 결합도</code>를 가짐</li>
<li><strong>Public Interface</strong>를 수정했을 때만 다른 모듈에 영향을 미치는 경우 <code>낮은 결합도</code>를 가짐</li>
<li>따라서 구현이 아닌 인터페이스에 의존하도록 코드를 작성해야 낮은 결합도를 얻을 수 있다.</li>
</ul>
</li>
</ul>
<h3 id="응집도" tabindex="-1"><a class="header-anchor" href="#응집도" aria-hidden="true">#</a> 응집도</h3>
<ul>
<li>모듈에 포함된 내부 요소들이 연관돼 있는 정도</li>
<li>모듈 내 요소들이 하나의 목적을 위해 긴밀하게 협력한다면 그 모듈은 높은 응집도를 가짐</li>
<li>모듈 내의 요소들이 서로 다른 목적을 추구한다면 그 모듈은 낮은 응집도를 가짐</li>
<li>객체지향 관점에서의 응집도는 객체/클래스에 얼마나 <code>관련이 높은 책임들을 할당했는지</code>를 나타낸다.</li>
</ul>
<h2 id="좋은-설계" tabindex="-1"><a class="header-anchor" href="#좋은-설계" aria-hidden="true">#</a> 좋은 설계</h2>
<ul>
<li>요구되는 기능의 온전한 수행을 완성시킴은 물론, 추가되는 변경에도 유연하게 대응 가능한 설계</li>
<li>객체지향 프로그래밍은 <em>객체 사이 의존성</em>을 효율적으로 통제할 수 있는 다양한 방법을 제공함은 물론 좋은 설계를 도와주는 하나의 좋은 도구</li>
<li>올바른 객체에 올바른 책임을 할당하면서 <strong>낮은 결합도와 높은 응집도</strong>를 가진 구조를 만드는 행위</li>
</ul>
</template>
