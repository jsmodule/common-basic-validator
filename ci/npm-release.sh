#! bin/bash
set -e -u

npm install && npm run build && npm publish
