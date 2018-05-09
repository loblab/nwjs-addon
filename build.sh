#!/bin/bash

ver=0.29.2

nw-gyp --target=$ver configure
nw-gyp --target=$ver build

