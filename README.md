# 🔐 **JWT-to-Keycloak: Migrating from JWT to Keycloak**  

Welcome to the **AuthFlow-Upgrade** repository! This project demonstrates the migration of an authentication system from JSON Web Tokens (JWT) to Keycloak, leveraging **Keycloak 26.1.0** for enhanced security, scalability, and manageability.  

---

## 🚀 **Overview**  

This project showcases the transition from a JWT-based authentication system to **Keycloak 26.1.0**, a powerful open-source Identity and Access Management (IAM) solution. The migration enabled us to:  
- Centralize authentication and authorization  
- Implement Single Sign-On (SSO)  
- Simplify user management and access control  
- Leverage Keycloak’s built-in security features  

The frontend is built with **Angular**, and the backend is integrated with Keycloak for secure authentication.  

---

## 💡 **Why Keycloak?**  

While JWT is a reliable authentication method, managing tokens, user sessions, and security policies at scale can become cumbersome. Keycloak provides a robust alternative with features like:  
- OAuth2 and OpenID Connect support  
- Built-in user management and role-based access control  
- Seamless integration with modern applications  
- Enhanced security with features like brute-force detection and password policies  

---

## 🛠️ **Technologies Used**  

- **Keycloak 26.1.0**: For authentication and authorization  
- **Angular**: Frontend framework  
- **OAuth2 & OpenID Connect**: Standard protocols for secure authentication  
- **JWT**: Previous authentication method (for comparison)  
- **Docker**: For containerizing Keycloak  
- **Spring Boot** (or your backend framework): Backend integration  

---

## 🚀 **Getting Started**  

### Prerequisites  
- Docker (for running Keycloak locally)  
- Node.js (for Angular)  
- Angular CLI (`npm install -g @angular/cli`)  
- Java (if using Spring Boot or another backend framework)  

### Installation  

1. **Clone the repository**:  
   ```bash  
   git clone https://github.com/your-username/AuthFlow-Upgrade.git  
   cd AuthFlow-Upgrade  
