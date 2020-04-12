
# Introduction

This guide explains to you how to utilize Endb and provides an overview of its interface, features, and functionality. Starting from beginner level to advanced.

## What you should already know

This guide assumes you have a fundamental knowledge of the following:

- JavaScript
- Node.js, JavaScript runtime built

If you do not know JavaScript, but would like to acquire knowledge about it, here are some of the best hand-picked guides for beginners:

- [Codecademy, interactive JavaScript course](https://www.codecademy.com/learn/learn-javascript)
- [Eloquent JavaScript, a free online book](http://eloquentjavascript.net/)
- [MDN, JavaScript guide and reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## What is Endb?

Endb is key-value storage with support for multiple backends or storage adapters.
There are a few existing packages similar to Endb; however, Endb is better because of the following features:

- **Easy-to-use: Endb has a simplistic and convenient promise-based API.
- Adapters: By default, data is cached in memory. Optionally, install and utilize a "storage adapter".
- Third-Party Adapters: You can optionally utilize third-party storage adapters or build your own.
- Namespaces: Namespaces isolate elements within the database to enable useful functionalities.
- Custom Serializers: Utilizes its own data serialization methods to ensure consistency across various storage backends.
- Embeddable: Designed to be easily embeddable inside modules.
- Data Types: Handles all the JSON types including [`Buffer`](https://nodejs.org/api/buffer.html).
- Error-Handling: Connection errors are transmitted through, from the adapter to the main instance; consequently, connection errors do not exit or kill the process.

