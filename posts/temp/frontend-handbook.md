---
title: "프론트엔드 면접 핸드북"
summary: "글쓴이가 이해한대로 썼기 때문에 기재된 내용이 틀릴 수 있음"
date: "2023.10.24"
thumbnailUrl: "/static/images/blog/colors.png"
---

<div align="center">
	<img src="/static/images/blog/colors.png" width="300px" alt="아크릴 물감들" />
</div>

## HTML/CSS

<details>
<summary>DOCTYPE이란?</summary>

&nbsp;선언된 페이지의 HTML 버전이 무엇인지를 웹 브라우저에 알려주는 역할을 하는 선언문

</details>

<details>
<summary>시멘틱 태그란?</summary>

&nbsp;의미있는 태그. 브라우저와 개발자는 태그 안에 들어있는 내용을 유추해가며 작업할 수 있다.

</details>

<details>
<summary>section과 article의 차이</summary>

&nbsp;`section`은 비슷한 특성의 컨텐츠를 담는 구역을 설정할 때 사용하고, `article`은 독립적인 내용들을 담을 때 사용

</details>

<details>
<summary>script async, defer</summary>

- async
  - HTML 파싱과 병렬적으로 스크립트를 다운받고, 다운로드가 끝난 시점에 HTML 파싱을 멈추고 스크립트 실행
  - 스크립트 내에 DOM을 조작하는 코드가 있다면 위험할 수 있음
- defer
    - HTML 파싱과 병렬적으로 스크립트를 다운받고, HTML 파싱이 완료된 이후에 스크립트 실행
</details>

<details>
<summary>Position</summary>

- static
    - 기본값으로, 요소들이 겹치지 않고 상 -> 하로 배치
- relative
    - 원래 배치되어야 할 위치에서 지정한 값만큼 떨어진 곳에 요소를 배치
- absolute
    - 가장 가까운 상위 요소(relative)의 위치를 기준으로 지정한 값만큼 떨어진 곳에 요소를 배치
- fixed
    - 웹 브라우저 화면 전체를 기준으로 배치. 스크롤을 하더라도 위치가 고정됨
- sticky
    - 설정한 위치(예를 들어, top: 10px)에 다다르기 전에는 static처럼 위치하다가 다다르면 fixed처럼 고정됨
</details>

<details>
<summary>Display</summary>

요소를 어떻게 보여줄지 지정
- none
    - 요소를 렌더링하지 않도록 설정
    - `visibility: hidden`과 달리 영역을 차지하지 않음
- block
    - 말 그대로 블럭모양
    - 줄바꿈이 일어남
- inline
    - 줄 형태, 안의 내용이 가로로 붙어있음
- inline-block
    - 블럭모양인데 안의 내용이 가로로 붙어있음
</details>

<details>
<summary>Flex</summary>

요소의 크기가 불분명하거나 동적인 경우에도, 각 요소를 정렬할 수 있는 효율적인 방법을 제공
</details>

<details>
<summary>Grid</summary>

- 2차원(행렬)의 레이아웃 시스템을 제공
- Flex는 비교적 단순한 1차원 레이아웃을 위하며, 더 복잡한 레이아웃을 위해 Grid를 사용
</details>

<details>
<summary>Box model</summary>

- 모든 HTML 요소는 박스 모양으로 구성
- HTML 요소를 padding, border, margin, content로 구분
</details>

<details>
<summary>margin, padding</summary>

border 기준으로 `margin`은 바깥, `padding`은 안쪽 여백을 의미
</details>

<details>
<summary>reset.css, normalize.css</summary>

- reset.css
    - 브라우저별로 각각 태그에 대한 기본 스타일링이 다르기 때문에, 기본적인 것들을 초기화해 사용
- normalize.css
    - 기존에 있던 것들을 최대한 훼손시키지 않고 이용
</details>

<details>
<summary>sass, css module, css-in-js</summary>

- css module
    - 클래스명이 충돌하는 단점을 극복
    - 간결한 클래스명을 이용해서 컴포넌트 단위로 스타일을 적용할 때 좋음
