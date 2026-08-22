// Worker principal — sert les fichiers statiques (public/index.html, etc.)
// et gère la route /api/contact (remplace l'ancien functions/api/contact.js
// de Pages Functions, qui ne fonctionne pas tel quel sur un Worker classique).

const DESTINATION_EMAIL = "prutopia.conseil@gmail.com";
const FROM_EMAIL = "landing@prutopia.net";

async function handleContact(request) {
  try {
    const contentType = request.headers.get("content-type") || "";

    let email = "";
    let message = "";

    if (contentType.includes("application/json")) {
      const body = await request.json();
      email = (body.email || "").trim();
      message = (body.message || "").trim();
    } else {
      const formData = await request.formData();
      email = (formData.get("email") || "").toString().trim();
      message = (formData.get("message") || "").toString().trim();
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ ok: false, error: "Email invalide." }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }

    const emailBody = {
      personalizations: [{ to: [{ email: DESTINATION_EMAIL, name: "Pr'Utopia" }] }],
      from: { email: FROM_EMAIL, name: "Formulaire Pr'Utopia" },
      reply_to: { email: email },
      subject: "Nouveau contact — Pr'Utopia",
      content: [
        {
          type: "text/plain",
          value: `Nouveau message depuis la landing Pr'Utopia\n\nEmail du contact : ${email}\n\nMessage :\n${message || "(aucun message)"}\n`,
        },
      ],
    };

    const res = await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(emailBody),
    });

    if (!res.ok) {
      return new Response(JSON.stringify({ ok: false, error: "Échec de l'envoi." }), {
        status: 502,
        headers: { "content-type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: "Erreur serveur." }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Route API contact
    if (url.pathname === "/api/contact" && request.method === "POST") {
      return handleContact(request);
    }

    // Tout le reste : servir les fichiers statiques (index.html, etc.)
    return env.ASSETS.fetch(request);
  },
};
