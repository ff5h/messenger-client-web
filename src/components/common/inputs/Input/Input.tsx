import React from "react";
import styles from "./Input.module.scss";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  isError?: boolean;
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({ label, isError = false, helperText, ...props }) => {
  const className = isError ? styles.error : "";

  return (
    <>
      <div className={styles.label}>{label}</div>
      <input className={`${styles.input} ${className}`} {...props} />
      {isError && helperText && <div className={styles.helperText}>{helperText}</div>}
    </>
  );
};
