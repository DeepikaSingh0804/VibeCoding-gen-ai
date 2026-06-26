export default function Footer() {
  return (
    <footer className="bg-[#0B0F19] text-white border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}

          <div>
            <h2 className="text-2xl font-bold">
              NextGenAI
            </h2>

            <p className="text-slate-400 mt-4 leading-relaxed">
              Automate workflows, boost productivity,
              and scale your business with AI-powered
              automation.
            </p>
          </div>

          {/* Product */}

          <div>
            <h3 className="font-semibold mb-4">
              Product
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Integrations</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
            </ul>
          </div>

          {/* Company */}

          <div>
            <h3 className="font-semibold mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Resources */}

          <div>
            <h3 className="font-semibold mb-4">
              Resources
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}

        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-500 text-sm">
            © 2026 NextGenAI. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-slate-400">

            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>

          </div>

        </div>

      </div>

    </footer>
  );
}