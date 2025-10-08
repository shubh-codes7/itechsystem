import { EmailEnqTemplate } from "@/components/EmailEnqTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY)

export default async function sendEnqMail({form}){
  try {
    const { data, error } = await resend.emails.send({
      from: 'I-Tech Contact Form <onboarding@resend.dev>',
      to: 'shubhamcodes7@gmail.com',
      subject: "New Enquiry from itechsystem.in",
      react: EmailEnqTemplate({name: form.name, mobile: form.mobile, message: form.message, requirement: form.requirement})
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}