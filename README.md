
# Social Media API - MongoDB & Express Setup

This project is a simple Node.js and Express server that connects to a MongoDB Atlas cluster. Built as part of a hands-on lab exercise demonstrating basic database integration and environment variable management.


## Tech Stack

- **Node.js** — JavaScript runtime environment
- **Express.js** — Web framework for Node.js
- **MongoDB Atlas** — Cloud-hosted NoSQL database
- **dotenv** — Environment variable management


## Reflection Questions

* **Why is it important to whitelist IP addresses in a real-world production environment? What are the risks of allowing connections from anywhere (0.0.0.0/0)?**
Allowing access from anywhere (0.0.0.0/0) exposes the database cluster to the public internet, making it vulnerable to authentication attacks, unauthorized access attempts, and automated network scanning scripts. In a production environment, IP whitelisting restricts database connections strictly to trusted servers (e.g., the static IP address of your application backend), significantly reducing the attack surface.

* **What is the purpose of the dotenv package? What other methods could you use to manage environment variables in a production environment (e.g., in a cloud hosting service)?**
The dotenv package loads environment variables from a .env file into Node.js's process.env during local development. This prevents sensitive credentials (such as database connection URIs, API keys, and passwords) from being hardcoded into the source code or accidentally exposed in version control. In production environments (like AWS, Render, Vercel), environment variables are directly configured via the platform's native settings dashboard or stored securely using dedicated secret management services .

* **If your application failed to connect, what are the first few steps you would take to debug the issue?**
 1. *Verify Credentials:* Double-check the MONGO_URI string inside .env to ensure the database username, password, and cluster host name are correct.
 2. *Check Network Access:* Ensure that the current IP address is allowed under the Network Access / IP Access List tab in MongoDB Atlas (or configured to 0.0.0.0/0 during testing).
 3. *Inspect Database User Roles:* Confirm that the database user created in Atlas has appropriate permissions.
 4. *Review Console Logs:* Examine the specific error message caught in the application's try...catch block.