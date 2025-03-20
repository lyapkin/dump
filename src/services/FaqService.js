export const BASE_URL = process.env.API_URL;

export default class FaqService {
  static async faq() {
    try {
      const response = await fetch(`${BASE_URL}/faq/`, {
        next: { revalidate: 60 },
      });
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}
