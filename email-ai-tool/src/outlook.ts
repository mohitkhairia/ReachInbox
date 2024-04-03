import { OAuth2Client } from 'google-auth-library';

export const outlookClient = new OAuth2Client({
  clientId: 'your_outlook_client_id',
  clientSecret: 'your_outlook_client_secret',
  redirectUri: 'http://localhost:3000', // Update with your redirect URI
});
