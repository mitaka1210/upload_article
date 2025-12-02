import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dimitard185@gmail.com",
    pass: process.env.NEWSLETTER_PASS,
  },
});

export async function sendNewsletter(to, subject, html) {
  await transporter.sendMail({
    from: '"Dimitar\'s Blog" <dimitard185@gmail.com>',
    to,
    subject,
    html,
  });
}
