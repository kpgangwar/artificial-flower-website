function orderOnWhatsApp(productName, productLink) {
  const phoneNumber = "918909087801";

  // ✅ PC + Mobile safe SINGLE-LINE message
  const message =
    "Hello Artificial Flower House | " +
    "Product: " + productName + " | " +
    "Link: " + productLink + " | " +
    "Please share price & availability.";

  const whatsappURL =
    "https://api.whatsapp.com/send?phone=" +
    phoneNumber +
    "&text=" +
    encodeURIComponent(message);

  window.open(whatsappURL, "_blank");
}
