import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY)

export default async function sendMail({ form}){
  console.log("Send mail called");
  try {
    const { data, error } = await resend.emails.send({
      from: 'Website <onboarding@resend.dev>',
      to: 'shubhamcodes7@gmail.com',
      subject: "New Enquiry from itechsystem.in",
      react: EmailTemplate({name: form.name, mobile: form.mobile, location: form.location, course: form.course})
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}