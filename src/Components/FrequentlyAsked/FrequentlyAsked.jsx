import React from "react";

const FrequentlyAsked = () => {
  return (
    <div className="w-11/12 mx-auto">
       <h1 className="text-3xl font-bold text-accent text-center my-4">What People Frequently Asked</h1>
      <div className="flex lg:flex-row md:flex-row flex-col-reverse justify-around items-center my-8">
        <div className="join join-vertical bg-base-100">
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title font-semibold">
              What services does this tour management platform offer?
            </div>
            <div className="collapse-content text-sm">
              We offer tour booking, guide matching, destination
              recommendations, and complete trip management—all in one place!
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold">
              What happens if a tour is canceled?
            </div>
            <div className="collapse-content text-sm">
              If a tour is canceled due to unforeseen circumstances, you’ll
              receive a full refund or the option to reschedule at no extra
              cost.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold">
              How do I contact my tour guide?
            </div>
            <div className="collapse-content text-sm">
              After booking, you’ll receive the guide’s contact number and all
              necessary trip details in your dashboard and email.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold">
              Do you offer group or family discounts?
            </div>
            <div className="collapse-content text-sm">
              Yes, we provide special discounts for group bookings and families.
              Contact our support team for a custom quote.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold">
              Can I join a tour midway or leave early?
            </div>
            <div className="collapse-content text-sm">
              In most cases, yes—but you'll need to inform us in advance so we
              can coordinate logistics and safety.
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 w-fit">
          <img
            src="https://i.ibb.co/hJ1vyJxw/Debotakhum.jpg"
            alt="Forest 1"
            class="w-32 h-48 object-cover ml-12 rounded-md rounded-tl-[70px]"
          />

          <img
            src="https://i.ibb.co/qYGWdYs1/sajek.jpg"
            alt="Forest 2"
            class="w-48 h-48 object-cover  rounded-md  rounded-tr-[60px]"
          />

          <img
            src="  https://i.ibb.co/j92X4p0g/niladri.jpg   "
            alt="Lake"
            class="w-48 h-48 object-cover  rounded-md  rounded-bl-[50px]"
          />

          <img
            src="https://i.ibb.co/fYhNb2SD/saint-Martain.jpg"
            alt="House"
            class="w-32 h-48 ml-2 object-cover  rounded-md  rounded-br-[70px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAsked;
