# Autogenerate Exports Script

## Description

**`autogenerate-exports.js`** is a simple Node.js script that automatically creates an **`index.ts`** file to export all TypeScript files in a specified directory.

This script is useful for automatically generating exports in projects with many files, saving you from manually writing exports for each file.

## Installation

1. Make sure you have **Node.js** installed.
2. Download or create the **`autogenerate-exports.js`** file.
	
	```bash
	git clone git@github.com:SlavaStas/autogenerate-exports.git
	```

## Usage

1. Open a terminal and navigate to your project directory.

2. Run the script with the path to the directory where you want to generate exports:

   	```bash
   	node autogenerate-exports.js <directory_path>
	```

	For example, to generate an `index.ts` for the `services` folder:

   	```bash
	node autogenerate-exports.js ./services
   	```

3. The script will create an index.ts file in the specified directory, which exports all .ts files except the index.ts itself.

## Example

If your `services` folder contains the following files:

```
services/
├── first.service.ts
├── second.service.ts
├── third.service.ts
```

The script will generate an index.ts file with the following content:

```typescript
export * from './first.service';
export * from './second.service';
export * from './third.service';
```

Now, you can import everything from the `services` folder via `index.ts`:

```typescript
import { FirstService, SecondService, ThirdService } from './services';
```

## Features

- The script only processes **TypeScript** files (files with the `.ts` extension).
- The `index.ts` file is excluded from the list of exports.
- If the directory does not exist or the path is not provided, the script will output an error message.

## Notes

- The script works only with `.ts` files and is designed for TypeScript projects.
- You can provide either a relative or an absolute path to the directory.


## License

This script is free to use and modify.




