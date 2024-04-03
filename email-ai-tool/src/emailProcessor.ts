import { Queue } from 'bullmq';
import { outlookClient } from './outlook';

const queue = new Queue('email-tasks');

export async function readAndCategorizeEmails() {
  // Process Outlook emails
  // Use the Outlook client to request messages
  const outlookResponse = await outlookClient.request({
    url: 'https://outlook.office.com/api/v2.0/me/messages',
    method: 'GET',
  });

  // Handle Outlook response
  const outlookEmails = outlookResponse.data.value;
  for (const email of outlookEmails) {
    const outlookContent = email.body.content;
    await processEmail(outlookContent);
  }
}

async function processEmail(content: string) {
  // Categorize email and add task to queue
  const category = categorizeEmail(content);
  await queue.add('categorize-email', { category });
}

function categorizeEmail(content: string): string {
  // Logic to categorize email based on content
  // Example implementation:
  if (content.includes('interested')) {
    return 'Interested';
  } else if (content.includes('more information')) {
    return 'More information';
  } else {
    return 'Not Interested';
  }
}
