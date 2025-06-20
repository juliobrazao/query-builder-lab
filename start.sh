#!/bin/bash

# Exit on error
set -e

# Load .env variables and run docker-compose
export $(grep -v '^#' .env | xargs)

docker-compose --env-file .env up -d
