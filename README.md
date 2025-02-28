`mkdir monorepo-test`

`git init`

`cd monorepo-test/`

`npm init -y`

`npm i --save-dev turbo`

```.gitignore
node_modules
```

```json turbo.json
{
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**/*"]
    },
    "lint": {},
    "dev": {
      "cache": false
    }
  }
}
```

```diff json package.json
  {
    "name": "monorepo-test",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
- 		"test": "echo \"Error: no test specified\" && exit 1",
+     "dev": "turbo run dev",
+     "build": "turbo run build",
+     "lint": "turbo run lint"
    },
+ 	"packageManager": "npm@10.1.0",
+ 	"workspaces": [
+ 		"apps/*"
+ 	],
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "turbo": "^2.4.4"
    }
  }
```

# 2 create frontend

`mkdir apps`

`npm create cloudflare@latest apps/frontend`

`npm run dev`

```diff .gitignore
  node_modules
+ .turbo	
```

# 3 create backend

`npm create hono@latest apps/backend`

# 4 add shadcn/ui

`cd apps/frontend`

`npx shadcn@latest init`

```sh
Which style would you like to use? › Default
Which color would you like to use as the base color? › Neutral
How would you like to proceed? › Use --legacy-peer-deps
```

`npx shadcn@latest add button`

```sh
How would you like to proceed? › Use --legacy-peer-deps
```
