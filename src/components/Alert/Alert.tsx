import Text from "@/components/Text";
import CheckCircle from "@/components/Icons/CheckCircle";
import AlertTriangle from "@/components/Icons/AlertTriangle";
import AlertCircle from "@/components/Icons/AlertCircle";
import InfoCircle from "@/components/Icons/InfoCircle";
import X from "@/components/Icons/X";
import styles from "./Alert.module.css";

type AlertVariant = "success" | "warning" | "error" | "info";

type AlertProps = {
  variant: AlertVariant;
  title?: string;
  children: React.ReactNode;
  onDismiss?: () => void;
  className?: string;
};

const icons: Record<AlertVariant, React.ReactNode> = {
  success: <CheckCircle size={18} />,
  warning: <AlertTriangle size={18} />,
  error: <AlertCircle size={18} />,
  info: <InfoCircle size={18} />,
};

export default function Alert({
  variant,
  title,
  children,
  onDismiss,
  className,
}: AlertProps) {
  const classes = [
    styles.alert,
    styles[`variant_${variant}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} role="alert">
      <span className={styles.icon}>{icons[variant]}</span>

      <div className={styles.body}>
        {title && (
          <Text as="span" variant="labelStrong" className={styles.title}>
            {title}
          </Text>
        )}
        <Text as="span" variant="bodySm">
          {children}
        </Text>
      </div>

      {onDismiss && (
        <button
          className={styles.dismiss}
          onClick={onDismiss}
          aria-label="Dismiss"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
