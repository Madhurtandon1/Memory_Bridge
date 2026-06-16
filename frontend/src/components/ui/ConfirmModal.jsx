// export default function ConfirmModal({
//   isOpen,
//   title,
//   message,
//   confirmText = "Delete",
//   cancelText = "Cancel",
//   onConfirm,
//   onCancel
// }) {

//   if (!isOpen) return null;

//   return (

//     <div
//       className="
//       fixed
//       inset-0
//       bg-black/50
//       flex
//       items-center
//       justify-center
//       z-50"
//     >

//       <div
//         className="
//         bg-white
//         rounded-3xl
//         p-8
//         max-w-md
//         w-full
//         shadow-xl"
//       >

//         <h2
//           className="
//           text-2xl
//           font-bold
//           mb-3"
//         >
//           {title}
//         </h2>

//         <p
//           className="
//           text-gray-600
//           mb-6"
//         >
//           {message}
//         </p>

//         <div
//           className="
//           flex
//           justify-end
//           gap-3"
//         >

//           <button
//             onClick={onCancel}
//             className="
//             px-5
//             py-2
//             border
//             rounded-xl"
//           >
//             {cancelText}
//           </button>

//           <button
//             onClick={onConfirm}
//             className="
//             px-5
//             py-2
//             bg-red-500
//             hover:bg-red-600
//             text-white
//             rounded-xl"
//           >
//             {confirmText}
//           </button>

//         </div>

//       </div>

//     </div>

//   );

// }

// export default function ConfirmModal({
//   isOpen,
//   title,
//   message,
//   confirmText = "Delete",
//   cancelText = "Cancel",
//   onConfirm,
//   onCancel
// }) {

//   if (!isOpen) return null;

//   return (
//     <div
//       className="
//         fixed
//         inset-0
//         bg-brownie/40
//         backdrop-blur-sm
//         flex
//         items-center
//         justify-center
//         px-4
//         z-50
//         animate-fade-in"
//       onClick={onCancel} // Closes modal when user clicks on background overlay
//     >
//       {/* Modal Box */}
//       <div
//         className="
//           bg-white
//           rounded-2xl
//           border
//           border-caramel/10
//           p-5
//           sm:p-8
//           max-w-md
//           w-full
//           shadow-xl
//           transform
//           transition-all
//           scale-100"
//         onClick={(e) => e.stopPropagation()} // Stop background click bubbling inside content box
//       >
//         {/* Title */}
//         <h2
//           className="
//             font-display
//             text-xl
//             sm:text-2xl
//             font-bold
//             text-brownie
//             mb-2.5
//             tracking-tight"
//         >
//           {title}
//         </h2>

//         {/* Message */}
//         <p
//           className="
//             text-sm
//             sm:text-base
//             text-coffee/85
//             leading-relaxed
//             mb-6
//             font-sans"
//         >
//           {message}
//         </p>

//         {/* Action Controls Group: Full width stacked on mobile, row on desktop */}
//         <div
//           className="
//             flex
//             flex-col-reverse
//             xs:flex-row
//             justify-end
//             gap-2.5"
//         >
//           <button
//             onClick={onCancel}
//             className="
//               w-full
//               xs:w-auto
//               px-5
//               py-2.5
//               border
//               border-caramel/20
//               hover:bg-caramel/5
//               text-brownie
//               font-semibold
//               text-sm
//               rounded-xl
//               transition-colors"
//           >
//             {cancelText}
//           </button>

//           <button
//             onClick={onConfirm}
//             className="
//               w-full
//               xs:w-auto
//               px-5
//               py-2.5
//               bg-red-600
//               hover:bg-red-700
//               text-white
//               font-bold
//               text-sm
//               rounded-xl
//               shadow-sm
//               transition-colors"
//           >
//             {confirmText}
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }



// export default function ConfirmModal({
//   isOpen,
//   title,
//   message,
//   confirmText = "Delete",
//   cancelText = "Cancel",
//   onConfirm,
//   onCancel
// }) {

//   if (!isOpen) return null;

