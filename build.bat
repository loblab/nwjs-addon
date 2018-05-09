set ver=0.29.2

call nw-gyp --target=%ver% configure
call nw-gyp --target=%ver% build
