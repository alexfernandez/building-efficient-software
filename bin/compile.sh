#!/bin/bash
# Alex 2018-02-17
# Make V8 compile and show the optimized code

node --print_opt_source --print_opt_code ./multiply-many.js

