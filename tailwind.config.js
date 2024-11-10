/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        create: "#4CAF50",
        "create-hover": "#43A047",
        update: "#FF9800",
        "update-hover": "#FB8C00",
        delete: "#F44336",
        "delete-hover": "#E53935",
        detail: "#2196F3",
        "detail-hover": "#1E88E5",
        approve: "#8BC34A",
        "approve-hover": "#7CB342",
        cancel: "#9E9E9E",
        "cancel-hover": "#757575",
        pending: '#FFC107',
        'pending-hover': '#FFB300',
        delivered: '#4CAF50',
        'delivered-hover': '#43A047',
        completed: '#2196F3',
        'completed-hover': '#1E88E5',
      },
    },
  },
  plugins: [],
};
