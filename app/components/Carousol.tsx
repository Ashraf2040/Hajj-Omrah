"use client"


import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="bg-neutral-800">
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div> */}
      <HorizontalScrollCarousel />
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div> */}
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "/1.png",
    title: "Mecca",
    id: 1,
  },
  {
    url: "/5.png",
    title: "Madinah",
    id: 2,
  },
  {
    url: "/6.png",
    title: "Haram",
    id: 3,
  },
  {
    url: "/1.png",
    title: "Mecca",
    id: 4,
  },
  {
    url: "/2.png",
    title: "Maddinah",
    id: 5,
  },
  {
    url: "/3.png",
    title: "Haram",
    id: 6,
  },
  
];





























// import React, { useState } from 'react'
// import CarouselItem from './CarouselItem'
// import { Key } from 'lucide-react';

// export default function Carousol() {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const items =[
//         {
//  title : "Mecca",
//    image : "/1.png",
//    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eos. Rerum obcaecati sapiente mollitia molestias ad repellendus consequatur adipisci modi enim natus quod, commodi dolore voluptatem provident qui vero dolor."

//     },
//         {
//  title : "Maddinah",
//    image : "/2.png",
//    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eos. Rerum obcaecati sapiente mollitia molestias ad repellendus consequatur adipisci modi enim natus quod, commodi dolore voluptatem provident qui vero dolor."

//     },
//         {
//  title : "Mecca1",
//    image : "/3.png",
//    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eos. Rerum obcaecati sapiente mollitia molestias ad repellendus consequatur adipisci modi enim natus quod, commodi dolore voluptatem provident qui vero dolor."

//     },
//         {
//  title : "Mecca2",
//    image : "/4.png",
//    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eos. Rerum obcaecati sapiente mollitia molestias ad repellendus consequatur adipisci modi enim natus quod, commodi dolore voluptatem provident qui vero dolor."

//     },
//         {
//  title : "Mecca3",
//    image : "/5.png",
//    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eos. Rerum obcaecati sapiente mollitia molestias ad repellendus consequatur adipisci modi enim natus quod, commodi dolore voluptatem provident qui vero dolor."

//     },
//         {
//  title : "Mecca4",
//    image : "/6.png",
//    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eos. Rerum obcaecati sapiente mollitia molestias ad repellendus consequatur adipisci modi enim natus quod, commodi dolore voluptatem provident qui vero dolor."

//     },
// ]

// const updateIndex = (newIndex :any) => {
//     if (newIndex < 0) {
//       newIndex = 0;
//     } else if (newIndex >= items.length) {
//       newIndex = items.length - 1;
//     }

//     setActiveIndex(newIndex);
//   };
//   return (
//     <div className='carousel'>
//       <div className='inner'
//       style={{ transform: `translate(-${activeIndex * 100}%)`}}
      
//       >

//         {items.map((item)=>{
//             return <CarouselItem item={item} key={item.title} width={"100%"} />
//         })}
//          <div className="carousel-buttons">
//         <button
//           className="button-arrow"
//           onClick={() => {
//             updateIndex(activeIndex - 1);
//           }}
//         >
//           <span className="material-symbols-outlined">arrow_back_ios</span>{" "}
//         </button>
//         <div className="indicators">
//           {items.map((item, index) => {
//             return (
//               <button
//                 className="indicator-buttons"
//                 onClick={() => {
//                   updateIndex(index);
                  
//                 }}
//                 key={index}
//               >
//                 <span
//                   className={`material-symbols-outlined ${
//                     index === activeIndex
//                       ? "indicator-symbol-active"
//                       : "indicator-symbol"
//                   }`}
//                 >
//                   radio_button_checked
//                 </span>
//               </button>
//             );
//           })}
//         </div>
//         <button
//           className="button-arrow"
//           onClick={() => {
//             updateIndex(activeIndex + 1);
//           }}
//         >
//           <span className="material-symbols-outlined">arrow_forward_ios</span>
//         </button>
//       </div>
//     </div>
//     </div>
//   )
// }
