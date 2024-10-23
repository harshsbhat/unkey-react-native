# Ratelimit React-Native Mobile routes using Unkey. 

This app demonstrates @unkey/ratelimit and how you can rate limit your astro routes. Try the following curl request. The route is rate-limited for 3 requests per 30 seconds .
   
## Prerequisites

Create an account with [Unkey](https://app.unkey.com/)


## Setup Unkey 

1. Go to unkey [ratelimits](https://app.unkey.com/ratelimits)

2. Create a new namespace with the name `astro`

3. Go to settings/root-keys and create a root key with Ratelimit permissions

4. You can follow this link to create the root key with ratelimit permissions [https://app.unkey.com/settings/root-keys/new?permissions=ratelimit.*.create_namespace,ratelimit.*.read_namespace,ratelimit.*.limit,ratelimit.*.update_namespace,ratelimit.*.delete_namespace](https://app.unkey.com/settings/root-keys/new?permissions=ratelimit.*.create_namespace,ratelimit.*.read_namespace,ratelimit.*.limit,ratelimit.*.update_namespace,ratelimit.*.delete_namespace)

5. Add it in the .env file `UNKEY_ROOT_KEY`