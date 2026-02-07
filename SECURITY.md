# Security Policy

## Supported Versions

We release security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability, please follow these steps:

1. **Do NOT** open a public issue
2. Email us at: **tecnojr@uesc.br**
3. Include the following information:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

### Response Timeline

- **24 hours**: Initial acknowledgment
- **72 hours**: Preliminary assessment
- **7 days**: Detailed response and fix timeline

## Security Best Practices

### For Contributors

- Never commit secrets (API keys, passwords, tokens)
- Use environment variables for sensitive data
- Run `npm audit` before submitting PRs
- Follow OWASP Top 10 guidelines
- Enable 2FA on your GitHub account

### For Deployment

- Keep dependencies up to date
- Use HTTPS for all connections
- Implement Content Security Policy (CSP)
- Enable rate limiting on forms
- Regular security audits
- Monitor error logs for suspicious activity

## Security Features

### Current Implementation

- ✅ Next.js automatic XSS protection
- ✅ HTTP-only cookies
- ✅ CSRF protection via Next.js
- ✅ Input validation and sanitization
- ✅ Secure headers configuration
- ✅ Regular dependency updates via Dependabot

### Planned Features

- [ ] IP-based rate limiting
- [ ] Advanced DDoS protection
- [ ] Automated vulnerability scanning
- [ ] Security audit logs

## Contact

For security concerns: **tecnojr@uesc.br**

For general inquiries: Create a GitHub issue

---

**Last Updated**: February 6, 2026
