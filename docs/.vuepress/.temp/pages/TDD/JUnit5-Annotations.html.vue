<template><h1 id="junit5-annotations" tabindex="-1"><a class="header-anchor" href="#junit5-annotations" aria-hidden="true">#</a> JUnit5 Annotations</h1>
<p>Posted at 2022-01-24</p>
<hr>
<blockquote>
<p>JUnit5은 Java 8부터 지원한다.</p>
</blockquote>
<h2 id="annotations" tabindex="-1"><a class="header-anchor" href="#annotations" aria-hidden="true">#</a> Annotations</h2>
<ul>
<li>
<p><strong><code>@DisplayName</code></strong></p>
<ul>
<li>테스트 클래스 / 테스트 메서드에 이름 부여</li>
</ul>
</li>
<li>
<p><strong><code>@DisplayNameGeneration</code></strong></p>
<ul>
<li>클래스에 해당 어노테이션을 붙이면 <code>@Test</code> 메서드 이름에 <code>_</code>로 표시한 모든 부분을 공백 처리</li>
</ul>
</li>
<li>
<p><strong><code>@BeforeEach</code></strong></p>
<ul>
<li>각 테스트 메서드가 실행되기 전에 실행되어야 하는 메서드 명시</li>
<li><code>@Test</code>, <code>@RepeatedTest</code>, <code>@ParameterizedTest</code>, <code>@TestFactory</code></li>
<li><code>JUnit4</code>의 <code>@Before</code>와 같은 역할</li>
<li>테스트 전 Mock 데이터를 사전 준비하기 위해 사용</li>
</ul>
</li>
<li>
<p><strong><code>@AfterEach</code></strong></p>
<ul>
<li><code>@Test</code>, <code>@RepeatedTest</code>, <code>@ParameterizedTest</code>, <code>@TestFactory</code>가 붙은 테스트 메서드가 실행된 후 실행</li>
<li><code>JUnit4</code>의 <code>@After</code>와 같은 역할</li>
</ul>
</li>
<li>
<p><strong><code>@BeforeAll</code></strong></p>
<ul>
<li>테스트가 시작하기 전 딱 한 번만 실행</li>
<li><code>@BeforeEach</code>의 경우 각 테스트 메서드마다 실행</li>
</ul>
</li>
<li>
<p><strong><code>@AfterAll</code></strong></p>
<ul>
<li>테스트가 종료되기 전 딱 한 번만 실행</li>
<li><code>@AfterEach</code>의 경우 각 테스트 메서드마다 실행</li>
</ul>
</li>
<li>
<p><strong><code>@Nested</code></strong></p>
<ul>
<li>테스트 클래스 안에 Nested 테스트 클래스 작성에 사용, static이 아닌 중첩 클래스(Inner 클래스)여야 한다.</li>
<li>테스트 인스턴스 라이프사이클이 per-class로 설정되어 있지 않다면 <code>@BeforeAll</code>, <code>@AfterAll</code>이 동작하지 않음.</li>
</ul>
</li>
<li>
<p><strong><code>@Tag</code></strong></p>
<ul>
<li>테스트 필터링에 사용 (클래스 또는 메서드 레벨에서)</li>
</ul>
</li>
<li>
<p><strong><code>@Disabled</code></strong></p>
<ul>
<li>테스트 클래스 / 메서드 테스트 비활성화</li>
<li><code>JUnit4</code>에서의 <code>@Ignore</code>와 동일</li>
</ul>
</li>
<li>
<p><strong><code>@Timeout</code></strong></p>
<ul>
<li>주어진 시간 내 테스트가 끝나지 않으면 실패</li>
</ul>
</li>
<li>
<p><strong><code>@ExtendWith</code></strong></p>
<ul>
<li>Extension 등록</li>
<li>이 어노테이션은 상속된다.</li>
<li>확장 팩의 개념</li>
</ul>
</li>
<li>
<p><strong><code>@RegisterExtension</code></strong></p>
<ul>
<li>필드를 통해 Extension 등록. private이 아니라면 상속된다.</li>
</ul>
</li>
<li>
<p><strong><code>@TempDir</code></strong></p>
<ul>
<li>필드 주입이나 파라미터 주입을 통해 임시 디렉터리 제공에 사용</li>
</ul>
</li>
</ul>
</template>
