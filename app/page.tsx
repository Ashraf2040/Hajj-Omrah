"use client";

import { Message, experimental_useAssistant as useAssistant } from "ai/react";
import { useEffect, useRef, useState } from "react";
import QuestionCard from "./components/QuestionCard";

export default function Chat() {
  const { status, messages, input, submitMessage, handleInputChange, error } =
    useAssistant({
      api: "/api/assistant",
    });
  const askedQuestions1 = [
    "ماهي مناسك الحج؟",
    "ماهي مناسك العمرة؟",
    "ماهو ميقات اهل المدينة؟",
    "ماهي شروط حج التمتع ؟",
    "كيفية لبس الاحرام ؟",
    "مالفرق بين التحلل الاكبر والاصغر؟",
  ];
  const askedQuestions2 = [
    "ماهي مناسك الحج1؟",
    "ماهي مناسك العمرة1؟",
    "ماهو ميقات اهل المدينة1؟",
    "ماهي شروط حج التمتع1 ؟",
    "كيفية لبس الاحرام1 ؟",
    "مالفرق بين التحلل الاكبر والاصغر1؟",
  ];
  const newArray = askedQuestions1.concat(askedQuestions2);

  const [merged, setMerged] = useState(false);

  const [questionArray, setQuestionArray] = useState(askedQuestions1);

  // When status changes to accepting messages, focus the input:
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (status === "awaiting_message") {
      inputRef.current?.focus();
    }
  }, [status]);
  console.log(messages);
  // const roleToColorMap: Record<Message["role"], string> = {
  //   system: "red",
  //   user: "black",
  //   assistant: "green",
  //   function: "",
  //   data: "",
  //   tool: "",
  // };

  // if(!merged){
  //   setQuestionArray(newArray)
  // }
  // else{
  //   setQuestionArray(askedQuestions1)
  // }

  const handleClick = () => {
    if (merged) {
      setQuestionArray(newArray);
    } else {
      setQuestionArray(askedQuestions1);
    }
    setMerged(!merged)
  };

  return (
    <div className=" flex flex-col lg:mx-20 items-center  py-4   ">
      <form onSubmit={submitMessage} className="flex items-center   w-2/5 /">
        <input
          ref={inputRef}
          disabled={status !== "awaiting_message"}
          className="  p-4  border border-gray-300 w-full rounded shadow-xl"
          value={input}
          placeholder="Type your question..."
          onChange={handleInputChange}
        />
        <button className="p-4 bg-black rounded-r-lg -ml-2 font-bold text-white px-4 ">
          Ask
        </button>
      </form>
      <h2 className="text-md font-semibold my-4">Few examples to ask</h2>
      <div className="FAQ w-4/5  grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {questionArray.map((question) => (
          <QuestionCard key={question} question={question} />
        ))}
      </div>
      <div className=" 0 w-4/5 flex justify-center items-center py-4 ">
        <button
          className="flex  gap-1 w-fit  font-semibold  text-green-900"
          onClick={handleClick}
        >
        {!merged ?"Less examples":"More examples"}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6  h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </button>
      </div>

      <div className=" p-12 rounded-lg min-h-40 w-full flex flex-col  ">
        <div>
          {messages.map((m: Message) => (
            <div key={m.id} className="relative">
              <>
                <div className="flex gap-2 items-center mb-10 ">
                  <span className="text-3xl">
                    {m.role === "user" ? "🤵" : ""}
                  </span>
                  <span className="bg-[#CDE4D6] px-8 py-2 rounded-r-lg rounded-tl-xl  ">
                    {m.role === "user" && m.content}
                  </span>
                </div>
                <div>
                  {m.role === "assistant" && (
                    <p className="whitespace-pre-wrap bg-white self-center rounded-lg mt-10 p-10">
                      {m.content}
                    </p>
                  )}
                </div>
              </>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

//  {/* {error != null && (
//         <div className="relative bg-red-500 text-white px-6 py-4 rounded-md">
//           <span className="block sm:inline">
//             Error: {(error as any).toString()}
//           </span>
//         </div>
//       )} */}

/* {messages.map((m: Message) => (
          // <div
          //   key={m.id}
          //   className="whitespace-pre-wrap flex flex-col px-40 flex-right"
          //   // style={{ color: roleToColorMap[m.role] }}
          // >
          //   {" "}
          
          //     {" "}
          //     <div className="bg-blue-600">
          //       {`${m.role}: `} {m.role !== "data" && m.content}
          //     </div>
         
          //   {m.role === "data" && (
          //     <div className="">
          //       {(m.data as any).description}
          //       <br />
          //       <pre className={"bg-gray-200"}>
          //         {JSON.stringify(m.data, null, 2)}
          //       </pre>
          //     </div>
          //   )}
          //   <br />
          //   <br />
          // </div>
        ))} */

// {/* {status === "in_progress" && (
//   <div className="h-8 w-full  p-2 mb-8 bg-gray-300 dark:bg-gray-600 rounded-lg animate-pulse" />
// )} */}
