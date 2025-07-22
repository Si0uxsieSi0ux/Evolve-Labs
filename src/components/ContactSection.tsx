import React, { forwardRef } from 'react';

//const ContactSection: React.FC = () => {
const ContactSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <>
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center [background:linear-gradient(180deg,_#fff,_#efcfa2_76.98%)]"
      /*className="min-h-screen flex items-center justify-center bg-yellow-100"*/
    >
      {/*<h1 className="absolute top-15 left-6 text-4xl font-bold">Contact</h1>*/}
      {/* Contenido dividido en dos */}
        <div className="flex w-full px-10 gap-10">
          {/* Lado izquierdo: formulario */}
          <div className="w-1/2 flex flex-col justify-center items-start space-y-4">
            <h1 className="text-4xl font-bold">Still have questions?</h1>
            <p className="text-gray-700 max-w-md">
              Leave a request and we will contact you to help you choose the best training format.
            </p>
            
            {/* Input + botón en una línea */}
          <div className="w-full max-w-md  flex items-center"></div>
            <div >
              <input
                id="email"
                type="email"
                placeholder="Your email"
                /*className="w-full max-w-md px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"*/
                className="text-base flex-1 px-2 py-2 bg-transparent outline-none placeholder-gray-600"
              />
              
              {/*<button className="mt-2 px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition">*/}
              <button 
                //className="ml-2 px-6 py-2 bg-black text-white rounded-md hover:bg-yellow-500 transition">*/}
                className="ml-10 px-10 py-1 bg-black text-white hover:bg-yellow-500 transition shadow-[6px_7px_8px_rgba(0,_0,_0,_0.25)] rounded-[5px] bg-black "
                >
                Submit
              </button>
              
            </div>
            <div className="w-full border-black border-solid border-t-[2px] box-border">
              </div>
          </div>

          {/* Lado derecho: texto decorativo */}
          <div className="w-7/5 flex flex-col justify-center items-end text-right">
            <h1 className="text-4xl font-bold">
              Let’s build the future together.<br />
              Reach out and we’ll get back to you soon.
            </h1>
            
          </div>
          
        </div>

      
    </section>

    {/* Footer pegado justo después */}
      <footer className="bg-black text-white px-10 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className="text-sm uppercase text-gray-400">Email</h3>
            <p className="text-base">contact@yourdomain.com</p>
          </div>
          <div>
            <h3 className="text-sm uppercase text-gray-400">Phone</h3>
            <p className="text-base">+1 (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-sm uppercase text-gray-400">Social Community</h3>
            <p className="text-base">Instagram · LinkedIn · X</p>
          </div>
        </div>
        <div className="border-t border-gray-700 my-6"></div>
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </footer>
    </>
    
  );
});

ContactSection.displayName = 'ContactSection';

export default ContactSection;