# Using ffmpeg docker image to convert media file formats

## Ffmpeg

<https://ffmpeg.org/>

Ffmpeg is a cross-platform open source tool for converting between streaming media formats.  It's very powerful with lots of options and support for very many formats, but this means it has a lot of library dependencies and isn't always easy to install.

For our purposes a Docker image makes using ffmpeg much easier.

## Docker image

See <https://hub.docker.com/r/jrottenberg/ffmpeg/>

```sh
docker run -v $(pwd):$(pwd) -w $(pwd)\
        jrottenberg/ffmpeg -stats \
        -i original.gif \
        original-converted.mp4
```