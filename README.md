# Ping-Websites

A simple Node.js project to monitor the availability of websites by periodically pinging them and reporting their status.

## Features
- Reads a list of websites from `websites.json`
- Pings each website at regular intervals
- Reports the status (up/down) of each website
- Simple web interface in `public/index.html`

## Project Structure
```
Ping-Websites/
├── package.json
├── server.js
├── websites.json
└── public/
    └── index.html
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)

### Installation
1. Clone the repository:
   ```powershell
   git clone <repo-url>
   cd Ping-Websites
   ```
2. Install dependencies:
   ```powershell
   npm install
   ```

### Usage
1. Add the websites you want to monitor in `websites.json`.
2. Start the server:
   ```powershell
   node server.js
   ```
3. Open `public/index.html` in your browser to view the status dashboard.

## Configuration
- `websites.json`: List of websites to ping (edit this file to add/remove URLs).
- `server.js`: Main server logic for pinging and reporting.

## License
This project is licensed under the MIT License.
