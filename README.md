# Embediz

임베디드 보안·하드웨어·펌웨어 분석 연구팀 Embediz의 공개 웹사이트입니다.

- 공개 주소: https://fev20.github.io/Embediz/
- DOOM 프로젝트: https://fev20.github.io/Embediz/projects/doom-camera/
- 사이트맵: https://fev20.github.io/Embediz/sitemap.xml

## 콘텐츠와 페이지 수정

`content.js`에서 프로젝트·구성원·연구 기록을, `app.js`에서 페이지 본문과 제목·설명을, `src/page.html`에서 공통 HTML을 수정합니다. 수정 후 아래 명령으로 공개 HTML과 사이트맵을 다시 생성하세요.

```sh
node scripts/build.mjs
```

생성된 `index.html`, `projects/`, `notes/`, `members/`, `resources/`, `404.html`, `sitemap.xml`도 함께 커밋합니다. GitHub Pages 설정은 `main` 브랜치의 `/(root)`입니다. 별도 패키지 설치는 필요하지 않습니다.

모든 프로젝트와 연구 기록은 JavaScript 없이 본문을 읽을 수 있는 독립 HTML 페이지입니다. JavaScript는 검색·분류·영상 모달·모바일 메뉴와 기존 `#/...` 주소의 이전에 사용됩니다. 기존 해시 링크는 대응하는 새 페이지로 연결됩니다.

## 검색 노출 준비

주요 주제는 임베디드 보안 연구팀, 홈캠 펌웨어 분석, 임베디드 기기 DOOM 포팅, Secure Boot 적용 홈캠 분석입니다. 페이지마다 고유한 제목·설명·대표 주소와 구조화된 데이터를 생성하며, 예정된 연구는 완료 성과와 구분합니다.

Google Search Console에서는 `https://fev20.github.io/Embediz/`를 **URL 접두어** 속성으로 추가합니다. 소유권 확인용 HTML 태그를 `src/page.html`의 `<head>`에 넣고 다시 생성·배포한 뒤 확인합니다. 확인용 HTML 파일을 제공받으면 안내에 지정된 위치에 원본 그대로 추가합니다. 소유권 확인 후 사이트맵 URL을 제출하고 URL 검사로 수집·색인 상태를 확인하세요.

네이버 서치어드바이저는 호스트 단위로 등록하므로 `/Embediz/`만 따로 등록할 수 없습니다. `https://fev20.github.io` 루트의 소유권 확인 또는 별도 도메인 구성이 필요합니다. 이 저장소는 GitHub Pages 하위 경로를 사용하므로 호스트 루트에만 유효한 `robots.txt`를 추가하지 않습니다. 루트 사이트의 로봇 정책을 바꾸려면 해당 사이트에서 별도로 관리해야 합니다.

검색엔진 계정 등록·소유권 확인·색인 요청은 아직 수행하지 않았습니다. 검색 노출과 순위는 검색엔진이 결정하며, 코드 변경이나 사이트맵 제출만으로 보장되지 않습니다.
