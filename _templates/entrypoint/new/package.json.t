---
to: <%= root %>/<%= name %>/package.json
---
{
  "name": "roo-ui/<%= name %>",
  "main": "../lib/<%= name %>/",
  "types": "../lib/<%= name %>/index.d.ts",
  "module": "../esm/<%= name %>/",
  "sideEffects": false
}
