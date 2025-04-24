import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full flex flex-col items-center px-4">
      {/* Tiêu đề ngoài container */}
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Contact</h2>

      {/* Container thông tin */}
      <div className="bg-white text-gray-700 px-8 py-10 rounded-2xl w-full max-w-4xl border border-gray-200 shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Email */}
          <div className="flex items-center gap-4">
            <Mail className="w-5 h-5 text-blue-500" />
            <a
              href="mailto:nguyenphilong.dev@gmail.com"
              className="hover:underline font-medium"
            >
              nguyenphilong.dev@gmail.com
            </a>
          </div>

          {/* Số điện thoại */}
          <div className="flex items-center gap-4">
            <Phone className="w-5 h-5 text-green-500" />
            <a
              href="tel:+84363291823"
              className="hover:underline font-medium"
            >
              +84 363 291 823
            </a>
          </div>

          {/* Địa chỉ */}
          <div className="flex items-center gap-4">
            <MapPin className="w-5 h-5 text-red-500" />
            <span className="font-medium">Ho Chi Minh City, Vietnam</span>
          </div>

          {/* Địa chỉ thêm */}
          <div className="flex items-center gap-4">
            <MapPin className="w-5 h-5 text-red-500" />
            <span className="font-medium">My Tuong 2, Nhon Hai, Ninh Hai, Ninh Thuan, Vietnam</span>
          </div>
        </div>
      </div>
    </div>
  );
}
