# repo.github.io

repo for korea it academy security solutions && network

## Git 적용 방법

변경한 내용을 깃에 반영하려면 아래 순서대로 명령을 실행하세요.

1. **변경사항 확인**
   ```bash
   git status
   ```
   추적되지 않은 파일이나 수정된 파일을 확인합니다.

2. **파일 추가**
   ```bash
   git add <파일경로>
   ```
   한 번에 모두 추가하려면 `git add .`을 사용할 수 있습니다.

3. **커밋 작성**
   ```bash
   git commit -m "메시지"
   ```
   변경 내용을 설명하는 커밋 메시지를 입력합니다.

4. **원격 저장소로 푸시**
   ```bash
   git push origin <브랜치명>
   ```
   예를 들어 현재 브랜치가 `work`라면 `git push origin work`를 실행합니다.

필요하다면 푸시 전에 `git pull`로 최신 변경사항을 받아 충돌을 미리 해결하세요.
