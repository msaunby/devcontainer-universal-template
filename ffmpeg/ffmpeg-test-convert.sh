#!/bin/bash
docker run -v $(pwd):$(pwd) -w $(pwd)\
        jrottenberg/ffmpeg -stats \
        -i original.gif \
        original-converted.mp4