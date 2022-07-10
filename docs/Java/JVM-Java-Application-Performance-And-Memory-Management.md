# Java Application Performance & Memory Management

---

> Summarized from [udemy lecture](https://www.udemy.com/course/java-application-performance-and-memory-management).

## Course Overview

- Aspects of two below:
  - Memory Constraints
  - Application Speed

## Just-in-time Comiler & Cache

- JIT Compiler
  - JVM은 bytecode를 interpret한다.
    - bytecode를 직접 실행해 native code 실행보다 느림
    - interpreter 자체가 compiler에 비해 느림
      - line by line으로 실행하기 때문에 전체를 보면서 최적화하기 어려움
  - **JVM은 실행환경을 프로파일링하면서 [자주 실행되고 복잡하며 시간이 많이 걸리는] 블록을 [bytecode -> native code]로 컴파일하며 최적화한다.** -- 성능 개선 도모
  - 프로파일링과 컴파일은 JVM의 별도 스레드를 통해 수행되므로 코드 실행 스레드에 영향을 주지 않음
  - JIT 컴파일러의 동작에 따라 성능 차이가 발생
    - 어떤 부분을 언제/어느 수준(Level)으로 컴파일하고 언제 caching 할지
      - 컴파일할 때 4 levels가 존재함 - JVM은 프로파일링을 통해 얻은 데이터를 기반으로 이 수준을 결정
  - Tuning the code cache size
    - Level 4로 컴파일되어 캐싱될 수 있는 요소가 많은 프로그램의 경우 caching되어 있는 code 블록이 full이며 실행 중일 수 있는데 이 때 더는 새로운 caching 후보가 있어도 cache하지 못하는 경우 발생
    - cache max size와 지금 사용 중인 size를 알 수 있으며 지금 사용되고 있는 size가 max에 근접하다면 cache size 증가를 고려해볼만함
    - cache size, 컴파일 발생 여부 등은 애플리케이션 실행 시 특정 flag 전달을 통해 확인할 수 있고 필요한 경우 외부 모니터링 툴과 연동 또한 가능함
    - **요약 (튜닝 요소)**
      - **자주 실행되는 threshold**
      - **컴파일에 사용되는 스레드 수**
      - **code cache를 위한 cache size**

## JVM Options

- Java command 실행과 함께 flag 지정을 통해 컴파일 옵션 부여 가능 (튜닝 가능한 지점)
- java -XX:+PrintFlagsFinal
  - java 실행 시 지정 가능한 flags 출력
- 성능에 영향을 줄 수 있는 요소
  - 컴파일 프로세스 실행에 사용되는 스레드 수
    - CICompilerCount
    - `jinfo -flag CICompilerCount [PID]` command 통해 CICompilerCount default 값을 확인
      - PID 확인 : `jps`
      - default value : 3
      - [-XX:CICompilerCount=N] flag 지정으로 실행되는 애플리케이션 컴파일용 스레드 수 지정 가능
  - threshold of native compile (동일 메서드가 몇 번 수행될 때 컴파일하는 것으로 판단할 것인가)
    - [-XX:CompileThreshold=N] flag 지정으로 실행되는 애플리케이션 임계값 지정 가능
      - default value = 10000
