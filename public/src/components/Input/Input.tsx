// import { useState } from "react";

// interface Props {
//   width: number,
//   type: string,
//   name: string,
//   id: string,
//   placeholder: string,
//   pattern: string,
//   label: string,
//   errormessage: string,
//   icon: string,
//   required: boolean
// }

// export const Input = ({ width, type, name, id, pattern, label, errormessage, icon, required }: Props) => {

//   const [isFilled, setIsFilled] = useState(false);

//   return (
//     <>
//       <form noValidate>
//         <div className="relative group" style={{ width: `${width}px` }}>
//           <input
//             type={type}
//             name={name}
//             id={id}
//             placeholder=" "
//             className="block
//             py-2.5
//             px-2
//             w-full
//             body-text-regular
//             text-gray-500
//             bg-transparent
//             border-2
//             rounded-lg
//             border-gray-400
//             appearance-none
//             focus:border-primary-500
//             focus:outline-none
//             [&:not(:placeholder-shown):not(:focus):invalid]:border-danger-500
//             peer"
//             pattern={pattern}
//             required={required}
//             onInput={(event) => setIsFilled(!!event.target.value)}
//           />
//           <label
//             htmlFor={name}
//             className={`px-1
//             absolute
//             body-text-medium
//             text-gray-300
//             left-2
//             duration-300
//             transform
//             -translate-y-6
//             scale-75
//             top-3
//             bg-white
//             origin-[0]
//             peer-focus:left-2
//             peer-focus:font-medium
//             peer-focus:text-primary-500
//             peer-placeholder-shown:scale-100
//             peer-placeholder-shown:translate-y-0
//             peer-focus:scale-75
//             peer-focus:-translate-y-6
//             peer-[&:not(:placeholder-shown):not(:focus):invalid]:text-danger-500
//             ${isFilled ? 'text-gray-500' : ''}`}
//           >
//             {label}
//           </label>
//           <p
//             className="absolute
//             text-danger-500
//             mt-2
//             ml-2
//             text-sm
//             hidden
//             peer-[&:not(:placeholder-shown):not(:focus):invalid]:block"
//           >
//             {errormessage}
//           </p>
//           <button
//             className="absolute
//             inset-y-0
//             right-0
//             flex
//             items-center
//             p-3"
//           >
//             <img src={icon} alt="" />
//           </button>
//         </div>
//       </form>
//     </>
//   );
// }

// export const Input2 = ({ width, label, type, name, id, placeholder, pattern, errormessage, icon }: Props) => {
//   return (
//     <>
//       <form noValidate>
//         <div className="relative group flex flex-col" style={{ width: `${width}px` }}>
//           <label
//             htmlFor={name}
//             className="block
//             relative
//             mb-2
//             label-text-bold
//             text-gray-500
//             "
//           >
//             {label}
//           </label>
//           <div className="block relative">
//             <input
//               type={type}
//               name={name}
//               id={id}
//               placeholder={placeholder}
//               className="block
//               py-2.5
//               px-2
//               w-full
//               body-text-regular
//               text-gray-500
//               bg-transparent
//               border-2
//               rounded-lg
//               border-gray-400
//               appearance-none
//               focus:border-primary-500
//               focus:outline-none
//               [&:not(:placeholder-shown):not(:focus):invalid]:border-danger-500
//               peer"
//               pattern={pattern}
//               required
//             />
//             <p
//               className="absolute
//               text-danger-500
//               mt-2
//               ml-2
//               text-sm
//               hidden
//               peer-[&:not(:placeholder-shown):not(:focus):invalid]:block"
//             >
//               {errormessage}
//             </p>
//             <span
//               className="absolute
//               inset-y-0
//               right-0
//               flex
//               items-center
//               p-3"
//             >
//               <img src={icon} alt="" />
//             </span>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// }
