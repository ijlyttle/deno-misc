# publish_gh_pages

This is a thin CLI for the [gh-pages](https://www.npmjs.com/package/gh-pages)
`publish()` function; it allows you to publish a directory as a gh-pages branch.

## Installation

Still figuring that bit out...

```
```

## Usage

You have to provide a (relative) directory:

```
pubPages dist
```

All the optional arguments in `publish()` are available. For example, to make
sure `.nojekyll` gets pushed:

```
pubPages dist --dots true
```
