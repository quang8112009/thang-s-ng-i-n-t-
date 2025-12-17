import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Bạn là một giáo sư vật lý lỗi lạc, chuyên gia về quang học và điện từ trường.
Nhiệm vụ của bạn là giải thích các khái niệm về thang sóng điện từ (Electromagnetic Spectrum) cho người dùng bằng Tiếng Việt.
Giọng điệu: Thân thiện, dễ hiểu, khoa học nhưng không quá hàn lâm, sử dụng ví dụ thực tế.
Nếu người dùng hỏi về các bước sóng, tần số, ứng dụng, hoặc tác hại của tia Gamma, X, UV, Ánh sáng, Hồng ngoại, Vi ba, Vô tuyến, hãy trả lời chi tiết.
Câu trả lời nên ngắn gọn (dưới 150 từ) trừ khi được yêu cầu giải thích sâu.
`;

export const getPhysicsAnswer = async (question: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "Lỗi cấu hình: Thiếu API Key. Vui lòng kiểm tra biến môi trường.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Using gemini-2.5-flash for speed and efficiency for this kind of Q&A
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: question,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "Xin lỗi, tôi không thể tạo câu trả lời lúc này.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Đã xảy ra lỗi khi kết nối với trợ lý AI. Vui lòng thử lại sau.";
  }
};