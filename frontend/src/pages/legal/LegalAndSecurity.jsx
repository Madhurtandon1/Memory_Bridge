import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ShieldCheck, FileText, Lock, ArrowLeft, CheckCircle2, Server, Key } from "lucide-react";

export default function LegalAndSecurity() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("privacy");

  // Automatically switch tabs if a user lands via a footer anchor link hash
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (["privacy", "terms", "security"].includes(hash)) {
      setActiveTab(hash);
    }
  }, [location]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    navigate(`#${tabId}`);
  };

  return (
    <div className="min-h-screen bg-cream text-brownie py-8 antialiased font-sans pb-16 animate-fade-in">
      
      {/* 1. Header Frame Workspace */}
      <header className="h-20 border-b border-caramel/10 bg-white/70 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 rounded-xl hover:bg-caramel/10 text-brownie transition-colors flex items-center justify-center"
            title="Go Back"
          >
            <ArrowLeft size={18} />
          </button>
          <div>
            <span className="font-display font-bold text-xl text-brownie tracking-tight">Memory Bridge</span>
            <span className="text-xs text-caramel font-bold uppercase tracking-wider block mt-0.5">Trust & Security Core</span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-8">
        
        {/* 2. Interactive Section Nav Switcher Tabs */}
        <div className="flex flex-col sm:flex-row bg-white/60 border border-caramel/10 rounded-2xl p-1.5 gap-1 shadow-sm">
          <button
            onClick={() => handleTabChange("privacy")}
            className={`flex-1 flex items-center justify-center gap-2.5 py-3 rounded-xl font-bold text-sm tracking-wide transition-all ${
              activeTab === "privacy"
                ? "bg-brownie text-white shadow-md shadow-brownie/15"
                : "text-brownie/70 hover:bg-caramel/10 hover:text-brownie"
            }`}
          >
            <ShieldCheck size={16} />
            <span>Privacy Policy</span>
          </button>
          
          <button
            onClick={() => handleTabChange("terms")}
            className={`flex-1 flex items-center justify-center gap-2.5 py-3 rounded-xl font-bold text-sm tracking-wide transition-all ${
              activeTab === "terms"
                ? "bg-brownie text-white shadow-md shadow-brownie/15"
                : "text-brownie/70 hover:bg-caramel/10 hover:text-brownie"
            }`}
          >
            <FileText size={16} />
            <span>Terms of Service</span>
          </button>
          
          <button
            onClick={() => handleTabChange("security")}
            className={`flex-1 flex items-center justify-center gap-2.5 py-3 rounded-xl font-bold text-sm tracking-wide transition-all ${
              activeTab === "security"
                ? "bg-brownie text-white shadow-md shadow-brownie/15"
                : "text-brownie/70 hover:bg-caramel/10 hover:text-brownie"
            }`}
          >
            <Lock size={16} />
            <span>Data Security Vault</span>
          </button>
        </div>

        {/* 3. Render Content Grid Panels dynamically */}
        <div className="bg-white rounded-3xl border border-caramel/10 p-6 sm:p-10 shadow-xl min-h-[500px]">
          
          {/* PRIVACY POLICY CONTENT */}
          {activeTab === "privacy" && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-1">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-brownie">Privacy Policy</h2>
                <p className="text-xs text-coffee/60 font-semibold uppercase tracking-wider">Last Updated: March 2026</p>
              </div>
              <div className="w-16 h-0.5 bg-caramel/30 rounded" />
              
              <div className="space-y-4 text-sm sm:text-base text-coffee/90 leading-relaxed font-sans">
                <p>
                  At Memory Bridge, we consider personal memories to be among the most valuable assets of human life. This Privacy Policy outlines exactly how we capture, isolate, process, and protect your digital story logs.
                </p>
                
                <h3 className="font-display text-lg sm:text-xl font-bold text-brownie pt-4">1. Information We Collect</h3>
                <p>To run your AI memory companion effectively, we require access to the data inputs you deliberately choose to share with us:</p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-coffee/80">
                  <li><strong>Textual Input:</strong> Written journal notes, personal growth reflections, and manual life milestone entries.</li>
                  <li><strong>Audio Recordings:</strong> Voice diaries, raw spoken logs, and conversations uploaded directly to convert into text transcripts.</li>
                  <li><strong>AI-Generated Insights:</strong> Analytical trends, emotional maps, summary embeddings, and relationship networks generated by processing your inputs.</li>
                </ul>

                <h3 className="font-display text-lg sm:text-xl font-bold text-brownie pt-4">2. How Your Memories Are Processed</h3>
                <p>
                  We utilize localized artificial intelligence models to isolate context summaries, places mentioned, entities, and emotional vectors. <strong>Your files are never sold, rented, shared, or compiled for marketing profiling systems.</strong> Your data belongs entirely to you.
                </p>
              </div>
            </div>
          )}

          {/* TERMS OF SERVICE CONTENT */}
          {activeTab === "terms" && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-1">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-brownie">Terms of Service</h2>
                <p className="text-xs text-coffee/60 font-semibold uppercase tracking-wider">Last Updated: March 2026</p>
              </div>
              <div className="w-16 h-0.5 bg-caramel/30 rounded" />
              
              <div className="space-y-4 text-sm sm:text-base text-coffee/90 leading-relaxed font-sans">
                <p>
                  By deploying a secure user account configuration with Memory Bridge, you agree to comply with the terms, data handling structures, and framework permissions outlined below.
                </p>

                <h3 className="font-display text-lg sm:text-xl font-bold text-brownie pt-4">1. Vault Account Ownership</h3>
                <p>
                  You must provide valid, real credential identifiers (such as an authentic email) during registration. You maintain exclusive accountability for preserving the credentials to your personal digital legacy vault. Memory Bridge is not liable for data access breaches caused by weak user security habits.
                </p>

                <h3 className="font-display text-lg sm:text-xl font-bold text-brownie pt-4">2. Permitted Use & Content Restrictions</h3>
                <p>
                  You retain complete intellectual property titles over all voice audio diaries, reflections, and texts logged inside the platform. You may not use Memory Bridge to upload malicious file scripts, binary exploits, or host illegal processing contents.
                </p>

                <h3 className="font-display text-lg sm:text-xl font-bold text-brownie pt-4">3. Absolute Termination Data Rights</h3>
                <p>
                  We believe your digital legacy should remain under your absolute command. You have the right to completely wipe your profile vault logs at any time. When you select "Delete Account," all associated audio uploads, timelines, and embeddings are purged instantly from our servers.
                </p>
              </div>
            </div>
          )}

          {/* SECURITY VAULT SPECIFICATIONS CONTENT */}
          {activeTab === "security" && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-1">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-brownie">Data Security Vault</h2>
                <p className="text-xs text-coffee/60 font-semibold uppercase tracking-wider">Platform Protection Standards</p>
              </div>
              <div className="w-16 h-0.5 bg-caramel/30 rounded" />
              
              <p className="text-sm sm:text-base text-coffee/90 leading-relaxed font-sans">
                Memory Bridge deploys enterprise-grade database encryption algorithms to ensure your private life logs, emotional summaries, and personal conversations stay entirely safe.
              </p>

              {/* Security Core Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <div className="border border-caramel/15 p-5 rounded-2xl bg-cream/10 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-caramel/10 flex items-center justify-center text-caramel">
                    <Key size={16} />
                  </div>
                  <h4 className="font-bold text-sm text-brownie">End-to-End Encryption</h4>
                  <p className="text-xs text-coffee/80 leading-relaxed">
                    All assets and files are locked using cryptographic AES-256 tokens at rest and secure SSL/TLS channels in transit.
                  </p>
                </div>

                <div className="border border-caramel/15 p-5 rounded-2xl bg-cream/10 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-caramel/10 flex items-center justify-center text-caramel">
                    <Server size={16} />
                  </div>
                  <h4 className="font-bold text-sm text-brownie">Isolated Vector Vaults</h4>
                  <p className="text-xs text-coffee/80 leading-relaxed">
                    Your AI memory embeddings map completely separate from open shared network pipelines, blocking unauthorized data leaking.
                  </p>
                </div>

                <div className="border border-caramel/15 p-5 rounded-2xl bg-cream/10 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-caramel/10 flex items-center justify-center text-caramel">
                    <CheckCircle2 size={16} />
                  </div>
                  <h4 className="font-bold text-sm text-brownie">Zero-Knowledge Storage</h4>
                  <p className="text-xs text-coffee/80 leading-relaxed">
                    Access permissions are scoped explicitly to you. No open algorithmic monitoring or manual engineering review overrides exist.
                  </p>
                </div>
              </div>

              <div className="bg-brownie text-cream rounded-2xl p-5 mt-6 border border-white/5 space-y-2">
                <h4 className="text-sm font-bold text-white tracking-wide">Continuous Auditing Strategy</h4>
                <p className="text-xs text-cream/80 leading-relaxed font-sans">
                  We frequently refresh our deployment tokens, token verification nodes, and database connection architectures to withstand modern exploitation methods, keeping your digital identity completely protected over generations.
                </p>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}