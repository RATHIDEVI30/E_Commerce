FROM nginx:alphine
COPY home.html /usr/share/ngnix/html/home.html
EXPOSE 80
