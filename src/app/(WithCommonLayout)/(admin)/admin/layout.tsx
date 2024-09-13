import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div>
            <h2>Admin Layout</h2>
            {children}
        </div>
    );
}