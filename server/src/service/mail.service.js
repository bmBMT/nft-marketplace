import nodemailer from 'nodemailer'

class MailService {

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    })
  }

  async sendMail(to, subject = '', text = '', html = '') {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: subject,
      text: text,
      html: html
    })
  }
}

export default new MailService();