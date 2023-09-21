export default {
  getClientIp(request: Request) {
    return request.headers.get('X-Client-IP')
      || request.headers.get('X-Forwarded-For')
      || request.headers.get('CF-Connecting-IP')
      || request.headers.get('Fastly-Client-Ip')
      || request.headers.get('True-Client-Ip')
      || request.headers.get('X-Real-IP')
      || request.headers.get('X-Cluster-Client-IP')
      || request.headers.get('X-Forwarded')
      || request.headers.get('Forwarded-For')
      || request.headers.get('Forwarded')
      || request.headers.get('appengine-user-ip')
      || request.headers.get('Cf-Pseudo-IPv4');
  }
}