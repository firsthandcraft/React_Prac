# React_Prac
-- 설치방법

```
parksoyoung@soyoung-ui-MacBookPro React_Prac % npx create-react-app blog
# 실행
cd blog 
npm run start
```

app.js에 상단에 lint 기능끄기
```javascript
/* eslilnt-disable */
```

-- tailwind 설치
```
npm install -D tailwindcss
```

tailwind.config.js 파일을 열고 템플릿 파일의 경로를 추가
``` javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
App.css에 추가
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
-- https://tailwindcss.com/docs/margin

