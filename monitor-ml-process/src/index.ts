// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config()

import "reflect-metadata"

import { GrpcServer } from "./config/server"

const grpcServer = new GrpcServer()

grpcServer.bindAsync()
