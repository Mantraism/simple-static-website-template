
# Simple Static Website Template

A simple static website template using html, css, and js. Mainly used for my own personal website projects on my server computer using casaos, docker container, and apache.




## Usage/Examples/How to Run

1. Open Casaos
2. Click the "+" icon and choose install a customized app
3. Click import
4. Copy paste the text from the docker-compose.yml into the docker compose import
5. Change the web ports to unused ports in your network
Examples :
Change the deafult web ports from 
```bash
    ports:
      - "80:80" 
```
to
```bash
  ports:
    - "701:80"
```
6. Change the adminer ports to unused ports in your network
Examples :
Change the deafult adminer ports from 
```bash
    ports:
      - "8080:8080"
```
to
```bash
    ports:
      - "9701:8080"
```
7. Rename the container to a name that is not yet in use
8. Change the tag into "latest"
9. Click install

## Feedback

You can change it depending on your need and preference

## Related/Reference

Here are some related projects and references that i used

[NanangMrk](https://github.com/NanangMrk/php-apache-docker.git)

