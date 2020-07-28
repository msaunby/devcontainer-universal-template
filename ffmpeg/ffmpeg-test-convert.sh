#!/bin/bash

echo "Working dir" $(pwd)

#docker run -v $(pwd):/tmp -w $(pwd)\
#        jrottenberg/ffmpeg -stats \
#        -i test.ogg \
#        test-converted.mp3

docker run -v $(pwd):/tmp \
        jrottenberg/ffmpeg -stats \
        -i test.ogg \
        test-converted.mp3