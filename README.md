# Unkey x React-Native x Resend

This app demonstrates @unkey/ratelimit and how you can rate limit your React-Native Expo routes. Setup the app and try sending emails.

## Usage

https://github.com/user-attachments/assets/35588e37-b388-4d6d-b3b6-f45d67296941


   
## Prerequisites

- Account with [Unkey](https://app.unkey.com/)
- Account with [resend](https://resend.com/)
- Expo


## Setup Unkey 

1. Go to unkey [ratelimits](https://app.unkey.com/ratelimits)

2. Create a new namespace with the name `unkey-react-native`

3. Go to settings/root-keys and create a root key with Ratelimit permissions

4. You can follow this link to create the root key with ratelimit permissions [https://app.unkey.com/settings/root-keys/new?permissions=ratelimit.*.create_namespace,ratelimit.*.read_namespace,ratelimit.*.limit,ratelimit.*.update_namespace,ratelimit.*.delete_namespace](https://app.unkey.com/settings/root-keys/new?permissions=ratelimit.*.create_namespace,ratelimit.*.read_namespace,ratelimit.*.limit,ratelimit.*.update_namespace,ratelimit.*.delete_namespace)

5. Add it in the .env file `UNKEY_ROOT_KEY`

## Setup Environment

Copy .env.example to .env

```bash
cp .env.example .env
```

Set the unkey root-key that we just created:

```bash
UNKEY_ROOT_KEY=
```

Set the resend API key that we just created:

```bash
RESEND_API_KEY=
```

If you are going to run the app on mobile ( ios/android ) set the base URL as your IP `http://192.168.x.x:8081`. To run on the web you can set the URL as `http://localhost:8081`

```bash
EXPO_PUBLIC_API_URL
```

## Quickstart

Install dependencies:

```bash
npm install
```

Start the app. Scan the QR displayed after this to run the app on mobile. If you want to run it on the Web it will start on port `8081`

```bash
npm run start
```