- sass
    - 변수 mixin 등이 있어 재사용성을 높힐 수 있음
    - 별도의 빌드단계를 거쳐 css 파일로 변환
    - import문을 사용해 변수처럼 사용 가능
- css-in-js
    - 자바스크립트 내에서 관리하기 때문에 내부응집도가 올라감
    - 동적으로 css를 변경하기 쉬움
</details>

<details>
<summary>css를 head에 둬야하는 이유</summary>

&nbsp;페이지가 처음 로드되면, HTML과 CSS가 파싱되는데 HTML은 DOM을 만들고, CSS는 CSSOM을 만든다. 2가지 모두 웹사이트에서 시각적인 부분을 만드는데 필요하기 때문에 빨리 읽어야함
</details>

<details>
<summary>css 적용 우선순위</summary>

1. `!important``
2. inline css
3. id
4. class, 추상클래스
5. 태그
6. 상위요소에 지정된 css
</details>

## Javascript

<details>
<summary>Ajax(Asynchronous JavaScript and XML)</summary>

&nbsp;클라이언트와 서버가 XML 데이터를 주고 받는 기술.

&nbsp;기존에는 클라이언트에서 서버로 요청을 보내고 응답을 받으면 다시 화면을 갱신해야 했고, 이 과정에서 많은 리소스가 낭비되었다. 이 문제를 해결하기 위해 Ajax는 페이지에서 필요한 일부만 갱신할 수 있도록 XMLHttpRequest 객체를 서버로 요청한다. 이로 인해 자원과 시간을 많이 아낄 수 있다.
</details>

<details>
<summary>JS를 body 맨 밑에 둬야하는 이유</summary>

&nbsp;HTML과 CSS가 모두 동작한 다음에 불러오기 때문에 미완성된 화면이 오랫동안 지속되지 않고, DOM 파싱이 완료된 시점에 실행되기 때문에 따로 추가 설정을 할 필요가 없다.
</details>

<details>
<summary>var, let, const</summary>

- var
    - 재선언, 재할당 가능
    - 함수 스코프
- let
    - 재할당
    - 블록 스코프
- const
    - 블록 스코프
</details>

<details>
<summary>TDZ(Temporal Dead Zone)</summary>

&nbsp;호이스팅이 일어났을 때, let, const는 var처럼 자동으로 초기값을 할당하지 않는다. 그래서 선언 전에 사용하려고 하면 메모리에 해당 변수가 존재하지 않아 ReferenceError를 발생시킨다. 이처럼 변수가 선언되고 해당 변수에 값이 할당되기 전까지를 TDZ라고 한다.
</details>

<details>
<summary>이벤트 버블링, 캡처링, 위임</summary>

- 버블링
    - 이벤트가 상위의 화면 요소들로 전달되는 특성
    - 거품이 점점 커진다 생각..
- 캡처링
    - 이벤트 버블링과 반대 방향으로 진행되는 이벤트 전파 방식
    - `event.stopPropagation()`로 막을 수 있음
- 이벤트 위임
    - 하위 요소에 이벤트를 따로따로 붙이지 않고, 상위 요소에서 하위 요소의 이벤트들을 제어하는 방식
    - 캡처링 이용
</details>

<details>
<summary>스코프</summary>

&nbsp;변수에 접근할 수 있는 범위
</details>

<details>
<summary>클로저</summary>

- 외부 함수에 접근할 수 있는 내부 함수 혹은 이러한 원리를 일컫는 용어
- 렉시컬 스코프(함수를 어디에 선언하였는지에 따라 결정되는 스코프)에 대한 참조와 함께 묶인 함수의 조합
- 장점
    - 데이터 보존
    - 캡슐화
    - 모듈화에 유리
- 예제
    - `myFunc = makeFunc()` 여기서 myFunc에는 displayName 함수가 할당되는데 myFunc() 여기서 console.log가 정상적으로 찍힘 왜?
        ```javascript
        function makeFunc() {
            const name = "Mozilla";
            function displayName() {
                console.log(name);
            }
            return displayName;
        }

        const myFunc = makeFunc();
        myFunc();
        ```
    - `makeFunc()`이 실행될 때 `name` 변수가 있는 환경에 대한 참조를 유지하기 때문
</details>

<details>
<summary>이벤트 루프</summary>

&nbsp;자바스크립트는 싱글 스레드 기반 언어이다. 스레드가 하나라는 말은 곧, 동시에 하나의 작업만을 처리할 수 있다는 말이다. 하지만 실제로 자바스크립트가 사용되는 환경을 생각해보면 많은 작업이 동시에 처리되고 있는 걸 볼 수 있다. 어떻게 된 일일까...

1. 모든 비동기 API들은 작업이 완료되면 콜백 함수를 태스크큐에 추가
2. 이벤트 루프는 '현재 실행 중인 태스크가 없을 때'(주로 콜스택이 비워졌을 때) 태스크큐의 실행가능한 첫 번째 태스크를 꺼내와 콜스택으로 보낸다.
</details>

<details>
<summary>호이스팅</summary>

&nbsp;코드를 실행하기 전에 `var` 선언문과 `function` 선언문을 해당 스코프의 최상단으로 끌어올리는 것

&nbsp;함수 호이스팅이 발생하는 원인은 자바스크립트 변수 생성과 초기화가 분리되어 진행되기 때문
</details>

<details>
<summary>실행 컨텍스트</summary>

- 실행할 코드에 제공할 환경 정보들을 모아놓은 객체
- 자바스크립트는 동일한 환경에 있는 환경 정보들을 모든 실행 컨텍스트를 콜스택에 쌓아올린 후 실행하여 코드의 환경과 순서를 보장할 수 있게 됨

- 전역 컨텍스트 하나 생성 후, 함수 호출 시마다 컨텍스트가 생김
- 컨텍스트 생성 시, 컨텍스트 안에 변수객체, scope chain, this가 생성됨
- 컨텍스트 생성 후 함수가 실행되는데, 사용되는 변수들은 변수객체 안에서 값을 찾고, 없다면 스코프 체인을 따라 올라가며 찾음
- 함수 실행이 마무리되면 해당 컨텍스트는 사라짐
- 페이지가 종료되면 전역 컨텍스트가 사라짐(클로저 제외)
</details>

<details>
<summary>==과 ===의 차이</summary>

- ==는 변수의 값 비교
- ===는 변수의 유형을 고려해 비교
</details>

<details>
<summary>NaN과 NaN 비교</summary>

- NaN은 숫자가 아님을 나타냄 (Not a Number)
- 다른 NaN과 같지 않음
</details>

<details>
<summary>Promise</summary>

자바스크립트 비동기 처리에 사용되는 객체
- Pending(대기)
    - new Promise() 메서드를 호출하면 이 상태
- Fulfilled(이행)
    - resolve()를 실행하면 then을 이용해 처리 결과 값을 받을 수 있는 상태
- Rejected(실패)
    - reject()를 호출하면 실패 상태가 되고, catch로 에러를 받을 수 있는 상태
</details>

<details>
<summary>async-await</summary>

&nbsp;기존의 비동기 처리 방식인 콜백 함수와 Promise의 단점을 보완하고 개발자가 읽기 좋은 코드로 작성할 수 있게 도와줌
</details>

<details>
<summary>GC(Garbage Collection)</summary>

&nbsp;메모리 할당을 추적하고 할당된 메모리 블럭이 더이상 필요하지 않게 되었는지를 판단하여 메모리를 회수하는 것
</details>

<details>
<summary>GC의 순환참조 문제</summary>

- 레퍼런스 카운팅
    - 메모리 할당과 해제가 한 블럭 이내에서 이뤄질 수 없는 경우 사용
    - 동적으로 할당된 메모리를 참조하는 객체의 수
    - 레퍼런스 카운트는 처음 선언을 할 때 값이 1이 되고 카운트 값이 0이 되는 순간 메모리에서 제거됨
- 순환 참조 문제
    - 두 객체가 서로 참조하는 속성으로 생성되어 순환 구조를 생성한 경우, 스코프를 벗어나더라도 두 객체가 서로를 참조하므로 레퍼런스 카운트가 0이 되지 않음
    - 레퍼런스 카운팅으로 해결할 방법이 없음
    - 메모리 누수의 원인이 됨
- Mark & Sweep
    - 자바스크립트 엔진에서 이 알고리즘을 사용
    - 최적화 없이 구현 시, 전체 객체를 탐색하므로 엔진에 영향을 미침
    - 시작하는 노드를 루트라고 하고 사용되는 메모리 공간과 출처를 연결, 루트가 참조하고 있는 모든 객체를 방문해 마크하고, 마크되지 않은 모든 객체를 메모리에서 삭제
</details>

<details>
<summary>this</summary>

- 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조변수
- 함수를 호출한 객체를 의미
- this는 어떤 위치에 있느냐, 어디서 호출하느냐, 어떤 함수에 있느냐에 따라 참조값이 달라지는 특성이 있어 사용 시 주의해야함
    - 일반 함수로 호출할 경우, 글로벌 객체(window)
    - 메서드로 호출할 경우 이를 호출한 객체
    - call, apply, bind 사용 시, 메서드에 첫 번째 인수로 전달하는 객체
- 바인딩이란?
    - 식별자와 값을 연결하는 과정
    - 변수선언은 변수 이름과 확보된 메모리 공간의 주소를 바인딩 하는 것
</details>

<details>
<summary>call, apply, bind</summary>

&nbsp;함수를 실행하고 함수의 첫 번째 인자로 전달하는 값에 `this` 바인딩
- call
    - 두 번째 인자부터 차례로 **값**을 전달
- apply
    - 인자를 **배열**로 전달
- bind
    - 함수를 실행하지 않고, 새로운 함수를 반환
    - 반환된 새로운 함수를 실행해야 원본 함수가 실행됨

</details>

<details>
<summary>thrrotle과 debounce</summary>

- debounce
    - 이벤트를 그룹화하여 특정시간이 지난 후, 하나의 이벤트만 발생하도록 하는 기술
    - 검색어 자동완성에 많이 사용
- throttle
    - 이벤트를 일정한 주기마다 발생하도록 하는 기술
    - 스크롤 이벤트에 많이 사용
</details>

<details>
<summary>mutable과 immutable</summary>

- mutable
    - 변할 수 있음
    - 참조타입(객체, 배열, 함수)
    - 해당 데이터 주소를 찾아서 값을 변경함
- immutable
    - 불변
    - 원시타입(String, Number, Boolean, Null, Undefined)
    - 해당 데이터 주소와 별개의 새로운 주소에 값이 할당
</details>

<details>
<summary>얕은 복사와 깊은 복사</summary>

- 얕은 복사
    - 객체 복사 시, 원본 값과 복사된 값이 같은 참조(= 메모리 주소)를 가리키는 것
    - 얕은 복사 후, 해당 변수를 재사용하여 수정한다면 원본 값도 변하므로 주의
    - `Object.assin()`, 전개 구문
- 깊은 복사
    - 복사된 객체가 다른 주소를 참조하며 내부의 값만 복사
    - 재귀함수, `JSON.parse()`, `JSON.stringify()` 이용

</details>

<details>
<summary>babel</summary>

&nbsp;트랜스파일러로, 모던 자바스크립트 코드를 구 표준을 준수하는 코드로 변환해줌

</details>

<details>
<summary>polyfill</summary>

&nbsp;개발자가 특정 기능이 기원되지 않는 브라우저를 위해 사용할 수 있는 코드 조각이나 플러그인. 브라우저에서 지원하지 않는 기능들에 대한 호환성 작업을 채워넣는다고 해서 `polyfill`이라 칭함

</details>

## Web Browser

<details>
<summary>브라우저의 동작 원리</summary>

1. 렌더링 엔진은 먼저 HTML을 파싱해서 DOM 트리 구축
2. CSS 파싱 CSSOM 트리 구축
3. 자바스크립트 실행
4. DOM + CSSOM 렌더 트리 구축
5. 화면에 배치(Layout + reflow)
6. 그리기(paint)

</details>

<details>
<summary>HTML 중간에 자바스크립트가 있으면 HTML 파싱이 중단되는 이유</summary>

- 자바스크립트는 DOM을 변경시킬 수 있음
- 스크립트가 아직 그려지지 않은 DOM 트리 노드에 접근 시, 오류 발생 가능성이 있음
- body 태그 최하단에 script 태그 삽입 권장
</details>

<details>
<summary>URL 검색 시 발생하는 일</summary>

1. 웹 브라우저가 해당 도메인의 IP 주소 탐색
    - 캐시 확인 후 없을 경우, DNS 서버에서 IP 주소 탐색
2. 웹 브라우저가 서버와의 TCP 연결 시작
3. 웹 브라우저가 HTTP 요청을 서버로 전송
4. 웹 서버가 요청을 수행하고 응답 전송
5. 웹 브라우저가 콘텐츠 렌더링
</details>

<details>
<summary>repaint, reflow</summary>

- repaint
    - 웹 페이지의 일부 또는 전부를 다시 처리하고 그려야 할 때
    - 생성된 DOM 노드의 너비, 높이 위치 등을 변경했을 때 영향을 받는 모든 노드의 수치를 계산하여 렌더트리 재생성
- reflow
    - 변경된 요소를 화면에 그리는 작업
    - repaint 이후에 필히 실행됨
    - reflow만 일어나는 작업
        - visibility, background-color, outline, opacity
        - 다른 노드에 영향을 주지 않고 발생하기 때문
</details>

<details>
<summary>쿠키와 세션/로컬 스토리지</summary>

- 쿠키
    - 저장공간이 4KB로 적음
- 세션 스토리지
    - 브라우저 종료 시 날아감
- 로컬 스토리지
    - 브라우저에 남아있음

</details>

<details>
<summary>쿠키</summary>

- 일정 시간동안 데이터 보관
- 서버에 접속 시, 접속한 클라이언트 정보를 PC에 저장했다가 재사용
- 클라이언트에서 쿠키 설정하는 방법
    - `document.cookie = "test=test"`로 세팅
- 서버에서 쿠키 설정하는 방법
    - 응답 헤더에 'Set-Cookie' 설정
- 서버에서 쿠키를 세팅하면 XSS 공격에 취약한데 어떻게 해결?
    - 응답 헤더에 `Set-Cookie` 설정 시 HttpOnly 옵션 세팅
        ```java
        response.setHeader("Set-Cookie", "test=test; HttpOnly");
        ```

</details>

<details>
<summary>CORS(Cross origin resource sharing)</summary>

- 요청 헤더의 origin과 응답 헤더의 origin 비교 -> origin의 프로토콜(http, https), 호스트, 포트 중 하나라도 다르면 CORS 에러 발생
- 발생 주체는 브라우저
- 서버에서 응답 헤더에 `Access-Control-Allow-Origin`에 허용 출처를 내려보내 해결
- Preflight
    - 본 요청 보내기 전에 안전한 요청인지 확인을 위해 브라우저에서 보내는 예비 요청
    - HTTP 메소드 중 OPTIONS라는 요청이 사용됨
    - preflight 요청을 캐싱시키는 방법
        - 응답 헤더의 `Access-ControlMax-Age` 캐싱 시간 명시

</details>

## CS
<details>
<summary>싱글스레드, 멀티스레드</summary>

</details>

<details>
<summary>HTTP, HTTPS</summary>

</details>

<details>
<summary>대칭/비대칭키 암호화</summary>

</details>

<details>
<summary>RESTful</summary>

</details>

<details>
<summary>스레드, 프로세스</summary>

</details>

<details>
<summary>PCB</summary>

</details>

<details>
<summary>교착상태</summary>

</details>

<details>
<summary>TCP/UDP</summary>

</details>

<details>
<summary>OSI 7계층</summary>

</details>

## React

<details>
<summary>리액트란</summary>

</details>

<details>
<summary>내부 작동 원리</summary>

</details>

<details>
<summary>라이프사이클</summary>

</details>

<details>
<summary>CSR, SSR</summary>

</details>

<details>
<summary>state를 직접 변경하지 않고 setState를 사용하는 이유</summary>

</details>

<details>
<summary>hooks의 장점</summary>

</details>

<details>
<summary>useMemo, useCallback</summary>

</details>

<details>
<summary>virtual DOM</summary>

</details>

<details>
<summary>상태변화 감지 방법</summary>

</details>

<details>
<summary>Props drilling</summary>

</details>

<details>
<summary>props와 state</summary>

</details>

<details>
<summary>Batching</summary>

</details>

<details>
<summary>리렌더링이 일어나는 상황</summary>

</details>

<details>
<summary>SPA</summary>

</details>

<details>
<summary>hydration</summary>

</details>

<details>
<summary>fiber</summary>

</details>

<details>
<summary>Suspense</summary>

</details>

## Typescript

<details>
<summary>사용 이유</summary>

</details>

<details>
<summary>any, void, unknown, never</summary>

</details>

<details>
<summary>type, interface 차이</summary>

</details>

<details>
<summary>제네릭</summary>

</details>

<details>
<summary>유틸리티</summary>

</details>

## Redux

<details>
<summary>왜 사용</summary>

</details>

<details>
<summary>Flux</summary>

</details>

<details>
<summary>리듀서 내부에서 불변성을 지키는 이유</summary>

</details>

<details>
<summary>어떻게 작동하나</summary>

</details>

## NextJS

## 그 외

### Recoil

### WebRTC
<details>
<summary>시그널링 과정</summary>

</details>

<details>
<summary>STUN, TURN 서버 차이</summary>

</details>

<details>
<summary>나 뭐했나..</summary>

- navigator.mediaDevices.getUserMedia
- navigator.mediaDevices.enumerateDevices
- navigator.mediaDevices.ondevicechange
- navigator.permissions
</details>

### MQTT

<details>
<summary>뭐임?</summary>

&nbsp;Publisher, Broker, Subscriber 구조로 이루어져 Publisher가 Topic을 발행하고, Subscriber는 Topic을 구독한다. Broker는 중계자 역할을 하며, 1:1, 1:N 통신이 가능하다.
</details>

<details>
<summary>QoS(Quality of System)</summary>

&nbsp;서비스의 품질 단계 설정
- 0단계
    - 메시지를 보내고 잘 갔는지 확인 하지 않음
- 1단계
    - 메시지가 전달되었다는 신호를 받고, 신호가 안 오면 올 때까지 계속해서 메시지를 전송
    - 메시지를 중복으로 발행할 가능성이 있음
- 2단계
    - 4way handshaking을 사용하여 정확히 한 번의 메시지 전송을 보장하는 방법
</details>

## 인성

<details>
<summary>자기소개</summary>

</details>

<details>
<summary>이직 사유</summary>

</details>

<details>
<summary>어떤 어려움이 있었고 어떻게 해결했는지</summary>

</details>

<details>
<summary>지원동기</summary>

</details>

<details>
<summary>업무 강점</summary>

</details>

<details>
<summary>커뮤니케이션 방법</summary>

</details>

<details>
<summary>어떻게 기여할 것이고 나를 왜 뽑아야 하는지</summary>

</details>

<details>
<summary>10년 뒤에 뭐 할 건지(어떤 사람이 되고 싶은지)</summary>

</details>

<details>
<summary>중요하게 생각하는 가치</summary>

</details>

<details>
<summary>같이 일하고 싶은 사람과 같이 일하기 싫은 사람</summary>

</details>

<details>
<summary>나의 장/단점</summary>

</details>