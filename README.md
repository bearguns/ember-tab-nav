# tab-nav

This README outlines the details of collaborating on this Ember addon.

## Installation

* `git clone <repository-url>` this repository
* `cd tab-nav`
* `npm install`
* `bower install`

## Installation as Addon

- Add this repository to your downstream project's package.json: `git+ssh://git@github.com/teliax/ember-tab-nav.git#v0.0.2`
- `npm i` or `yarn` in your downstream project to pull down the code.
- Install Bootstrap for styling, or write your own styles targeting the `nav` and `nav-tabs` classes.

## Usage

```
{{tab-nav tabs=(array
  (hash
    title="first Tab"
    content=(component "first-component"
      data=model.first)
  )
  (hash
    title="second Tab"
    content=(component "second-component"
      data=model.second)
  )
  (hash
    title="third Tab"
    content=(component "third-component"
      data=model.third)
  )
)}}
```

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
