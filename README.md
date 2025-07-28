# React 스터디 노트입니다.

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
