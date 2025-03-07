# @jaspermayone/disposable-email-detector

> [!IMPORTANT]
> This is a fork of [IntegerAlex/disposable-email-detectork](https://github.com/IntegerAlex/disposable-email-detectork), with some improvements and bugfixes. Our base version 1.0.0. was based from Alex's version 3.0.0, specifically commit [da406b2](https://github.com/IntegerAlex/disposable-email-detector/commit/da406b2cbcf0478ab49faabda618be1b588763dc)

![NPM Downloads](https://img.shields.io/npm/dt/@jaspermayone/disposable-email-detector?style=plastic&logo=npm)
![NPM Version](https://img.shields.io/npm/v/@jaspermayone/disposable-email-detector)

## Overview

`@jaspermayone/disposable-email-detector` is a TypeScript utility designed to identify disposable email addresses, providing developers with a tool to enhance email verification processes.

## Features

- **Domain Check:** Identifies if an email address belongs to a known disposable email domain.
- **Error Handling:** Offers informative messages for scenarios like missing `index.json` or invalid JSON format.
- **Async File Reading:** Utilizes asynchronous file reading for improved performance.

## Getting Started

### Prerequisites

- Node.js
- npm

### Implementation Details

```javascript
    npm i @jaspermayone/disposable-email-detector
```

```javascript
import disposableEmailDetector from "@jaspermayone/disposable-email-detector";

const email = "test@example.com";

disposableEmailDetector(email).then((response) => console.log(response)); //  true
```

The disposableEmailDetector function reads a list of disposable email domains from index.json. It checks whether the provided email address belongs to a disposable domain and returns a boolean indicating the result.

### Error Handling

- If `index.json` is not found, the script informs you to create it with disposable domains.
- If `index.json` has an invalid JSON format, it prompts you to correct the file.
- Unexpected errors are logged to the console.

## Contributing

Contributions are welcome! Please refer to the [contributing guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

```
