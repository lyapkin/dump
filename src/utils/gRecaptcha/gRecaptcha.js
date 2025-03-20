export const getGRecaptchaToken = async (action) => {
  return new Promise((resolve) => {
    grecaptcha.ready(async () => {
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

      const token = await grecaptcha.execute(siteKey, { action });
      resolve(token);
    });
  });
};
