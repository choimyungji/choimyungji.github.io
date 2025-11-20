---
layout: post
title: Claude Code와 Things 통합
date: 2025-11-20 00:00:00 +0900
categories: develop
tags: Claude Things URL-Scheme 생산성 자동화
toc: true
comment: true
---

* TOC
{:toc}

# Claude Code와 Things 앱 통합 활용 사례

## 개요
Claude Code에서 사용자의 TODO 관리 앱(Things)과 자동으로 연동하여, 대화 중 발생하는 작업을 즉시 할일 목록에 추가할 수 있도록 설정한 사례입니다.

## 문제 상황
- iOS 기기에서 앱을 실행하려다 Development Team 설정이 필요한 상황 발생
- Xcode 설정 작업을 Things 앱에 추가하고 싶음
- 매번 수동으로 Things 앱을 열어 작업을 추가하는 것이 번거로움

## 해결 방법

### 1. Things URL Scheme 활용
Things 앱은 URL scheme을 제공하여 외부에서 할일을 추가할 수 있습니다:
```bash
things:///add?title=작업제목&notes=작업상세내용
```

### 2. 글로벌 CLAUDE.md 파일 생성
모든 Claude Code 세션에서 자동으로 적용되는 커스텀 인스트럭션을 설정:

**파일 위치**: `~/.claude/CLAUDE.md`

**내용**:
```markdown
# Todo Item Management Rules

When the user requests to add a todo item, checklist, or task:
1. **Always use the Things app URL scheme**: `things:///add`
2. **Format**: `things:///add?title=ITEM_TITLE&notes=OPTIONAL_NOTES`
3. **Do NOT include** `when=today` parameter - items should go to inbox only
4. Use the `open` command via Bash tool to trigger the URL scheme
5. **Do NOT URL encode** - use plain text for title and notes
```

### 3. 사용 예시

#### 예시 1: 간단한 할일 추가
**사용자 요청**: "디즈니 플러스 구독을 TODO로 넣어줘"

**Claude 실행**:
```bash
open "things:///add?title=디즈니 플러스 구독"
```

#### 예시 2: 노트가 포함된 할일 추가
**사용자 요청**: "iOS 기기 설정 추가해줘, 노트에 Xcode 설정 필요하다고"

**Claude 실행**:
```bash
open "things:///add?title=iOS 기기 설정&notes=Xcode 설정 필요"
```

#### 예시 3: 복잡한 작업 세부사항 포함
**Claude가 자동 생성한 예시** (iOS 기기 실행 설정):
```bash
open "things:///add?title=iOS 기기에서 BetterTimer 실행 설정&notes=1. Xcode에서 BetterTimer 프로젝트 클릭
2. TARGETS > BetterTimer 선택
3. Signing & Capabilities 탭
4. Team 선택 (Apple ID)
5. Automatically manage signing 체크
6. 상단에서 Myungji의 iPhone 선택
7. ▶️ Run 버튼 클릭"
```
