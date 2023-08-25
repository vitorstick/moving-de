## Project: Translate things to and from German (and say them)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Don't forget to run `npm install` first.

## Deployment

run `ng deploy --base-href=https://vitorstick.github.io/moving-de/` to deploy to github pages (https://vitorstick.github.io/moving-de/)
the branch gh-pages is used for deployment

Before deploy just delete gh-pages branch locally and from origin
git branch -D gh-pages && git push origin --delete gh-pages

you can run the ng deploy command from any branch, it will create the gh-pages branch and deploy it to github pages
