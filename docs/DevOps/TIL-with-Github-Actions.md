# TIL with Github Actions

Posted at 21-06-20

Vuepress로 만드는 TIL 사이트. 사이트 배포는 `Github Pages`에 한다.

로컬에서 빌드해 `gh-pages` 브랜치에 push 하는 것은 생각보다 번거롭다.

그래서 `Github Actions`를 사용해 코드가 push 되면 자동으로 빌드되고 배포되도록 하였다.

## Github Pages Target

Settings > Pages 섹션에서 Source 브랜치를 `gh-pages`로 설정하고 대상 디렉터리는 `/` (root)로 설정했다.

## Workflow

`.github/workflows/buildPage.yml` 이라는 yaml 파일을 생성했다. yaml 이름은 어떤 걸 쓰던 무관하다.

Action은 [vuepress-deploy](https://github.com/marketplace/actions/vuepress-deploy)를 참고했다.

이 때, 나의 증명을 위해서 ACCESS TOKEN이 필요하다. 이 토큰은 `Settings (Account) > Developer settings > Personal access tokens`에서 생성한다. 이 때, Repo를 수정할 수 있는 권한을 부여한다.

`Settings (Repo) > Secrets > New secret`에서 `ACCESS_TOKEN`을 생성해 발급받은 토큰을 삽입하면 된다.