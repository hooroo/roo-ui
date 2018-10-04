---
inject: true
append: true
skip_if: 'export { default as <%= componentModuleName %> } from'
to: <%= componentsRoot %>/index.js
---
export { default as <%= componentModuleName %> } from './<%= componentModuleName %>';