export default function CatDetails(_prop: any) {
  return (
    <div className="w-full ms-5">
      <div className="text-start ms-4 mt-5">
        <div className="flex" style={{ color: '#25384D' }}>
          <img src="src/assets/icons/arrow_left.svg" className="mr-4" alt="" />
          <h1>Healthfit</h1>
        </div>
        <div className="flex mt-5">
          <div className="flex flex-col" style={{ color: '#25384D' }}>
            <img src="src/assets/icons/health_fit.svg" alt="" />
            <h4 className="mt-4">Available</h4>
          </div>
          <div className="ms-5">
            <h3 style={{ color: '#25384D' }}>Healthfit</h3>
            <div className="flex mt-4">
              <img src="src/assets/icons/map_arrow.svg" className="mr-5" alt="" />
              <p style={{ color: '#5A7894' }} className="w-2/3">
                190, Queens street E,Brampton
              </p>
            </div>
          </div>
          <div className='flex flex-col mt-5'>
            <h4 style={{ color: "#25384D" }}>20% off annual gym membership</h4>
            <p style={{ color: "#5A7894" }} className='my-1'>Expires 01/06/2023</p>
          </div>
        </div>
        <div className="map mt-4 mx-auto">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.645049615653!2d-122.10064617980805!3d37.42186378509058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba103c73ff4f%3A0x490b0306da6e619b!2sStarbucks!5e0!3m2!1sen!2s!4v1679457601321!5m2!1sen!2s"
            width="1800"
            height="550"
            className='rounded-lg'
            loading="lazy"
          ></iframe>
        </div>
        <div className='mt-6 text-start' style={{ color: "#25384D", fontWeight: "400", fontSize: "16px", lineHeight: "24px" }}>
          Take advantage of this limited-time offer for a comprehensive health insurance plan with enhanced benefits. This plan provides coverage for medical, hospitalization, and prescription drug expenses, ensuring you and your family have access to quality healthcare when you need it most. Enjoy the following:
          <br /><br />
          <strong>Features:</strong>
          <ul className='ms-9 my-2' style={{ listStyleType: "disc" }}>
            <li style={{ color: "#25384D" }}>Wide network of healthcare providers and hospitals.</li>
            <li style={{ color: "#25384D" }}>No deductibles for preventive care services.</li>
            <li style={{ color: "#25384D" }}>Coverage for pre-existing conditions.</li>
            <li style={{ color: "#25384D" }}>Access to specialist consultations.</li>
            <li style={{ color: "#25384D" }}>Prescription drug coverage with affordable co-pays.</li>
            <li style={{ color: "#25384D" }}>Telemedicine services for convenient virtual consultations.</li>
          </ul>
          <strong>Terms and Conditions:</strong>
          <ul className='ms-9 my-2' style={{ listStyleType: "disc" }}>
            <li style={{ color: "#25384D" }}>Offer available for new customers who enroll before 01/06/2023.</li>
            <li style={{ color: "#25384D" }}>Premiums may vary based on age, location, and specific coverage options.</li>
            <li style={{ color: "#25384D" }}>Certain limitations and exclusions may apply. Please review the policy documentation for complete details.</li>
            <li style={{ color: "#25384D" }}>This offer is subject to the underwriting approval of the insurance provider.</li>
            <li style={{ color: "#25384D" }}>Not valid in combination with any other promotions or discounts.</li>
          </ul>
        </div>


      </div>
    </div>
  );
}
