# Server Sent Event Demo

A simple demo blocklet that uses [Server Sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) to push realtime updates to the client.

## Caution

If you are using compression in your Node.js app, please remember to flush on each message.

## References

- https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ignore_headers
- https://serverfault.com/questions/801628/for-server-sent-events-sse-what-nginx-proxy-configuration-is-appropriate
- https://github.com/expressjs/compression#server-sent-events
- https://github.com/http-party/node-http-proxy/issues/921#issuecomment-162386187
