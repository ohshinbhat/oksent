import React from "react";
import Navbar from "../components/Navbar";
import { GrPlan } from "react-icons/gr";
import { IconContext } from "react-icons";
import { BsGraphDown } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import QuoteForm from "../components/QuoteForm";
const Recycling = () => {
  return (
    <div>
      <div></div>
      <div>
        <section id="home" className="bg-white py-5 md:py-10">
          <div className="container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row-reverse items-center">
            {/* Text Content */}
            <div className="md:w-1/2 pl-10 flex flex-col">
              <div className="text-[10px] md:text-[20px]">
                Minimize waste with our efficient
              </div>
              <h1 className="text-[40px] md:text-[60px] font-bold text-gray-900 mb-4 leading-tight">
                Metal Recycling Services
              </h1>
              <p className="text-lg text-gray-600 mb-10">
                Our efficient metal recycling services are designed to minimize
                waste and promote sustainability in alignment with the United
                Nations' sustainability goals. We responsibly recycle scrap and
                excess metal, reducing environmental impact and conserving
                natural resources. By implementing advanced recycling
                techniques, we contribute to a circular economy where materials
                are reused and repurposed, fostering a cleaner and more
                sustainable future.
              </p>
            </div>

            {/* Image Content */}
            <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center items-center">
              <img
                src="/Images/hero.png"
                alt="Hero Image"
                className="h-auto"
                width={400}
                height={400}
              />
            </div>
          </div>
        </section>
        <div className="flex flex-col gap-4 container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full text-center text-[30px] font-bold">
            Metal We Recycle
          </div>
          <div className="flex flex-row">
            <div className="flex-1 flex flex-col items-start justify-center pl-10 text-[24px] font-semibold">
              <button className="">HMS</button>
              <button>Mixed Metals</button>
              <button>Zinc</button>
              <button>Aluminium</button>
              <button>Lithium</button>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
        <div className="flex flex-col bg-green-100 rounded-xl gap-4 container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full text-center text-[30px] font-bold">
            Benefits of Recycling
          </div>
          <div className="flex flex-row gap-10 pt-5 px-10">
            <div className="flex-1 flex flex-col gap-2">
              <div>
                <IconContext.Provider value={{ size: "2em" }}>
                  <GrPlan />
                </IconContext.Provider>
              </div>
              <div className="text-left text-base font-semibold">
                Resource Efficiency
              </div>
              <div className="text-justify text-sm">
                Access detailed cost analysis and budgeting tools to better plan
                for future expenditures and avoid unexpected financial strain.
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <div>
                <IconContext.Provider value={{ size: "2em" }}>
                  <BsGraphDown />
                </IconContext.Provider>
              </div>
              <div className="text-left text-base font-semibold">
                Environmental Conservation
              </div>
              <div className="text-justify text-sm">
                Leverage our services to minimize operational expenses and
                improve your bottom line, freeing up resources for strategic
                growth initiatives.
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <div>
                <IconContext.Provider value={{ size: "2em" }}>
                  <FaCheckCircle />
                </IconContext.Provider>
              </div>
              <div className="text-left text-base font-semibold">
                Energy Conservation
              </div>
              <div className="text-justify text-sm">
                Improve resource allocation and utilization, ensuring you invest
                in areas with the highest return on investment and operational
                efficiency.
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <div>
                <IconContext.Provider value={{ size: "2em" }}>
                  <GiReceiveMoney />
                </IconContext.Provider>
              </div>
              <div className="text-left text-base font-semibold">
                Cost Savings
              </div>
              <div className="text-justify text-sm">
                Based on the different plans, enable SMEs to minimize upfront
                costs and manage cash flow effectively, reducing financial
                strain on operational budgets.
              </div>
            </div>
          </div>
        </div>
        <div>
          <QuoteForm />
        </div>
      </div>
    </div>
  );
};

export default Recycling;