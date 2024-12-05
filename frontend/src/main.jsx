import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

// Enable React Query
createRoot(document.getElementById("root")).render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
);
