const sharedConfig = require("tailwind-config/tailwind.config.js");

module.exports = {
    presets: [sharedConfig],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    plugins: [require("daisyui"), require("@tailwindcss/forms")],
    theme: {
        zIndex: { 1: 1 },
        extend: {
            colors: {
                topics: "#F7FF78",
                success: {
                    lighter: "#ECFDF5",
                    light: "#AEF9BF",
                    main: "#31A783",
                    dark: "#047857",
                    darker: "#1FA62B",
                },
                info: {
                    lighter: "#edf2f7",
                    light: "#bacce2",
                    main: "#4a6fa5",
                    dark: "#2d4572",
                    darker: "#0f1f2e",
                },
                warning: {
                    lighter: "#FFF7D7",
                    light: "#FFEDAE",
                    main: "#FFD949",
                    dark: "#D6B12B",
                    darker: "#A68F1F",
                },
                danger: {
                    lighter: "#FDE8D7",
                    light: "#F9BFAE",
                    main: "#FF6A49",
                    dark: "#D63F2B",
                    darker: "#A62B1F",
                },
                primary: {
                    500: "#6B7280",
                },
                secondary: {
                    400: "#EDF74E",
                },
                gray: {
                    50: "#F9FAFB",
                    100: "#F3F4F6",
                    200: "#E5E7EB",
                    300: "#D1D5DB",
                    400: "#9CA3AF",
                    500: "#6B7280",
                    600: "#4B5563",
                    700: "#374151",
                    800: "#1F2937",
                    900: "#111827",
                },
                landing: {
                    yellow: "#EBF64E",
                    dark: "#131313",
                    pink: "#EB47AA",
                    "light-pink": "#F7A8C2",
                    gray: "#C5C5C5",
                    red: "#f54734",
                },
                acento: {
                    50: "#FFEEEB",
                    400: "#EE5335",
                    500: "#CC3E22",
                },
                pink: {
                    100: "#FFC5E8",
                    400: "#EC47AB",
                    500: "#CA338F",
                    600: "#A82273",
                },
                ceal: {
                    100: "#C3FAFF",
                    500: "#42B6C1",
                    600: "#329AA4",
                },
                cyan: {
                    300: "#67EFFB",
                },
            },
            height: {
                "empty-state": "512px",
            },
        },
    },
    daisyui: {
        darkTheme: "light",
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")["light"],
                    primary: "#000",
                    "primary-content": "#fff",
                },
            },
        ],
    },
    important: ".custom-app",
};
