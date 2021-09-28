# `<FullStory />`

[![version](https://img.shields.io/npm/v/fullstory-react.svg)](https://www.npmjs.com/package/fullstory-react)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/fullstory-react.svg)](https://www.npmjs.com/package/fullstory-react)
[![downloads](https://img.shields.io/npm/dt/fullstory-react.svg)](https://www.npmjs.com/package/fullstory-react)
[![GitHub Action: Push](https://github.com/CharlesStover/fullstory-react/actions/workflows/push.yml/badge.svg)](https://github.com/CharlesStover/fullstory-react/actions/workflows/push.yml)

FullStory integration with React

## Install

- `npm install fullstory-react` or
- `yarn add fullstory-react`

## Use

```javascript
import FullStory from 'fullstory-react';
import { render } from 'react-dom';
import { App } from './components';

render(
  <FullStory orgId="my-org-id">
    <App />
  </FullStory>,
  document.getElementById('root'),
);
```

## Exports

### `FullStory`

```javascript
import FullStory from 'fullstory-react';
```

The `<FullStory />` component accepts as props all the same properties that
would be passed to the FullStory `init` method.

To identify your user, you may optionally provider `userUid` (a unique user ID),
`userDisplayName`, and `userEmail` props.

### Privacy components

```javascript
import {
  FulStoryExclude,
  FulStoryExcludeWithoutConsent,
  FulStoryMask,
  FulStoryMaskWithoutConsent,
  FulStoryUnmask,
  FulStoryUnmaskWithConsent,
} from 'fullstory-react';
```

The `FullStoryExclude`, `FullStoryExcludeWithoutConsent`, `FullStoryMask`,
`FullStoryMaskWithoutConsent`, `FullStoryUnmask`, and
`FullStoryUnmaskWithConsent` components control whether or not their children
are included or excluded from the FullStory recording.

## Integrations

### Segment

To integrate with Segment, visit the Segment website, navigate to Catalog,
select FullStory, then add your FullStory organization ID.

### Sentry

To integrate with Sentry, visit the Sentry website, navigate to your
organization settings, to Security & Privacy, to Data Scrubbing, then add
`fullStoryUrl` to the Global Safe Fields.

## Contributing

- `yarn set version latest`
- `yarn up * @*/*`
- If you use VIM, run `yarn sdks vim`.
- If you use Visual Studio Code, run `yarn sdks vscode`.
