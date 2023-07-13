import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  sendEmail(email: string, content: string): boolean {
    if (!email || !content) return false;

    console.log('send email to: ', email);
    console.log('content: ', content);
    
    return true;
  }
}
