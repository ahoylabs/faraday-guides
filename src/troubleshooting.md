# Troubleshooting

## Hard Reset / Reinstall

Before resorting to a hard reset, download and run the latest installer from [Faraday's website](https://faraday.dev/).

If issues persist, follow these steps:

### Windows:

- Delete the folder: `%USERPROFILE%\AppData\Roaming\faraday\`

### Mac:

- Delete the folder: `~/Library/Application Support/faraday/`

Then, reinstall with the latest installer.

## Why is my model failing to load?

### 1. GPU Support Issue:

- Navigate to the Settings page.
- Disable GPU acceleration and try again.
  - If successful, the GPU settings are misconfigured.
- Set GPU mode to "Manual" and adjust to a low value, e.g., 10%.
  - If successful, incrementally increase until it fails, indicating memory limits.
- Avoid using an integrated GPU with Faraday.

### 2. Context Size Too Large:

- Go to "Settings" on the left sidebar.
- Set maximum context to 2048.
- Return to the problematic chat.
  - If successful, your device struggles with context sizes above 2048.

### 3. Unsupported Device or OS:

- **Mac**: Ensure you're on Mac OS 12 or newer.
- **Windows**: Ensure you're on Windows 8 or newer.

If none resolve the issue, reach out to the developers on [Discord](https://discord.gg/Ng4vmcDfqr).
