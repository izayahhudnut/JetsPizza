'use client';
import { useState } from 'react';
import { useUIState, useActions } from 'ai/rsc';
import { AI } from '@/app/action';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import Image from 'next/image';
import AcUnitIcon from '@mui/icons-material/AcUnit';



export default function Budtender() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useUIState<typeof AI>();
  const { submitUserMessage } = useActions<typeof AI>();
  const [isLoading, setIsLoading] = useState(false);

  const handlePromptClick = async (promptText: string) => {
    setIsLoading(true);
    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: Date.now(),
        display: <div>{promptText}</div>,
        role: 'user',
      },
    ]);

    const responseMessage = await submitUserMessage(promptText);
    setMessages((currentMessages) => [...currentMessages, { ...responseMessage, role: 'assistant' }]);
      setIsLoading(false);
    
  };

  return (
    <div className="relative h-screen pt-10 max-w-[50rem] mx-auto pb-10">
      {messages.length === 0 ? (
        <div className="flex flex-col items-center h-full">
          <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-800 to-gray-700 text-transparent bg-clip-text">
            The Greenest Budtender
          </h2>
          <h2 className="text-xl text-center opacity-50 mt-2 mb-5"> Your expert guide in the world of CBD, helping you discover the perfect products tailored to your unique preferences and needs."</h2>
        <div className="grid grid-cols-4 mt-10 ">
        <div 
  className="space-y-2 p-2 mr-2 border rounded-xl transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
  onClick={() => window.open('https://thegreenest.com/reviews/green-roads-sweet-sleep-cbd-oil/', '_blank')}
>          <div className="w-50 h-50">
          <Image 
             src='/product1.jpeg'
             width={200}
             height={30}
             alt="Logo"
          />
            </div>
         
          <p className="font-bold text-gray-700">
            $69.99
          </p>
          <div className="bg-green-800 bg-opacity-80 p-1 inline-block rounded-xl">
            <p className="text-white text-xs">
              Staff Pick
            </p>
            </div>
            <h1 className="font-bold">
            Sweet Sleep
            </h1>
            <p className="text-gray-700 text-sm">
            Green Roads
            </p>
            <div className="flex flex-row space-x-2">

            <p className="text-gray-900 text-xs">
              CBD: 200MG
            </p>
              </div>

            </div>
            <div 
  className="space-y-2 p-2 mr-2 border rounded-xl transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
  onClick={() => window.open('https://thegreenest.com/reviews/green-roads-cbd-relax-bears/', '_blank')}
>          <div className="w-50 h-50">
          <Image 
             src='/product2.webp'
             width={200}
             height={30}
             alt="Logo"
          />
            </div>
         
          <p className="font-bold text-gray-700">
            $37.99
          </p>
          <div className="bg-green-800 bg-opacity-80 p-1 inline-block rounded-xl">
            <p className="text-white text-xs">
              Staff Pick
            </p>
            </div>
            <h1 className="font-bold">
            Relax Bears
            </h1>
            <p className="text-gray-600 text-sm">
            Green Roads
            </p>
            <div className="flex flex-row space-x-2">
            <p className="text-gray-900 text-xs">
              CBD: 300MG
            </p>
              </div>

            </div>
            <div 
  className="space-y-2 p-2 mr-2 border rounded-xl transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
  onClick={() => window.open('https://thegreenest.com/reviews/lord-jones-hemp-derived-cbd-tincture-full-spectrum-formula/', '_blank')}
>          <div className="w-50 h-50">
          <Image 
             src='/product3.jpeg'
             width={200}
             height={30}
             alt="Logo"
          />
            </div>
         
          <p className="font-bold text-gray-700">
            $12.00
          </p>
          <div className="bg-green-800 bg-opacity-80 p-1 inline-block rounded-xl">
            <p className="text-white text-xs">
              Staff Pick
            </p>
            </div>
            <h1 className="font-bold">
            Hemp Tincture
            </h1>
            <p className="text-gray-600 font-sm">
            Lord Jones
            </p>
            <div className="flex flex-row space-x-2">
            <p className="text-gray-900 text-xs">
              Hybrid
            </p>
            <p className="text-gray-900 text-xs">
              CBD: 200MG
            </p>
              </div>

            </div>
            <div 
  className="space-y-2 p-2 mr-2 border rounded-xl transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
  onClick={() => window.open('https://thegreenest.com/reviews/charlottes-web-cbd-gummies-sleep/', '_blank')}
>          <div className="w-50 h-50">
          <Image 
             src='/product4.jpeg'
             width={200}
             height={30}
             alt="Logo"
          />
            </div>
         
          <p className="font-bold text-gray-700">
            $30.00
          </p>
          <div className="bg-green-800 bg-opacity-80 p-1 inline-block rounded-xl">
            <p className="text-white text-xs">
              Staff Pick
            </p>
            </div>
            <h1 className="font-bold">
            Raspberry Gummies
            </h1>
            <p className="text-gray-700 text-sm">
            Charlottes Web
            </p>
            <div className="flex flex-row space-x-2">
            <p className="text-gray-900 text-xs">
              Hybrid
            </p>
            <p className="text-gray-900 text-xs">
              CBD: 10MG
            </p>
              </div>

            </div>
            
          </div>
        </div>
      ) : (
        <div className="h-full overflow-y-scroll space-y-5 pb-20 scrollbar-none">
         
          {messages.map((message) => (
            <div key={message.id} className="flex items-start">
              <div className="rounded-xl p-1 border flex items-center justify-center mr-3">
                {message.role === 'user' ? (
                  <div className="">
                    <PersonOutlineOutlinedIcon />
                  </div>
                ) : (
                  <div className=" text-green-800">
                    <GoogleIcon />
                  </div>
                )}
              </div>
              <div className="pt-1">
              {isLoading && message.role === 'assistant' && (
                <div className="animate-spin"><AcUnitIcon style={{ color: 'gray' }} /></div>
              )}
                <div>{message.display}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="absolute bottom-0 w-full mb-4 bg-white bg-opacity-60">
        <div className="grid grid-cols-2">
          {messages.length === 0 && (
            <>
              <button
                className="border py-3 mb-2 px-3 bg-custom-gray rounded-xl items-center inline-flex hover:bg-gray-200 to-white hover:cursor-pointer shadow-sm"
                onClick={() => handlePromptClick('What is the best product for me?')}
              >
                < AutoFixHighIcon />
                <h1 className="ml-2">What is the best product for me?</h1>
              </button>
              <button
                className="border py-3 mb-2 ml-2 px-3 bg-custom-gray rounded-xl items-center inline-flex hover:bg-gray-200 to-white hover:cursor-pointer shadow-sm"
                onClick={() => handlePromptClick('Show me the cheapest gummies')}
              >
                < AutoFixHighIcon />
                <h1 className="ml-2">Show me the cheapest gummies</h1>
              </button>
        
            </>
          )}
        </div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setMessages((currentMessages) => [
              ...currentMessages,
              {
                id: Date.now(),
                display: <div>{inputValue}</div>,
                role: 'user',
              },
            ]);

            const responseMessage = await submitUserMessage(inputValue);
            setMessages((currentMessages) => [...currentMessages, { ...responseMessage, role: 'assistant' }]);
            setInputValue('');
          }}
        >
          <input
            className="bg-custom-gray w-full rounded-2xl py-5 px-5 outline-none"
            placeholder="Send a message..."
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
}