//   return (
//     /* FIXED VIEWPORT VIEWPORT CENTER MAPPING:
//       - Forced 'flex items-center justify-center' straight onto the fixed backdrop node.
//       - This forces the inner content card box to lock right to the middle of the current screen view.
//     */
//     <div
//       className="
//         fixed
//         inset-0
//         bg-brownie/40
//         backdrop-blur-sm
//         flex
//         items-center
//         justify-center
//         px-4
//         z-50
//         animate-fade-in"
//       onClick={onCancel} // Closes modal when user clicks on background overlay
//     >
//       {/* Modal Box */}
//       <div
//         className="
//           bg-white
//           rounded-2xl
//           border
//           border-caramel/10
//           p-5
//           sm:p-8
//           max-w-md
//           w-full
//           shadow-xl
//           transform
//           transition-all
//           scale-100"
//         onClick={(e) => e.stopPropagation()} // Stop background click bubbling inside content box
//       >
//         {/* Title */}
//         <h2
//           className="
//             font-display
//             text-xl
//             sm:text-2xl
//             font-bold
//             text-brownie
//             mb-2.5
//             tracking-tight"
//         >
//           {title}
//         </h2>

//         {/* Message Content Container Block (Supports text or raw layout nodes) */}
//         <div
//           className="
//             text-sm
//             sm:text-base
//             text-coffee/85
//             leading-relaxed
//             mb-6
//             font-sans"
//         >
//           {message}
//         </div>

//         {/* Action Controls Group */}
//         <div
//           className="
//             flex
//             flex-col-reverse
//             sm:flex-row
//             justify-end
//             gap-2.5"
//         >
//           <button
//             onClick={onCancel}
//             className="
//               w-full
//               sm:w-auto
//               px-5
//               py-2.5
//               border
//               border-caramel/20
//               hover:bg-caramel/5
//               text-brownie
//               font-semibold
//               text-sm
//               rounded-xl
//               transition-colors"
//           >
//             {cancelText}
//           </button>

//           <button
//             onClick={onConfirm}
//             className="
//               w-full
//               sm:w-auto
//               px-5
//               py-2.5
//               bg-red-600
//               hover:bg-red-700
//               text-white
//               font-bold
//               text-sm
//               rounded-xl
//               shadow-sm
//               transition-colors"
//           >
//             {confirmText}
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }


export default function ConfirmModal({
  isOpen,
  title,
  message,
  confirmText = "Delete",
  cancelText = "Cancel",
  onConfirm,
  onCancel
}) {

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        bg-brownie/40
        backdrop-blur-sm
        flex
        items-center
        justify-center
        px-4
        z-50
        animate-fade-in"
      onClick={onCancel} // Closes modal when user clicks on background overlay
    >
      {/* Modal Box */}
      <div
        className="
          bg-white
          rounded-2xl
          border
          border-caramel/10
          p-5
          sm:p-8
          max-w-md
          w-full
          shadow-xl
          transform
          transition-all
          scale-100"
        onClick={(e) => e.stopPropagation()} // Stop background click bubbling inside content box
      >
        {/* Title */}
        <h2
          className="
            font-display
            text-xl
            sm:text-2xl
            font-bold
            text-brownie
            mb-2.5
            tracking-tight"
        >
          {title}
        </h2>

        {/* Message Content Container Block (Supports text or custom raw option grids seamlessly) */}
        <div
          className="
            text-sm
            sm:text-base
            text-coffee/85
            leading-relaxed
            mb-6
            font-sans"
        >
          {message}
        </div>

        {/* Action Controls Group */}
        <div
          className="
            flex
            flex-col-reverse
            sm:flex-row
            justify-end
            gap-2.5"
        >
          <button
            type="button"
            onClick={onCancel}
            className="
              w-full
              sm:w-auto
              px-5
              py-2.5
              border
              border-caramel/20
              hover:bg-caramel/5
              text-brownie
              font-semibold
              text-sm
              rounded-xl
              transition-colors"
          >
            {cancelText}
          </button>

          {/* 
            FIXED CONDITIONAL BUTTON STATE:
            - Safe tracking rule checks for explicit confirmText variables.
            - Prevents empty red artifact buttons from showing up on option menus.
          */}
          {confirmText && (
            <button
              type="button"
              onClick={onConfirm}
              className="
                w-full
                sm:w-auto
                px-5
                py-2.5
                bg-red-600
                hover:bg-red-700
                text-white
                font-bold
                text-sm
                rounded-xl
                shadow-sm
                transition-colors"
            >
              {confirmText}
            </button>
          )}
        </div>

      </div>
    </div>
  );
}