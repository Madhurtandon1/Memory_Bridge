import {
  useEffect
} from "react";

import {
  X
} from "lucide-react";

export default function Modal({
  open,
  onClose,
  title,
  children
}) {

  useEffect(() => {

    document.body.style.overflow =
      open
        ? "hidden"
        : "";

    return () => {
      document.body.style.overflow =
        "";
    };

  }, [open]);

  if (!open) {

    return null;
  }

  return (

    <div
      className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center"
    >

      <div
        className="
        absolute
        inset-0
        bg-black/30"
        onClick={onClose}
      />

      <div
        className="
        relative
        bg-white
        rounded-3xl
        w-full
        max-w-lg
        p-6"
      >

        <div
          className="
          flex
          justify-between
          items-center
          mb-4"
        >

          <h2>
            {title}
          </h2>

          <button
            onClick={onClose}
          >

            <X size={18} />

          </button>

        </div>

        {children}

      </div>

    </div>
  );
}