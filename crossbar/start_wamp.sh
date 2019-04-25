#!/usr/bin/env bash

adb reverse tcp:9090 tcp:9090

docker run -v  $PWD:/node -u 0 --rm --name=crossbar -it -p 9090:9090 crossbario/crossbar
