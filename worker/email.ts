import { Resend } from "resend";

export type ContactPayload = {
  name: string;
  email: string;
  license?: string;
  message: string;
};

const template = ({ name, email, license, message }: ContactPayload) =>
  `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>New Evymind Contact Request</title>
  </head>
  <body style="margin:0; padding:0; background-color:#0b0e14; font-family:Arial, Helvetica, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding:40px 16px;">
          <!-- Container -->
          <table
            width="100%"
            cellpadding="0"
            cellspacing="0"
            style="max-width:600px; background-color:#11151f; border-radius:16px; overflow:hidden;"
          >
            <!-- Header -->
            <tr>
              <td style="padding:32px 32px 16px;">
                <h1 style="margin:0; font-size:20px; color:#d1ff00;">
                  New contact request – Evymind
                </h1>
                <p style="margin:8px 0 0; font-size:14px; color:#9aa4b2;">
                  Someone reached out via the landing page.
                </p>
              </td>
            </tr>

            <!-- Divider -->
            <tr>
              <td style="padding:0 32px;">
                <hr style="border:none; border-top:1px solid #1f2937;" />
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding:24px 32px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding-bottom:12px;">
                      <strong style="color:#ffffff; font-size:14px;">Name</strong>
                      <div style="color:#cbd5e1; font-size:14px; margin-top:4px;">
                        {{name}}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding-bottom:12px;">
                      <strong style="color:#ffffff; font-size:14px;">Email</strong>
                      <div style="color:#cbd5e1; font-size:14px; margin-top:4px;">
                        {{email}}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding-bottom:12px;">
                      <strong style="color:#ffffff; font-size:14px;">License Number</strong>
                      <div style="color:#cbd5e1; font-size:14px; margin-top:4px;">
                        {{license}}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <strong style="color:#ffffff; font-size:14px;">Message</strong>
                      <div
                        style="
                          margin-top:8px;
                          padding:16px;
                          background-color:#0b0e14;
                          border-radius:12px;
                          color:#e5e7eb;
                          font-size:14px;
                          line-height:1.6;
                          white-space:pre-line;
                        "
                      >
                        {{message}}
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:24px 32px; background-color:#0b0e14;">
                <p style="margin:0; font-size:12px; color:#6b7280;">
                  This email was generated automatically from the Evymind landing page contact form.
                </p>
              </td>
            </tr>
          </table>
          <!-- /Container -->
        </td>
      </tr>
    </table>
  </body>
</html>
`
    .replace("{{name}}", name)
    .replace("{{email}}", email)
    .replace("{{license}}", license || "—")
    .replace("{{message}}", message);

export async function email(payload: ContactPayload): Promise<Response> {
  const resend = new Resend("re_Mk2gAQPp_JQqzFqN6MHqEBFojxovxDvBc");

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // TODO: update when domain is bound
      to: "spiderazkaban@gmail.com",
      replyTo: payload.email,
      subject: `New Evymind contact from ${payload.name}`,
      html: template(payload),
    });

    // Resend returned an API-level error
    if (error) {
      console.error("Resend error:", error);

      return new Response(JSON.stringify({ error: "Failed to send email" }), {
        status: 502, // Bad Gateway (external service failure)
        headers: { "Content-Type": "application/json" },
      });
    }

    // Success
    return new Response(JSON.stringify({ success: true, id: data?.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    // Network / runtime / unexpected failure
    console.error("Unexpected email failure:", err);

    return new Response(JSON.stringify({ error: "Internal email service error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
