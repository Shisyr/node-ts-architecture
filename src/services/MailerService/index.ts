import SendMailRequest from "../../requests/SendMailRequest";
import nodemailer, {TestAccount} from 'nodemailer';

let instance: MailerService | null;
class MailerService {

  private account: TestAccount;
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  async sendMail(sendMailRequest: SendMailRequest) {
    if (!this.account) {
      this.account = await nodemailer.createTestAccount();
    }
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: this.account.user,
        pass: this.account.pass
      }
    });

    const info = await transporter.sendMail({
      from: '<admin@example.com>',
      to: sendMailRequest.to,
      subject: sendMailRequest.subject,
      text: sendMailRequest.text,
      html: sendMailRequest.html
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }

  static getMailerService() {
    return new MailerService();
  }

}

export default MailerService;
