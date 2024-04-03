import { google } from 'googleapis';


export const gmailAuth = new google.auth.GoogleAuth({
  keyFile: './credentials/google-credentials.json',
  scopes: ['https://mail.google.com/'],
});

export const gmail = google.gmail({
  version: 'v1',
  auth: gmailAuth.getClient(),
});
