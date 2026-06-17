import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams, useParams } from "react-router-dom";
import { ArrowRight, ArrowLeft, ShieldCheck, Mail, Key, Eye, EyeOff } from "lucide-react";
import { forgotPassword, resetPassword } from "../../services/auth.api.js";
import toast from "react-hot-toast";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const { token } = useParams(); // Grabs token if visiting via email recovery link

  // Screen layout toggles
  const isResetMode = !!token; 
  const [emailSent, setEmailSent] = useState(false);
  
  // Data Form States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRequestLink = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    try {
      setLoading(true);
      await forgotPassword(email.trim());
      setEmailSent(true);
      toast.success("Recovery instructions dispatched!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to process request");
    } finally {
      setLoading(false);
    }
  };

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);
      await resetPassword(token, password);
      toast.success("Password updated successfully!");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Reset token invalid or expired");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brownie flex flex-col justify-between antialiased font-sans select-none selection:bg-caramel selection:text-white">
      
      {/* Navbar */}
      <nav className="w-full max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between border-b border-white/5 sticky top-0 bg-brownie/90 backdrop-blur-md z-50">
        <div>
          <span className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
            Memory Bridge
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/login" className="text-sm font-semibold text-cream/80 hover:text-white transition-colors">
            Back to Sign In
          </Link>
        </div>
      </nav>

      {/* Main Structural Frame Card Box */}
      <main className="flex-1 w-full max-w-md mx-auto px-4 flex flex-col justify-center py-12 animate-fade-in">
        <div className="bg-cream rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl border border-caramel/20 text-brownie">
          
          {/* HEADER CONDITIONAL RENDERING STATES */}
          <div>
            <h3 className="font-display text-2xl font-bold text-brownie tracking-tight">
              {isResetMode ? "Reset Password" : emailSent ? "Check your mail" : "Recover Account"}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-coffee/80 mt-1">
              {isResetMode 
                ? "Establish your pristine secure master access key credentials below."
                : emailSent 
                ? `We transmitted an archive restoration security string to ${email}.`
                : "Enter your vault identifier email to dispatch account recovery metrics."}
            </p>
          </div>

          {/* STATE 1: RECOVERY LINK REQUEST MODE */}
          {!isResetMode && !emailSent && (
            <form onSubmit={handleRequestLink} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brownie/70 mb-1.5 pl-0.5">
                  Account Email Identifier
                </label>
                <input
                  type="email"
                  required
                  placeholder="madhur@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/70 border border-caramel/30 rounded-xl px-4 py-3 text-sm text-brownie placeholder:text-coffee/40 outline-none transition-all focus:border-brownie focus:bg-white focus:ring-2 focus:ring-brownie/10"
                />
              </div>

              <button
                type="submit"
                disabled={loading || !email.trim()}
                className="w-full bg-brownie text-white hover:bg-coffee px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all active:scale-[0.99] shadow-md flex items-center justify-center gap-2 disabled:bg-coffee/30 disabled:text-coffee/50"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send Recovery Link</span>
                    <ArrowRight size={15} />
                  </>
                )}
              </button>
            </form>
          )}

          {/* STATE 2: SUCCESS EMAIL POST-SEND INTERACTIVE ACTION LAYER */}
          {!isResetMode && emailSent && (
            <div className="space-y-4 text-center py-2 animate-fade-in">
              <div className="w-12 h-12 rounded-full bg-caramel/10 text-caramel flex items-center justify-center mx-auto mb-2">
                <ShieldCheck size={24} />
              </div>
              <p className="text-xs text-coffee/70 leading-relaxed font-sans max-w-xs mx-auto">
                Did not acquire the security payload transmission link? Review your spam directory folder or click below to re-execute.
              </p>
              <button
                onClick={() => setEmailSent(false)}
                className="text-xs font-bold text-caramel hover:underline"
              >
                Re-enter Email Address
              </button>
            </div>
          )}

          {/* STATE 3: LIVE SECURE KEY UPDATE RESET EXECUTION MODE */}
          {isResetMode && (
            <form onSubmit={handleResetSubmit} className="space-y-4 animate-fade-in">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brownie/70 mb-1.5 pl-0.5">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white/70 border border-caramel/30 rounded-xl pl-4 pr-11 py-3 text-sm text-brownie placeholder:text-coffee/40 outline-none transition-all focus:border-brownie focus:bg-white focus:ring-2 focus:ring-brownie/10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-coffee/60 hover:text-brownie p-1 rounded-md transition-colors"
                  >
                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brownie/70 mb-1.5 pl-0.5">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-white/70 border border-caramel/30 rounded-xl px-4 py-3 text-sm text-brownie placeholder:text-coffee/40 outline-none transition-all focus:border-brownie focus:bg-white focus:ring-2 focus:ring-brownie/10"
                />
              </div>

              <button
                type="submit"
                disabled={loading || !password}
                className="w-full bg-brownie text-white hover:bg-coffee px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all active:scale-[0.99] shadow-md flex items-center justify-center gap-2 disabled:bg-coffee/30 disabled:text-coffee/50"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Update Access Password</span>
                    <ArrowRight size={15} />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Universal Back Anchor Control */}
          <div className="pt-2 border-t border-caramel/10 text-center">
            <Link to="/login" className="inline-flex items-center gap-1.5 text-xs font-bold text-caramel hover:text-brownie transition-colors">
              <ArrowLeft size={13} />
              <span>Return to login gate</span>
            </Link>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/5 bg-brownie py-6 text-center text-xs font-medium text-cream/30">
        <p>© 2026 Memory Bridge AI. Keeping stories alive forever.</p>
      </footer>

    </div>
  );
}