import React from "react";
import { Phone } from "lucide-react";
import { CONTACT_INFO } from "../../constants/contact";
import { createTelLink } from "../../utils/formatPhoneNumber";

/**
 * CallButton Component
 * A reusable, accessible button for initiating phone calls
 *
 * @param {Object} props
 * @param {string} props.variant - Button style variant: 'primary', 'secondary', 'icon'
 * @param {string} props.className - Additional CSS classes
 * @param {Function} props.onClick - Optional click handler for analytics
 * @param {string} props.ariaLabel - Accessibility label
 * @param {React.ReactNode} props.children - Button content (optional)
 * @param {number} props.iconSize - Icon size in pixels
 */
const CallButton = ({
  variant = "primary",
  className = "",
  onClick,
  ariaLabel,
  children,
  iconSize = 20,
}) => {
  const handleClick = (e) => {
    // Track analytics if handler provided
    if (onClick) {
      onClick(e);
    }
    // The tel: link will handle the actual call
  };

  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-bold transition-all duration-300";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-2xl hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-primary/30",
    secondary:
      "bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-2xl hover:bg-gray-50 hover:border-primary/20 hover:scale-105 shadow-sm",
    icon: "p-3 text-primary hover:bg-primary/5 rounded-full",
  };

  const defaultAriaLabel = ariaLabel || "اتصل بالعيادة";

  return (
    <a
      href={createTelLink(CONTACT_INFO.PHONE)}
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      aria-label={defaultAriaLabel}
      title={defaultAriaLabel}
    >
      <Phone
        size={iconSize}
        aria-hidden="true"
        className={variant === "icon" ? "" : "text-primary"}
      />
      {children}
    </a>
  );
};

export default CallButton;
