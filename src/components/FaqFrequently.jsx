import React from 'react'
import FaqImg from "../assets/FaqSmiling.jpg"
import { Link } from 'react-router-dom'
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";


const FaqFrequently = () => {
  return (
    <div  className='m-20 grid grid-cols-3 gap-20'>
      <section className='col-span-2'>
       <div>
         <h1 className='text-3xl md:text-4xl font-bold mt-20 mb-10 '>Frequently Asked Questions</h1>
         <p>Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue leo metus, primis in orci integer metus mollis faucibus enim. Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium purus feugiat dolor impedit magna purus pretium gravida donec ligula massa gravida donec pretium</p>
       </div>
       <div>
         <h1  className='font-bold text-blue-400 text-2xl mt-10 mb-10'>1. General Questions</h1>
        <Accordion>
           <AccordionPanel>
        <AccordionTitle>What is Flowbite?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
            dropdowns, modals, navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to&nbsp;
            <a
              href="https://flowbite.com/docs/getting-started/introduction/"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              get started&nbsp;
            </a>
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>Is there a Figma file available?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
            has a design equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the
            <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
              Figma design system
            </a>
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>What are the differences between Flowbite and Tailwind UI?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
       </div>
       <div>
         <h1 className='font-bold text-blue-400 text-2xl mt-10 mb-10'>2. Medical Treatment Questions</h1>
         <Accordion>
           <AccordionPanel>
        <AccordionTitle>What is Flowbite?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
            dropdowns, modals, navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to&nbsp;
            <a
              href="https://flowbite.com/docs/getting-started/introduction/"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              get started&nbsp;
            </a>
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>Is there a Figma file available?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
            has a design equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the
            <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
              Figma design system
            </a>
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>What are the differences between Flowbite and Tailwind UI?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
     </div>
       <div>
         <h1 className='font-bold text-blue-400 text-2xl mt-10 mb-10' >3. Emergency Help Questions</h1>
        <Accordion>
           <AccordionPanel>
        <AccordionTitle>What is Flowbite?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
            dropdowns, modals, navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to&nbsp;
            <a
              href="https://flowbite.com/docs/getting-started/introduction/"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              get started&nbsp;
            </a>
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>Is there a Figma file available?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
            has a design equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the
            <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
              Figma design system
            </a>
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>What are the differences between Flowbite and Tailwind UI?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
       </div>
     </section>
         
     <section className='col-span-1'>
          <h3  className='font-bold text-2xl mb-4  border-b py-5'>The Heart Of Clinic</h3>
        <div className=' flex flex-row py-2 gap-5'>
          <div>
           <img src={FaqImg} className='h-50 w-40' alt="Faqimg" />  
          </div>
          <div className='mt-10'>
            <h4 className='font-semibold text-2xl mb-2'> Dr. jonathan Barnes</h4>
            <p>Chief Medical Officer, Founder</p>
            <h2 className='font-bold text-blue-400 text-3xl'>1-800-1234-567</h2>
          </div>
        </div>
        <p className='py-2'>An enim nullam tempor sapien at gravida donec <br /> pretium ipsum porta justo integer at odiovelna vitae <br /> auctor integer congue magna purus</p>
        <button className='bg-blue-400 rounded p-3 text-white'>Learn More</button>
         <div className="bg-blue-400 p-10 text-white rounded-lg mt-10 w-90">
                   <div>
                        <h3 className='text-2xl font-bold mb-6'>Working Time</h3>
    <p className='mb-8 text-white/90'>
       Porta semper lacus cursus, feugiat primis ultrice ligula risus auctor at tempus feugiat dolor lacinia cursus nulla vitae massa
    </p>
                   </div>
       <div className='space-y-6'>
       <div className='flex justify-between border-b-2 border-dotted border-white/30 pb-4'>
    
               <span>Mon – Wed	</span>
               <span>-</span>	
               <span>9:00 AM - 7:00 PM</span>
               
       </div>
            <div className='flex justify-between border-b-2 border-dotted border-white/30 pb-4'>
               <span> Thursday</span>	
               <span>-</span>	
               <span>9:00 AM - 6:30 PM</span>
    
            </div>

           <div className='flex justify-between border-b-2 border-dotted border-white/30 pb-4'>
                <span>Friday</span> 
                <span>-</span>	
                <span>9:00 AM - 6:00 PM</span>
    
                
           </div>
            <div className='flex justify-between pb-4'>
                <span> Sun</span>	
                <span>-</span>	
                <span>CLOSED</span>
          
    
            </div>
            <h3 className='text-1xl font-bold mb-6'>Need a personal health plan?</h3>
            <p className='mt-2'>Porta semper lacus cursus, and feugiat primis ultrice ligula at risus auctor</p>
       </div>


         

                  </div>

                  <div className='border rounded mt-10 p-8 w-85'>
          <h2  className='font-bold text-2xl mb-4 py-5' >Doctors Timetable</h2>
          <p>Porta semper lacus cursus, feugiat primis <br /> ultrice ligula risus auctor at tempus feugiat <br /> dolor lacinia cursus nulla vitae massa</p>
           <button className='bg-blue-400 rounded p-3 mt-5 text-white'>View Timetable</button>
         </div>
     </section>
    </div>
  )
}

export default FaqFrequently
