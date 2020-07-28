# Using ffmpeg docker image to convert media file formats

<https://docs.docker.com/engine/security/userns-remap/>

```sh
# To find mounted volumes.
# Assume we are only running container.
docker inspect -f "{{ .Mounts }}" `docker ps -q`

docker run --user 1000 -v $(pwd):$(pwd) -w $(pwd) -it --entrypoint='bash' jrottenberg/ffmpeg
```

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

###  Merge audio and video tracks

```sh
ffmpeg -i audio.aiff -i video.mov -acodec copy -vcodec copy -f mp4 avcombined.mp4
```
