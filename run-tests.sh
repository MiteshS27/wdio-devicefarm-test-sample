#!/bin/bash
echo "Starting test run"

# Compile TypeScript if needed
npx tsc

# Run the WDIO tests
npx wdio run wdio.conf.ts