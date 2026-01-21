import React from "react";
import {
  User,
  Phone,
  UserRound,
  Calendar,
  Clock,
  MessageSquare,
  CalendarCheck,
} from "lucide-react";
import { useAppointmentForm } from "../hooks/useAppointmentForm";
import { useLanguage } from "../hooks/useLanguage";

const AppointmentForm = () => {
  const { t } = useLanguage();
  const { formData, errors, isSubmitting, handleChange, handleSubmit } =
    useAppointmentForm();

  return (
    <div
      className="max-w-2xl mx-auto p-8 md:p-12 bg-white rounded-3xl shadow-xl border border-gray-100"
      dir="rtl"
    >
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center gap-3 mb-4">
          <CalendarCheck className="text-primary" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t.form.title}
          </h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Phone Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="flex items-center gap-2 text-sm font-semibold text-gray-700"
            >
              <User size={18} className="text-primary" />
              {t.form.fields.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.form.fields.placeholders.name}
              className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all duration-200 outline-none focus:ring-2 bg-gray-50 focus:bg-white ${
                errors.name
                  ? "border-red-300 focus:ring-red-100 placeholder-red-300"
                  : "border-gray-200 focus:border-primary focus:ring-primary/20"
              }`}
            />
            {errors.name && (
              <span className="text-xs text-red-500 mr-1 font-medium">
                {errors.name}
              </span>
            )}
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="flex items-center gap-2 text-sm font-semibold text-gray-700"
            >
              <Phone size={18} className="text-primary" />
              {t.form.fields.phone}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t.form.fields.placeholders.phone}
              className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all duration-200 outline-none focus:ring-2 bg-gray-50 focus:bg-white ${
                errors.phone
                  ? "border-red-300 focus:ring-red-100 placeholder-red-300"
                  : "border-gray-200 focus:border-primary focus:ring-primary/20"
              }`}
            />
            {errors.phone && (
              <span className="text-xs text-red-500 mr-1 font-medium">
                {errors.phone}
              </span>
            )}
          </div>
        </div>

        {/* Doctor Selection */}
        <div className="space-y-2">
          <label
            htmlFor="doctor"
            className="flex items-center gap-2 text-sm font-semibold text-gray-700"
          >
            <UserRound size={18} className="text-primary" />
            {t.form.fields.doctor}
          </label>
          <div className="relative group">
            <select
              id="doctor"
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className={`w-full px-4 py-3.5 pl-12 rounded-xl border-2 transition-all duration-300 outline-none focus:ring-4 appearance-none bg-gradient-to-br from-gray-50 to-white focus:from-white focus:to-white cursor-pointer hover:border-primary/50 ${
                errors.doctor
                  ? "border-red-300 focus:ring-red-100 focus:border-red-400"
                  : "border-gray-200 focus:border-primary focus:ring-primary/20 focus:shadow-lg focus:shadow-primary/10"
              }`}
            >
              <option value="" disabled className="text-gray-400">
                {t.form.fields.doctorPlaceholder}
              </option>
              {t.doctors &&
                t.doctors.map((dr, idx) => (
                  <option
                    key={idx}
                    value={dr.name}
                    className="py-3 px-4 bg-white hover:bg-primary hover:text-white cursor-pointer transition-colors duration-200"
                  >
                    {dr.name}
                  </option>
                ))}
            </select>
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-300 group-focus-within:rotate-180">
              <svg
                className="w-5 h-5 text-primary transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          {errors.doctor && (
            <span className="text-xs text-red-500 mr-1 font-medium">
              {errors.doctor}
            </span>
          )}
        </div>

        {/* Date and Time Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Date Picker */}
          <div className="space-y-2">
            <label
              htmlFor="date"
              className="flex items-center gap-2 text-sm font-semibold text-gray-700"
            >
              <Calendar size={18} className="text-primary" />
              {t.form.fields.date}
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all duration-200 outline-none focus:ring-2 bg-gray-50 focus:bg-white ${
                errors.date
                  ? "border-red-300 focus:ring-red-100"
                  : "border-gray-200 focus:border-primary focus:ring-primary/20"
              }`}
            />
            {errors.date && (
              <span className="text-xs text-red-500 mr-1 font-medium">
                {errors.date}
              </span>
            )}
          </div>

          {/* Time Selection */}
          <div className="space-y-2">
            <label
              htmlFor="time"
              className="flex items-center gap-2 text-sm font-semibold text-gray-700"
            >
              <Clock size={18} className="text-primary" />
              {t.form.fields.time}
            </label>
            <div className="relative group">
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={`w-full px-4 py-3.5 pl-12 rounded-xl border-2 transition-all duration-300 outline-none focus:ring-4 appearance-none bg-gradient-to-br from-gray-50 to-white focus:from-white focus:to-white cursor-pointer hover:border-primary/50 ${
                  errors.time
                    ? "border-red-300 focus:ring-red-100 focus:border-red-400"
                    : "border-gray-200 focus:border-primary focus:ring-primary/20 focus:shadow-lg focus:shadow-primary/10"
                }`}
              >
                <option value="" disabled className="text-gray-400">
                  {t.form.fields.timePlaceholder}
                </option>
                {/* <option
                  value={t.form.fields.times.morning}
                  className="py-3 px-4 bg-white hover:bg-primary hover:text-white cursor-pointer transition-colors duration-200"
                >
                  {t.form.fields.times.morning}
                </option> */}
                <option
                  value={t.form.fields.times.afternoon}
                  className="py-3 px-4 bg-white hover:bg-primary hover:text-white cursor-pointer transition-colors duration-200"
                >
                  {t.form.fields.times.afternoon}
                </option>
                <option
                  value={t.form.fields.times.evening}
                  className="py-3 px-4 bg-white hover:bg-primary hover:text-white cursor-pointer transition-colors duration-200"
                >
                  {t.form.fields.times.evening}
                </option>
              </select>
              <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-300 group-focus-within:rotate-180">
                <svg
                  className="w-5 h-5 text-primary transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            {errors.time && (
              <span className="text-xs text-red-500 mr-1 font-medium">
                {errors.time}
              </span>
            )}
          </div>
        </div>

        {/* Notes Field */}
        <div className="space-y-2">
          <label
            htmlFor="notes"
            className="flex items-center gap-2 text-sm font-semibold text-gray-700"
          >
            <MessageSquare size={18} className="text-primary" />
            {t.form.fields.message}
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            value={formData.notes}
            onChange={handleChange}
            placeholder={t.form.fields.messagePlaceholder}
            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none resize-none bg-gray-50 focus:bg-white"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`group relative w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden mt-8 ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-primary to-accent hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/30"
          }`}
        >
          {isSubmitting ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            <>
              <div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                aria-hidden="true"
              ></div>
              <CalendarCheck size={20} />
              <span className="text-lg">{t.form.submit}</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
