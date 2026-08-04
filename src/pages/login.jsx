import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "mor_2314", password: "83r5^_" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

 
  const handleSubmit = async (event) => {
  event.preventDefault();
  setLoading(true);
  setError("");

  try {
    // Check locally registered user first
    const savedUser = JSON.parse(
      localStorage.getItem("registeredUser")
    );

    if (
      savedUser &&
      form.username === savedUser.username &&
      form.password === savedUser.password
    ) {
      localStorage.setItem("token", "local-user-token");
      login();
      navigate("/checkout");
      return;
    }

    // If not local user, use Fake Store API login
    await login(form);
    navigate("/checkout");

  } catch (err) {
    setError(err.message || "Login failed. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm shadow-slate-200/60">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.28em] text-indigo-600">Member login</p>
        <h1 className="text-3xl font-bold text-slate-900">Sign in to continue</h1>
        <p className="mt-3 text-slate-600">Use the seeded account to complete checkout.</p>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Username</span>
            <input
              required
              name="username"
              value={form.username}
              onChange={handleChange}
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Password</span>
            <input
              required
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </label>

          {error ? <div className="rounded-3xl bg-red-50 p-4 text-sm text-red-700">{error}</div> : null}

          <button
            type="submit"
            className="inline-flex w-full justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
