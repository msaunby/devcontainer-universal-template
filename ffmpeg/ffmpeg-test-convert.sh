#!/bin/bash


hostdir=/home/mike/github/ExeterBScDTS/devcontainer-universal-template/ffmpeg/samples


docker run --user 1000:1000 -v ${hostdir}:/tmp/workdir -w /tmp/workdir \
        jrottenberg/ffmpeg \
        -i test.ogg \
        test-converted.mp3


docker run --user 1000:1000 -v ${hostdir}:/tmp/workdir -w /tmp/workdir \
        jrottenberg/ffmpeg \
        -i test.ogg -i test.webm \
        -acodec copy -vcodec copy -f mp4 \
        test-combined.mp4