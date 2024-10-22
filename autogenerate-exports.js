const fs = require("fs");
const path = require("path");

// Get the directory path from the command line arguments
const directoryPath = process.argv[2];

if (!directoryPath) {
  console.error("Please provide a directory path as an argument.");
  process.exit(1); // Exit the script with an error if the path is not provided
}

// Resolve the absolute path to the directory
const absolutePath = path.resolve(directoryPath);

// Check if the directory exists
if (!fs.existsSync(absolutePath)) {
  console.error("Directory does not exist:", absolutePath);
  process.exit(1);
}

// Read the list of all files in the directory
fs.readdir(absolutePath, (err, files) => {
  if (err) {
    return console.error("Unable to scan directory:", err);
  }

  // Filter out only TypeScript files, excluding index.ts
  const exportStatements = files
    .filter((file) => file.endsWith(".ts") && file !== "index.ts")
    .map((file) => `export * from "./${file.replace(".ts", "")}";`);

  // Generate the index.ts file in the same directory
  const indexPath = path.join(absolutePath, "index.ts");
  fs.writeFile(indexPath, exportStatements.join("\n") + "\n", (err) => {
    if (err) throw err;
    console.log(`index.ts created successfully at ${indexPath}`);
  });
});
