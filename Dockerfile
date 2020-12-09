FROM nginx:1.17
# Copy our default nginx config
COPY nginx.conf /etc/nginx/
# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
# Copy over the artifacts in dist/ folder to default nginx public folder
COPY dist/MobyWEB /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]