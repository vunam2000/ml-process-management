# Get started

## Prerequisites

Install docker

## Installation

1. Run envoy

```bash
    docker-compose up --build -d
```

2. Run project

```bash
    npm install
    npm start
```

## If you want to generate proto again

```bash
    de_modules/.bin/protoc-gen-grpc-web \
        --js_out=import_style=commonjs:./ \
        --grpc-web_out=import_style=typescript,mode=grpcwebtext:./ src/proto/v1/**/*.proto
```
