export function Footer() {
  return (
    <footer className="bg-hospital-blue text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-lg hospital-blue font-bold">PS</span>
              </div>
              <span className="text-xl font-bold">Pavan Sai Hospitals</span>
            </div>
            <p className="opacity-90 leading-relaxed">
              With a mission, through our vision...changing lives since 2008
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Location</h4>
            <p className="opacity-90">R. No: 3, Rocktown Colony,</p>
            <p className="opacity-90">Nagole - LB Nagar Main Road,</p>
            <p className="opacity-90">Hyderabad - 500 068</p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Emergency Contact</h4>
            <p className="opacity-90 mb-2">24 X 7 EMERGENCY, I.C.U, TRAUMA CARE</p>
            <p className="text-lg font-bold hospital-orange">040-24220599, 24221599</p>
            <p className="text-lg font-bold hospital-orange">Cell: 8801719855</p>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="opacity-90">
            © 2024 Pavan Sai Hospitals. All rights reserved. | Changing lives since 2008
          </p>
        </div>
      </div>
    </footer>
  );
}
