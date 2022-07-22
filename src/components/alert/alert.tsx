import { useEffect, useMemo, useRef, useState } from 'react';
import cx from 'classnames';
import React from 'react';

export interface AlertProps {
  children: React.ReactNode;
  classNames?: string;
  collapseTitle?: JSX.Element | string;
  onClose?: () => void;
  persist?: boolean;
  type: "success" | "warning" | "danger" | "info";
}

const Alert = (props: AlertProps) => {
  const [show, setShow] = useState(true);
  const collapsedContainerRef = useRef<HTMLDivElement>();
  const iconRef = useRef<HTMLElement>();

  useEffect(() => {
    if (!show && props.onClose) {
      props.onClose();
    }
  }, [show])

  const iconClass = useMemo(() => {
    switch (props.type) {
      case "success":
        return "check-circle";
      case "warning":
        return "exclamation-triangle"
      case "danger":
        return "exclamation-circle"
      case "info":
        return "info-circle"
    }
  }, [props.type])

  if (!show) {
    return null
  }

  const clostAlert = () => {
    setShow(false);
  }

  return (
    <div
      className={cx({
        "alert": true,
        [props.type]: true,
      })}  
    >

    </div>
  )
}

export default Alert