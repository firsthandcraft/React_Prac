# React 스터디 노트입니다.

### start
main.jsx에서 render 내용 바꾸기
//주석처리를 해야 css가 적용이 안됨

  - App.jsx :: 전체 설명코드(자세한 설명과 코드들이 있다.)
  ![App](./react-project/src/img/app.png)

  - App2.jsx ::  완성코드
  ![App2](./react-project/src/img/app2.png)

  - Calculator.jsx :: 실습해보는 코드 계산기
  ![Calculator](./react-project/img/my-logo.png)




### .jsx
.jsx는 브라우저가 직접 이해할 수 있는 형식이 아니며, **개발 도구(빌드 도구)**가 백그라운드에서 JS로 변환해주기 때문에 작동하는 것


### import { useState } from 'react'
리액트에서 컴포넌트의 상태(state)를 관리하기 위한 함수
 "변하는 값"을 저장하고 추적하는 도구

 정적 컴포넌트이면 안써도됨

### 단일 Prop 객체 전달

<CoreConcept
  title={CORE_CONCEPTS[0].title}
  description={CORE_CONCEPTS[0].description}
  image={CORE_CONCEPTS[0].image} />
또는

<CoreConcept
  {...CORE_CONCEPTS[0]} />
대신,

이처럼 CoreConcept 컴포넌트에 하나의 concept Prop를 전달할 수 있습니다 (Prop 이름은 선택적):
<CoreConcept
  concept={CORE_CONCEPTS[0]} />
그러면 CoreConcept 컴포넌트에서는 그 하나의 Prop만 받게 됩니다:

export default function CoreConcept({ concept }) {
  // Use concept.title, concept.description etc.
  // Or destructure the concept object: const { title, description, image } = concept;
}
어떤 문법과 접근 방식을 선호하는지는 전적으로 여러분 선택입니다.

### onChange
- onChange={() => handleChange()}와  onChange={handleChange}의 차이는?

| 코드                                | 설명                                                                           |
| --------------------------------- | ---------------------------------------------------------------------------- |
| `onChange={handleChange}`         | `handleChange` 함수를 **바로 참조**합니다 (함수 자체를 넘김).                                 |
| `onChange={() => handleChange()}` | **화살표 함수로 감싸서** 실행 시점에 `handleChange()`를 **직접 호출**합니다. 매 렌더마다 새로운 함수가 생성됩니다. |



### event.target.value

```
<input
      type="number"
      placeholder="Type something..."
      required
      value={userInput.initialInvestment}
      onChange={(event) => onChange('initialInvestment',event.target.value)}
    />
```
type="number"라도 onChange={(event) => onChange('initialInvestment',event.target.value)}에서는 value가 문자로 출력된다.
