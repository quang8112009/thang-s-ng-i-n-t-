import { SpectrumBand, SpectrumType } from './types';

export const SPECTRUM_DATA: SpectrumBand[] = [
  {
    id: SpectrumType.GAMMA,
    name: "Tia Gamma",
    frequencyRange: "> 10^19 Hz",
    wavelengthRange: "< 10^-12 m",
    energy: "Rất cao",
    description: "Sóng điện từ có tần số cao nhất và bước sóng ngắn nhất. Mang năng lượng cực lớn, sinh ra từ phản ứng hạt nhân.",
    applications: ["Điều trị ung thư (Dao Gamma)", "Khử trùng thiết bị y tế", "Nghiên cứu thiên văn học"],
    dangers: ["Gây tổn thương tế bào và DNA nghiêm trọng", "Gây ung thư hoặc tử vong nếu phơi nhiễm cao"],
    color: "#8b5cf6", // Violet-800
    startWavelength: 0,
    endWavelength: 10
  },
  {
    id: SpectrumType.XRAY,
    name: "Tia X",
    frequencyRange: "10^16 - 10^19 Hz",
    wavelengthRange: "10^-8 - 10^-12 m",
    energy: "Cao",
    description: "Có khả năng xuyên qua mô mềm nhưng bị chặn lại bởi xương và kim loại.",
    applications: ["Chụp X-quang y tế", "Kiểm tra an ninh sân bay", "Nghiên cứu cấu trúc tinh thể"],
    dangers: ["Gây tổn thương tế bào", "Tăng nguy cơ ung thư nếu tiếp xúc nhiều"],
    color: "#6366f1", // Indigo-500
    startWavelength: 10,
    endWavelength: 25
  },
  {
    id: SpectrumType.UV,
    name: "Tử Ngoại (UV)",
    frequencyRange: "10^15 - 10^16 Hz",
    wavelengthRange: "10^-7 - 10^-8 m",
    energy: "Trung bình cao",
    description: "Bức xạ từ mặt trời, mắt thường không nhìn thấy được.",
    applications: ["Tiệt trùng nước và không khí", "Phát hiện tiền giả", "Tổng hợp Vitamin D"],
    dangers: ["Cháy nắng", "Ung thư da", "Đục thủy tinh thể"],
    color: "#a855f7", // Purple-500
    startWavelength: 25,
    endWavelength: 40
  },
  {
    id: SpectrumType.VISIBLE,
    name: "Ánh sáng nhìn thấy",
    frequencyRange: "4x10^14 - 7.5x10^14 Hz",
    wavelengthRange: "380 nm - 760 nm",
    energy: "Trung bình",
    description: "Phần duy nhất của quang phổ mà mắt người có thể nhìn thấy. Bao gồm 7 màu cầu vồng: Đỏ, Cam, Vàng, Lục, Lam, Chàm, Tím.",
    applications: ["Thị giác", "Nhiếp ảnh", "Quang hợp ở thực vật", "Truyền dẫn cáp quang"],
    dangers: ["An toàn ở cường độ tự nhiên", "Cường độ laser cao gây hỏng mắt"],
    color: "linear-gradient(90deg, violet, indigo, blue, green, yellow, orange, red)",
    startWavelength: 40,
    endWavelength: 55
  },
  {
    id: SpectrumType.INFRARED,
    name: "Hồng Ngoại",
    frequencyRange: "10^11 - 10^14 Hz",
    wavelengthRange: "10^-3 - 10^-6 m",
    energy: "Thấp",
    description: "Cảm nhận dưới dạng nhiệt. Mọi vật có nhiệt độ đều phát ra tia hồng ngoại.",
    applications: ["Điều khiển từ xa (Remote)", "Camera nhiệt", "Bếp hồng ngoại", "Vật lý trị liệu"],
    dangers: ["Gây bỏng da nếu cường độ cao"],
    color: "#ef4444", // Red-500
    startWavelength: 55,
    endWavelength: 70
  },
  {
    id: SpectrumType.MICROWAVE,
    name: "Vi Ba",
    frequencyRange: "10^9 - 10^11 Hz",
    wavelengthRange: "10^-1 - 10^-3 m",
    energy: "Thấp",
    description: "Sóng được sử dụng rộng rãi trong viễn thông và nấu ăn.",
    applications: ["Lò vi sóng", "Radar", "Truyền hình vệ tinh", "Wifi"],
    dangers: ["Gây nóng mô cơ thể", "Có thể gây đục thủy tinh thể nếu tiếp xúc trực tiếp cường độ lớn"],
    color: "#f97316", // Orange-500
    startWavelength: 70,
    endWavelength: 85
  },
  {
    id: SpectrumType.RADIO,
    name: "Sóng Vô Tuyến",
    frequencyRange: "< 10^9 Hz",
    wavelengthRange: "> 1 m (đến hàng km)",
    energy: "Rất thấp",
    description: "Sóng có bước sóng dài nhất, truyền đi xa nhất trong khí quyển.",
    applications: ["Phát thanh (Radio AM/FM)", "Truyền hình", "Mạng di động", "Thiên văn vô tuyến"],
    dangers: ["Được coi là an toàn", "Chưa có bằng chứng rõ ràng về tác hại lâu dài"],
    color: "#eab308", // Yellow-500
    startWavelength: 85,
    endWavelength: 100
  }
];