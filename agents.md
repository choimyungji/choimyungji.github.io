# Agents (기능 모듈) 문서

이 문서는 개발자 최명지 위키/블로그 사이트의 주요 기능 모듈(Agents)들을 설명합니다.

## 목차
1. [Data Generation Agent](#1-data-generation-agent)
2. [Search Agent](#2-search-agent)
3. [Navigation Agent](#3-navigation-agent)
4. [Category Agent](#4-category-agent)
5. [TOC Highlight Agent](#5-toc-highlight-agent)

---

## 1. Data Generation Agent

**파일 위치**: `generateData.js`

### 목적
마크다운 파일들을 파싱하여 사이트 전체에서 사용할 데이터를 생성합니다.

### 주요 기능

#### 1.1 파일 수집
```javascript
getFiles('./_wiki', 'wiki', list);
getFiles('./_posts', 'blog', list);
```
- `_wiki/` 디렉토리에서 위키 문서 수집
- `_posts/` 디렉토리에서 블로그 포스트 수집
- 재귀적으로 하위 디렉토리 탐색

#### 1.2 메타데이터 파싱
- YAML front matter 파싱
- 주요 메타데이터:
  - `title`: 문서 제목
  - `tag`: 태그 목록
  - `parent`: 부모 문서 (위키 계층 구조)
  - `summary`: 요약
  - `public`: 공개/비공개 설정
  - `date`, `updated`: 날짜 정보

#### 1.3 생성되는 데이터 파일

##### 1.3.1 태그 맵 (`_data/tagMap.yml`)
```yaml
tag-name:
  - fileName: document-name
  - fileName: another-document
```
- 각 태그에 속한 문서 목록
- 파일명 기준 알파벳순 정렬

##### 1.3.2 태그 리스트 (`_data/tagList.yml`)
```yaml
- tag1
- tag2
- tag3
```
- 전체 태그 목록
- 알파벳순 정렬

##### 1.3.3 페이지 맵 (`_data/pageMap.yml`)
```yaml
fileName:
  type: wiki|blog
  title: "페이지 제목"
  summary: "페이지 요약"
  parent: parent-page-name
  url: /wiki/fileName 또는 /posts/fileName
  updated: "2024-01-01"
  children: []
```
- 모든 문서의 메타데이터와 계층 구조
- parent-children 관계 자동 구성

##### 1.3.4 문서 URL 리스트 (`data/total-document-url-list.json`)
```json
[
  "/wiki/page1",
  "/posts/2024-01-01-post",
  "/wiki/page2"
]
```
- 랜덤 문서 기능에 사용

##### 1.3.5 검색 인덱스 (`data/search-index.json`)
```json
[
  {
    "title": "문서 제목",
    "content": "문서 내용...",
    "url": "/wiki/page",
    "type": "wiki",
    "tags": ["tag1", "tag2"],
    "summary": "요약",
    "date": "2024-01-01"
  }
]
```
- Fuse.js 검색 엔진용 인덱스
- 코드 블록 제거 및 특수문자 정리된 내용

### 실행 방법
```bash
node generateData.js
# 또는
./start.sh
```

---

## 2. Search Agent

**파일 위치**: `js/search.js`

### 목적
Fuse.js를 활용한 클라이언트 사이드 퍼지 검색 기능을 제공합니다.

### 주요 기능

#### 2.1 검색 초기화
```javascript
async function initSearch()
```
- `/data/search-index.json` 로드
- Fuse.js 인스턴스 생성
- 검색 옵션 설정:
  - **title**: 가중치 40%
  - **content**: 가중치 30%
  - **summary**: 가중치 20%
  - **tags**: 가중치 10%
  - **threshold**: 0.4 (민감도)
  - **minMatchCharLength**: 2 (최소 검색어 길이)

#### 2.2 검색 실행
```javascript
function performSearch(query)
```
- 입력된 쿼리로 Fuse.js 검색 수행
- 상위 10개 결과 반환
- 일치도 점수 포함

#### 2.3 결과 포맷팅
```javascript
function formatSearchResults(results)
```
- HTML 형식으로 검색 결과 생성
- 각 결과 항목 포함 정보:
  - 제목 + 링크
  - 타입 (wiki/blog)
  - 요약 또는 내용 미리보기 (100자)
  - 일치도 퍼센트
  - 태그 목록

#### 2.4 실시간 검색
```javascript
function setupLiveSearch(inputId, resultsId)
```
- 입력 시 300ms 디바운싱
- 2자 이상 입력 시 검색 시작
- 외부 클릭 시 결과 숨김
- 포커스 시 결과 다시 표시

### 사용 위치
- 헤더 검색창: `#headerSearchInput` → `#headerSearchResults`
- 검색 페이지: `#searchInput` → `#searchResults`

---

## 3. Navigation Agent

**파일 위치**: `js/main.js`

### 목적
사이트 전역 UI 상호작용을 담당합니다.

### 주요 기능

#### 3.1 메뉴 토글
```javascript
function toggle()
```
- 햄버거 메뉴 열기/닫기
- 클래스 토글:
  - `#nav`: `menu-open` 클래스
  - `#menu`: `btn-close` 클래스
  - `#wrap`: `fixed` 클래스
- IE 하위 호환성 지원

#### 3.2 다크 모드
```javascript
function detectColorScheme()
```
- 테마 감지 우선순위:
  1. localStorage에 저장된 사용자 설정
  2. OS 시스템 설정 (`prefers-color-scheme`)
  3. 기본값: 라이트 모드

```javascript
function switchTheme(e)
```
- 테마 전환 핸들러
- localStorage에 선택 저장
- `data-theme` 속성 업데이트

### 테마 적용 방식
```html
<html data-theme="dark">
```
- CSS 변수를 통한 테마 적용
- 페이지 로드 시 즉시 테마 적용 (깜빡임 방지)

---

## 4. Category Agent

**파일 위치**: `js/category.js`

### 목적
위키 페이지의 자식 문서 목록을 동적으로 로드하고 표시합니다.

### 주요 기능

#### 4.1 현재 페이지 식별
```javascript
function getTarget()
```
- `#thisName` hidden input에서 현재 페이지 이름 가져오기

#### 4.2 자식 문서 필터링
```javascript
function getChildren(data)
```
- pageMap.yml 데이터에서 현재 페이지를 parent로 하는 문서 필터링
- 제목 기준 알파벳순 정렬
- URL 생성: `/wiki/{fileName}`
- 날짜 포맷팅: `YYYY.MM.DD`

#### 4.3 HTML 생성
```javascript
function getChildrenHTML(list)
```
- 자식 문서 리스트를 HTML로 변환
- 각 항목 구성:
  - 제목 링크
  - 업데이트 날짜 (우측 정렬)
  - 요약 (있는 경우)

#### 4.4 데이터 로드
```javascript
axios.get('/data/wikilist.json')
```
- Axios를 통한 비동기 데이터 로드
- `#document-list`에 동적으로 삽입

### 사용 예시
위키 카테고리 페이지에서 하위 문서 목록을 자동으로 표시:
```
📁 Develop (부모 페이지)
  ├── 📄 JavaScript
  ├── 📄 Python
  └── 📄 Ruby
```

---

## 5. TOC Highlight Agent

**파일 위치**: `js/toc-highlight.js`

### 목적
스크롤 위치에 따라 목차(Table of Contents)의 현재 섹션을 강조 표시합니다.

### 예상 기능
- IntersectionObserver API를 활용한 섹션 추적
- 현재 보이는 섹션에 해당하는 TOC 링크 하이라이트
- 부드러운 스크롤 애니메이션

---

## 데이터 흐름 다이어그램

```
┌─────────────────────────────────────────────────────┐
│ 1. 콘텐츠 작성                                        │
│   _wiki/*.md, _posts/*.md                           │
└────────────────┬────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────┐
│ 2. Data Generation Agent (generateData.js)          │
│   - YAML front matter 파싱                          │
│   - 계층 구조 생성                                   │
└────────────────┬────────────────────────────────────┘
                 │
                 ├─────────────┬──────────────┬────────────┐
                 ▼             ▼              ▼            ▼
          ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
          │ tagMap   │  │ pageMap  │  │ urlList  │  │ search   │
          │   .yml   │  │   .yml   │  │  .json   │  │  .json   │
          └─────┬────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘
                │            │             │             │
                ▼            ▼             ▼             ▼
          ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
          │ Tag Page │  │ Category │  │ Random   │  │ Search   │
          │          │  │  Agent   │  │  Button  │  │  Agent   │
          └──────────┘  └──────────┘  └──────────┘  └──────────┘
                                                            │
                                                            ▼
                                                     ┌──────────┐
                                                     │ Fuse.js  │
                                                     │ 퍼지검색  │
                                                     └──────────┘
```

---

## 빌드 프로세스

### 개발 환경 시작
```bash
./start.sh
```

1. `node generateData.js` - 데이터 생성
2. `bundle install` - Ruby 의존성 설치
3. `bundle exec jekyll serve` - Jekyll 서버 시작
4. 또는 `docker-compose up` - Docker로 시작

### 배포
1. GitHub에 push
2. GitHub Actions 자동 빌드
3. GitHub Pages 배포

---

## 의존성

### JavaScript
- **Fuse.js 6.6.2**: 퍼지 검색 라이브러리
- **Axios**: HTTP 클라이언트

### Node.js
- **yamljs**: YAML 파싱

### Ruby
- **Jekyll 4.4.1**: 정적 사이트 생성기
- **jekyll-paginate**: 페이지네이션
- **jekyll-gist**: GitHub Gist 임베딩
- **jekyll-feed**: RSS 피드

---

## 개발 가이드

### 새 Agent 추가하기

1. `js/` 디렉토리에 새 JavaScript 파일 생성
2. 필요한 경우 `generateData.js`에 데이터 생성 로직 추가
3. 레이아웃 파일에 스크립트 포함:
   ```html
   <script src="/js/your-agent.js"></script>
   ```
4. 이 문서(agents.md) 업데이트

### 데이터 스키마 수정하기

1. `generateData.js`의 `parseInfo()` 함수 수정
2. 관련 Agent JavaScript 파일 업데이트
3. 레이아웃/템플릿 파일 업데이트

---

## 트러블슈팅

### 검색 결과가 나오지 않을 때
1. `node generateData.js` 실행하여 데이터 재생성
2. 브라우저 콘솔에서 `window.searchIndex` 확인
3. `/data/search-index.json` 파일 존재 여부 확인

### 자식 문서가 표시되지 않을 때
1. 마크다운 파일의 `parent` 필드 확인
2. `_data/pageMap.yml` 생성 여부 확인
3. `/data/wikilist.json` 접근 가능 여부 확인

### 다크 모드가 저장되지 않을 때
1. 브라우저 localStorage 활성화 여부 확인
2. 개발자 도구 → Application → Local Storage 확인
3. `theme` 키 값 확인

---

## 라이선스

이 프로젝트는 [johngrib-jekyll-skeleton](https://github.com/johngrib/johngrib-jekyll-skeleton)을 기반으로 합니다.
